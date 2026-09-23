"""Generate PWA icons for the Murallas de Cartagena guide from the brand mark.

Reproduces public/mark.svg (blue rounded square, golden crenellated tower,
teal sea wave) at 512px and 192px, plus a maskable 512px variant with a
full-bleed background so the emblem stays inside the safe zone.
"""

from PIL import Image, ImageDraw

S = 4  # scale factor: 512 / 128 viewBox
INK = (7, 59, 76)        # #073b4c
GOLD = (217, 164, 65)    # #d9a441
GOLD_L = (229, 184, 90)  # #e5b85a
SEA = (122, 214, 210)    # #7ad6d2

SIZE = 512


def scale(pts):
    return [(x * S, y * S) for x, y in pts]


def draw_logo(draw, rounded):
    if rounded:
        draw.rounded_rectangle([0, 0, SIZE, SIZE], radius=28 * S, fill=INK)
    else:
        draw.rectangle([0, 0, SIZE, SIZE], fill=INK)

    # golden base bar
    draw.rectangle(scale([(19, 91), (109, 104)]), fill=GOLD)

    # tower body (crenellated sides)
    tower = scale([
        (29, 76), (43, 76), (43, 51), (52, 51), (52, 60), (60, 60),
        (60, 51), (69, 51), (69, 60), (77, 60), (77, 51), (86, 51),
        (86, 76), (99, 76), (99, 91), (29, 91),
    ])
    draw.polygon(tower, fill=GOLD_L)

    # top battlement row
    battlement = scale([
        (42, 47), (42, 34), (53, 34), (53, 41), (61, 41), (61, 34),
        (72, 34), (72, 41), (80, 41), (80, 34), (91, 34), (91, 47),
    ])
    draw.polygon(battlement, fill=GOLD_L)

    # dark doorway
    draw.rectangle(scale([(51, 67), (77, 91)]), fill=INK)

    # sea wave (sampled cubic beziers, clipped at canvas edge)
    def cubic(p0, c1, c2, p3, n=24):
        pts = []
        for i in range(n + 1):
            t = i / n
            mt = 1 - t
            x = (mt**3 * p0[0] + 3 * mt**2 * t * c1[0] +
                 3 * mt * t**2 * c2[0] + t**3 * p3[0])
            y = (mt**3 * p0[1] + 3 * mt**2 * t * c1[1] +
                 3 * mt * t**2 * c2[1] + t**3 * p3[1])
            pts.append((x, y))
        return pts

    seg = [
        ((39, 102), (47, 96), (55, 96), (63, 102)),
        ((63, 102), (71, 108), (79, 108), (87, 102)),
        ((87, 102), (95, 96), (103, 96), (111, 102)),
        ((111, 102), (119, 108), (127, 108), (135, 102)),
    ]
    wave = []
    for s in seg:
        wave.extend(cubic(*s))
    draw.line(scale(wave), fill=SEA, width=5 * S, joint="curve")


def make(path, rounded):
    img = Image.new("RGBA", (SIZE, SIZE), (0, 0, 0, 0))
    draw_logo(ImageDraw.Draw(img), rounded)
    img.save(path, "PNG")


def main():
    import os
    out = os.path.join(os.path.dirname(__file__), "..", "public", "icons")
    os.makedirs(out, exist_ok=True)
    make(os.path.join(out, "icon-512.png"), rounded=True)
    small = Image.new("RGBA", (192, 192), (0, 0, 0, 0))
    draw_logo(ImageDraw.Draw(small), rounded=True)
    small.save(os.path.join(out, "icon-192.png"), "PNG")
    make(os.path.join(out, "icon-512-maskable.png"), rounded=False)
    print("PWA icons written to public/icons/")


if __name__ == "__main__":
    main()
