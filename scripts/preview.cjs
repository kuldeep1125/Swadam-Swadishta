// [ADDED] Local static-export preview with gzip, matching typical production asset delivery.
const http = require('node:http');
const fs = require('node:fs/promises');
const path = require('node:path');
const zlib = require('node:zlib');
const root = path.resolve(__dirname, '../out');
const port = Number(process.env.PORT || 3001);
const mime = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8', '.json': 'application/json; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8', '.xml': 'application/xml; charset=utf-8',
  '.svg': 'image/svg+xml', '.webp': 'image/webp', '.png': 'image/png', '.jpg': 'image/jpeg',
  '.woff2': 'font/woff2', '.ico': 'image/x-icon',
};

http.createServer(async (request, response) => {
  try {
    if (!['GET', 'HEAD'].includes(request.method)) {
      response.writeHead(405, { Allow: 'GET, HEAD' });
      response.end();
      return;
    }
    const pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
    let target = path.resolve(root, '.' + pathname);
    const relative = path.relative(root, target);
    if (relative.startsWith('..') || path.isAbsolute(relative)) {
      response.writeHead(403);
      response.end('Forbidden');
      return;
    }
    let status = 200;
    try {
      if ((await fs.stat(target)).isDirectory()) target = path.join(target, 'index.html');
    } catch {
      target = path.join(root, '404.html');
      status = 404;
    }
    let content = await fs.readFile(target);
    const extension = path.extname(target);
    const headers = {
      'Content-Type': mime[extension] || 'application/octet-stream',
      'Cache-Control': pathname.startsWith('/_next/static/') ? 'public, max-age=31536000, immutable' : 'no-cache',
      'X-Content-Type-Options': 'nosniff',
      Vary: 'Accept-Encoding',
    };
    if (/\bgzip\b/.test(request.headers['accept-encoding'] || '') && ['.html', '.css', '.js', '.json', '.txt', '.xml', '.svg'].includes(extension)) {
      content = zlib.gzipSync(content);
      headers['Content-Encoding'] = 'gzip';
    }
    headers['Content-Length'] = content.length;
    response.writeHead(status, headers);
    response.end(request.method === 'HEAD' ? undefined : content);
  } catch {
    response.writeHead(400);
    response.end('Unable to serve this path. Run npm run build before previewing.');
  }
}).listen(port, '127.0.0.1', () => console.log(`Static export preview: http://127.0.0.1:${port}`));
