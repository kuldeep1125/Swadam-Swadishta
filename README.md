# Swadam Swadishta

<!-- [FIXED] Document the actual restaurant, current stack, and premium redesign workflow. -->
A bilingual English/Marathi website for the Maharashtrian vegetarian restaurant in Baner, Pune. The editorial design preserves every restaurant section and makes the menu and visit information the primary journeys.

Built with Next.js 14, React 18, TypeScript, Tailwind CSS, and Lucide icons. Animation uses CSS and IntersectionObserver; there is no animation-library dependency. The site exports to static HTML and requires no application server or database.

## Run locally

```sh
npm install
npm run dev
```

Open http://localhost:3000. Node.js 18.17 or later is required by this Next.js version.

## Validate and build

```sh
npm test
npx tsc --noEmit
npm run build
```

The production website is generated in `out/`. Run `npm run preview` to view it at http://127.0.0.1:3001 with gzip text delivery and caching for hashed Next assets. This is a local static-file preview, not an application backend. `next start` does not serve this static-export configuration.

When hosting `out/`, enable gzip or Brotli for HTML, CSS and JavaScript. The built-in Python file server sends uncompressed text, so its throttled Lighthouse scores do not represent compressed hosting. The validation report distinguishes these measurements.

## Restaurant content

Edit `src/config/restaurant.ts` for menu items, prices, Marathi names, service hours, address, phone, email, social links, and bulk-order information. The hero serving message uses these configured service windows in Asia/Kolkata, including breaks between services, and refreshes every minute.

The enquiry form prepares WhatsApp or email messages. Visitors must send the message in the destination application; this website does not submit or store enquiries. The review section links to Google Maps and does not claim unverified testimonials are verified.

<!-- [ADDED] The review action and locally generated QR use the supplied Google listing. -->
The review section offers **Add a Google review**, **Read reviews**, and a phone-scannable QR code. All open `googleReviewsUrl` from the restaurant configuration; visitors choose **Write a review** and complete their review on Google Maps. The lossless QR image is served locally, without a QR-image service or application dependency. After changing that URL, regenerate the saved image with `python scripts/generate_review_qr.py` (generation requires Python packages `qrcode`, `Pillow`, and `opencv-python`; normal website builds do not require them).

## Photography

Original images and printable menu artwork remain in `public/images/`. Responsive local WebP variants live in `public/images/optimized/`; `src/lib/image-manifest.json` maps original paths to their variants. Use `ResponsiveImage` with an original image path and accurate `sizes` for responsive delivery on static hosting. Above-fold imagery is eager; other photography is lazy-loaded. The artwork viewer retains full original images for zooming.

<!-- [ADDED] Describe the replacement imagery honestly and keep its provenance reviewable. -->
The photography refinement preserves the strong Poha and Misal images and uses local `premium_*.png` AI-generated illustrations for the remaining dishes, plus a dedicated hero thali composition. These depict the intended dishes rather than documentary photographs of restaurant servings; presentation may vary. The logo, storefront and original menu artwork are preserved. See [photography provenance](artifacts/redesign/photography-assets.md). Small responsive variants serve all 21 menu thumbnails without gallery-sized downloads.

To regenerate variants after updating images, use Python with Pillow installed:

```sh
python -m pip install Pillow
python scripts/optimize_images.py
```

Generated assets and their manifest are project files, so Python is unnecessary for normal development or deployment.

## Interaction and accessibility

Native modal dialogs provide keyboard focus containment, inert backgrounds, Escape dismissal, and focus restoration for mobile navigation and menu artwork. Menu category links activate the matching category before scrolling. The mobile action bar provides Menu and Directions with safe-area spacing.

Motion respects reduced-motion preferences. Content remains available without reveal animation. The continuous food marquee has a pause control; scrolling stays native.

<!-- [ADDED] Cinematic motion uses a still image; no video dependency or external media URL. -->
The hero uses a slow, pausable camera movement over a still photograph. It pauses outside the viewport and while the document is hidden, and becomes static with reduced motion. Selected desktop photographs gain event-driven scroll depth, and story chapter changes have short transitions. Every original section remains separate.

The historical `audit_report.md` describes an earlier implementation. The [initial redesign validation](artifacts/redesign/validation.md) records the first pass; see [photography and motion validation](artifacts/redesign/photography-validation.md) for that pass's screenshots and Lighthouse measurements, and [review-action validation](artifacts/redesign/review-validation.md) for the latest Google review button and QR checks.
