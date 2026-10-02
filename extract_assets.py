# [ADDED] Asset extraction script for Swadam Swadishta
import os
import shutil
from PIL import Image

workspace = r"c:\Users\sadee\Downloads\Swadam Swadishta"
public_images = os.path.join(workspace, "public", "images")
os.makedirs(public_images, exist_ok=True)

raw1 = r"C:/Users/sadee/.gemini/antigravity/brain/ec90f5d9-d035-4a5d-866a-e6dbd8bc137d/.user_uploaded/media_1790938319858.jpg"
raw2 = r"C:/Users/sadee/.gemini/antigravity/brain/ec90f5d9-d035-4a5d-866a-e6dbd8bc137d/.user_uploaded/media_1790938328011.jpg"
raw3 = r"C:/Users/sadee/.gemini/antigravity/brain/ec90f5d9-d035-4a5d-866a-e6dbd8bc137d/.user_uploaded/media_1790938336655.png"

# Copy full originals to public/images
shutil.copyfile(raw1, os.path.join(public_images, "poster_original.jpg"))
shutil.copyfile(raw2, os.path.join(public_images, "menu_original.jpg"))
shutil.copyfile(raw3, os.path.join(public_images, "banner_original.png"))

im1 = Image.open(raw1) # 1020 x 1020 (poster with storefront)
im2 = Image.open(raw2) # 1024 x 682 (menu card)
im3 = Image.open(raw3) # 1024 x 350 (banner)

# 1. Storefront photo crop from im1
# The storefront is located on the right side:
# x: 420 to 980, y: 160 to 860
storefront = im1.crop((420, 160, 985, 860))
storefront.save(os.path.join(public_images, "storefront.jpg"), quality=95)

# Storefront wide/entrance crop
storefront_wide = im1.crop((420, 160, 1010, 850))
storefront_wide.save(os.path.join(public_images, "storefront_entrance.jpg"), quality=95)

# Logo crop from im1 (top left badge)
logo1 = im1.crop((70, 15, 360, 255))
logo1.save(os.path.join(public_images, "logo.png"))

# Marathi tagline crop from im1
tagline1 = im1.crop((590, 30, 970, 140))
tagline1.save(os.path.join(public_images, "tagline_marathi.png"))

# "We are OPEN" badge from im1
open_badge = im1.crop((20, 255, 445, 530))
open_badge.save(os.path.join(public_images, "we_are_open_badge.png"))

# Quality feature badges
tasty_badge = im1.crop((25, 680, 145, 820))
tasty_badge.save(os.path.join(public_images, "badge_tasty.png"))
quick_badge = im1.crop((145, 680, 265, 820))
quick_badge.save(os.path.join(public_images, "badge_quick.png"))
warm_badge = im1.crop((265, 680, 400, 820))
warm_badge.save(os.path.join(public_images, "badge_warm.png"))

# Extract dishes from Menu Card (im2: 1024 x 682)
# Lunch Thali (centerpiece)
thali = im2.crop((350, 435, 645, 675))
thali.save(os.path.join(public_images, "lunch_thali.jpg"), quality=95)

# Sweet bowl
sweet = im2.crop((365, 780, 445, 855))
sweet.save(os.path.join(public_images, "lunch_sweet.jpg"), quality=95)

# Breakfast dishes from im2
poha = im2.crop((23, 513, 126, 655))
poha.save(os.path.join(public_images, "poha.jpg"), quality=95)

upma = im2.crop((130, 513, 233, 655))
upma.save(os.path.join(public_images, "upma.jpg"), quality=95)

sheera = im2.crop((237, 513, 340, 655))
sheera.save(os.path.join(public_images, "sheera.jpg"), quality=95)

sabudana = im2.crop((23, 693, 172, 835))
sabudana.save(os.path.join(public_images, "sabudana_khichadi.jpg"), quality=95)

misal = im2.crop((178, 693, 335, 835))
misal.save(os.path.join(public_images, "misal_pav.jpg"), quality=95)

# Evening snacks from im2
wada_pav = im2.crop((670, 535, 770, 672))
wada_pav.save(os.path.join(public_images, "wada_pav.jpg"), quality=95)

kanda_bhaji = im2.crop((774, 535, 874, 672))
kanda_bhaji.save(os.path.join(public_images, "kanda_bhaji.jpg"), quality=95)

batata_bhaji = im2.crop((880, 535, 980, 672))
batata_bhaji.save(os.path.join(public_images, "batata_bhaji.jpg"), quality=95)

moong_bhaji = im2.crop((670, 705, 818, 840))
moong_bhaji.save(os.path.join(public_images, "moong_bhaji.jpg"), quality=95)

bread_pattice = im2.crop((824, 705, 980, 840))
bread_pattice.save(os.path.join(public_images, "bread_pattice.jpg"), quality=95)

# High-res items from im3 (1024 x 350 banner)
# im3 dishes are very crisp! Let's extract them as well
banner_poha = im3.crop((23, 98, 195, 262))
banner_poha.save(os.path.join(public_images, "banner_poha.png"))

banner_upma = im3.crop((202, 98, 370, 262))
banner_upma.save(os.path.join(public_images, "banner_upma.png"))

banner_sheera = im3.crop((640, 98, 808, 262))
banner_sheera.save(os.path.join(public_images, "banner_sheera.png"))

banner_sabudana = im3.crop((813, 98, 982, 262))
banner_sabudana.save(os.path.join(public_images, "banner_sabudana.png"))

print("Asset extraction complete! Files saved to:", public_images)
