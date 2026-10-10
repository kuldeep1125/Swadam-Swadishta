"""[ADDED] Generate local responsive WebP assets for static hosting (requires Pillow)."""
import json
from pathlib import Path

from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "public" / "images"
OUTPUT = SOURCE / "optimized"
MANIFEST = ROOT / "src" / "lib" / "image-manifest.json"


def main():
    OUTPUT.mkdir(exist_ok=True)
    MANIFEST.parent.mkdir(exist_ok=True)
    manifest = {}
    source_bytes = 0
    largest_bytes = 0
    for path in sorted(SOURCE.iterdir()):
        if path.suffix.lower() not in {".jpg", ".jpeg", ".png"}:
            continue
        with Image.open(path) as original:
            image = ImageOps.exif_transpose(original).convert("RGBA" if "A" in original.getbands() else "RGB")
            variants = []
            # [ADDED] Small variants avoid downloading gallery-sized files for menu thumbnails.
            widths = (96, 480, 800, 1200) if path.name == "logo.png" else (160, 320, 480, 800, 1200)
            for width in sorted({min(size, image.width) for size in widths}):
                height = max(1, round(image.height * width / image.width))
                resized = image.resize((width, height), Image.Resampling.LANCZOS)
                # Keep extensions in filenames to avoid jpg/png stem collisions.
                filename = f"{path.name.replace('.', '-')}-{width}.webp"
                target = OUTPUT / filename
                resized.save(target, "WEBP", quality=80, method=6)
                variants.append({"src": f"/images/optimized/{filename}", "width": width})
            manifest[f"/images/{path.name}"] = {
                "width": image.width,
                "height": image.height,
                "variants": variants,
            }
            source_bytes += path.stat().st_size
            largest_bytes += target.stat().st_size
    MANIFEST.write_text(json.dumps(manifest, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"Optimized {len(manifest)} images. Originals: {source_bytes:,} bytes; largest WebP set: {largest_bytes:,} bytes.")


if __name__ == "__main__":
    main()
