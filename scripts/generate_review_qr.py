"""[ADDED] Regenerate the local review QR (requires qrcode, Pillow and OpenCV).

The website serves the saved PNG; these tools are only needed for regeneration.
"""
import re
from pathlib import Path

import cv2
import numpy as np
import qrcode
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]


def main():
    config = (ROOT / "src/config/restaurant.ts").read_text(encoding="utf-8")
    match = re.search(r'googleReviewsUrl:\s*"(https://[^"\n]+)"', config)
    if not match:
        raise ValueError("Missing configured HTTPS Google review URL")
    url = match.group(1)
    # [FIXED] This valid QR mask decodes reliably at the card's 254px display size.
    code = qrcode.QRCode(
        error_correction=qrcode.constants.ERROR_CORRECT_M,
        box_size=10,
        border=4,
        mask_pattern=6,
    )
    code.add_data(url)
    code.make(fit=True)
    image = code.make_image(fill_color="black", back_color="white").convert("RGB")
    target = ROOT / "public/images/google-review-qr.png"
    image.save(target)
    # [ADDED] Check the saved source and browser-scale image against the exact URL.
    for size in (image.width, 254, 256):
        sample = np.array(image.resize((size, size), Image.Resampling.LANCZOS))
        readers = (cv2.QRCodeDetector(), cv2.QRCodeDetectorAruco())
        if not any(reader.detectAndDecode(sample)[0] == url for reader in readers):
            raise ValueError(f"QR failed exact destination decoding at {size}px")
    print(f"Saved {target.name}; exact URL decoded at source, 254px and 256px.")


if __name__ == "__main__":
    main()
