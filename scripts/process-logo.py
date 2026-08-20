"""Process the Sterling & Co. logo: transparent PNG, dark-nav version, mark, favicons."""

from pathlib import Path

from PIL import Image, ImageFilter

SRC = Path(
    r"C:\Users\Arslan\.cursor\projects\h-involiq-projects-Sterling-Source\assets"
    r"\c__Users_Arslan_AppData_Roaming_Cursor_User_workspaceStorage_"
    r"82432f9af036529fff1f92a3abd55173_images_1771703605248-272c739a-2157-4336-ab22-96896c54c41c.png"
)
ASSETS = Path(r"H:\involiq projects\Sterling Source\src\assets")
PUBLIC = Path(r"H:\involiq projects\Sterling Source\public")
ASSETS.mkdir(parents=True, exist_ok=True)
PUBLIC.mkdir(parents=True, exist_ok=True)

NAVY = (13, 27, 46, 255)
GOLD = (201, 169, 106, 255)
OFF_WHITE = (245, 245, 243, 255)


def to_rgba(im: Image.Image) -> Image.Image:
    return im.convert("RGBA")


def knock_out_white(im: Image.Image, threshold: int = 238) -> Image.Image:
    """Make near-white pixels transparent, with a soft edge."""
    im = to_rgba(im)
    pixels = im.load()
    w, h = im.size
    for y in range(h):
        for x in range(w):
            r, g, b, a = pixels[x, y]
            if r >= threshold and g >= threshold and b >= threshold:
                # Fade remaining near-white so the serif edges stay clean
                excess = min(r, g, b) - (threshold - 18)
                fade = max(0, min(255, int(255 * (1 - excess / 36))))
                pixels[x, y] = (r, g, b, fade if fade < 250 else 0)
            elif r > 210 and g > 210 and b > 210:
                # Soften leftover paper grain around letters
                dist = (r + g + b) / 3
                alpha = int(max(0, min(255, (230 - dist) * 8)))
                pixels[x, y] = (r, g, b, min(a, alpha))
    return im


def recolor_black_to_white(im: Image.Image, cutoff: int = 70) -> Image.Image:
    """Turn near-black wordmark pixels into off-white for dark backgrounds."""
    im = to_rgba(im.copy())
    pixels = im.load()
    w, h = im.size
    for y in range(h):
        for x in range(w):
            r, g, b, a = pixels[x, y]
            if a < 8:
                continue
            if r <= cutoff and g <= cutoff and b <= cutoff:
                # Preserve gold: gold is ~180,140,70 — not black
                t = 1 - (max(r, g, b) / max(cutoff, 1))
                nr = int(OFF_WHITE[0] * t + r * (1 - t))
                ng = int(OFF_WHITE[1] * t + g * (1 - t))
                nb = int(OFF_WHITE[2] * t + b * (1 - t))
                pixels[x, y] = (nr, ng, nb, a)
    return im


def tight_crop(im: Image.Image, pad: int = 8) -> Image.Image:
    bbox = im.getbbox()
    if not bbox:
        return im
    l, t, r, b = bbox
    l = max(0, l - pad)
    t = max(0, t - pad)
    r = min(im.width, r + pad)
    b = min(im.height, b + pad)
    return im.crop((l, t, r, b))


def extract_mark(im: Image.Image) -> Image.Image:
    """Crop the gold house/building mark from the top of the stacked logo."""
    w, h = im.size
    # The mark sits in the upper ~42% of the stacked lockup
    top = im.crop((0, 0, w, int(h * 0.46)))
    top = tight_crop(top, pad=4)
    # Square canvas
    side = max(top.size) + 12
    canvas = Image.new("RGBA", (side, side), (0, 0, 0, 0))
    ox = (side - top.width) // 2
    oy = (side - top.height) // 2
    canvas.paste(top, (ox, oy), top)
    return canvas


def upscale(im: Image.Image, scale: int = 4) -> Image.Image:
    return im.resize((im.width * scale, im.height * scale), Image.Resampling.LANCZOS)


def fit_square(im: Image.Image, size: int, bg=None) -> Image.Image:
    canvas = Image.new("RGBA", (size, size), bg if bg else (0, 0, 0, 0))
    im = im.copy()
    im.thumbnail((size - size // 8, size - size // 8), Image.Resampling.LANCZOS)
    ox = (size - im.width) // 2
    oy = (size - im.height) // 2
    canvas.paste(im, (ox, oy), im)
    return canvas


def save_ico(mark: Image.Image, path: Path) -> None:
    sizes = [16, 32, 48]
    icons = [fit_square(mark, s) for s in sizes]
    icons[0].save(path, format="ICO", sizes=[(s, s) for s in sizes], append_images=icons[1:])


src = Image.open(SRC)
transparent = knock_out_white(src)
transparent = tight_crop(transparent, pad=6)
transparent_hi = upscale(transparent, 5)

dark = recolor_black_to_white(transparent)
dark_hi = upscale(dark, 5)

mark = extract_mark(transparent)
mark_hi = upscale(mark, 6)

# Brand assets
transparent_hi.save(ASSETS / "logo.png", optimize=True)
dark_hi.save(ASSETS / "logo-light.png", optimize=True)
mark_hi.save(ASSETS / "logo-mark.png", optimize=True)

# Public / SEO
transparent_hi.save(PUBLIC / "logo.png", optimize=True)
dark_hi.save(PUBLIC / "logo-light.png", optimize=True)
mark_hi.save(PUBLIC / "logo-mark.png", optimize=True)
apple = fit_square(mark_hi, 180, NAVY)
apple.save(PUBLIC / "apple-touch-icon.png", optimize=True)
fit_square(mark_hi, 32).save(PUBLIC / "favicon-32x32.png", optimize=True)
fit_square(mark_hi, 16).save(PUBLIC / "favicon-16x16.png", optimize=True)
save_ico(mark_hi, PUBLIC / "favicon.ico")

# OG image: navy canvas + skyline photo + lockup
og = Image.new("RGB", (1200, 630), (13, 27, 46))
hero = Image.open(ASSETS / "hero-home.jpg").convert("RGB")
hero = hero.resize((1200, 675), Image.Resampling.LANCZOS)
og.paste(hero, (0, -22))
overlay = Image.new("RGBA", (1200, 630), (13, 27, 46, 150))
og = og.convert("RGBA")
og.alpha_composite(overlay)
lockup = dark_hi.copy()
lockup.thumbnail((520, 520), Image.Resampling.LANCZOS)
lx = (1200 - lockup.width) // 2
ly = (630 - lockup.height) // 2 - 10
og.alpha_composite(lockup, (lx, ly))
og.convert("RGB").save(PUBLIC / "og-image.jpg", quality=88, optimize=True)
og.convert("RGB").save(ASSETS / "og-image.jpg", quality=88, optimize=True)

print("logo", transparent_hi.size)
print("dark", dark_hi.size)
print("mark", mark_hi.size)
print("done")
