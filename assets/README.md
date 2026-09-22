# Portfolio images

Right now the portfolio shows clean typographic covers (project title on a panel) and an
"MG" monogram in the hero, because no real images were supplied yet. Add your own to make
it fully yours. There are two ways.

## Option A — upload in the Studio (easiest, no code)
1. In this folder's parent, run:  `node serve.js`
2. Open  http://localhost:5173/studio.html
3. Profile tab: upload a **headshot** (portrait works best around 900x1100, a 4:5 crop).
4. Work tab: open each project and upload its **cover image**.
   Images are saved locally in your browser and appear instantly in the preview.

## Option B — drop files here and turn them on
Export a page from each PDF to PNG/JPG (e.g. print-to-PDF then screenshot, or any PDF tool),
drop them in this `assets/` folder using these names, then set the matching path in the
`DEFAULT` config near the top of `index.html` (and the same block in `studio.html`).

| File to add here            | What it is                     | Field to set                                   |
|-----------------------------|--------------------------------|------------------------------------------------|
| `assets/ming.jpg`           | your headshot (4:5, ~900x1100) | `profile.avatar: "assets/ming.jpg"`            |
| `assets/rainwater.png`      | Rainwater poster cover         | project p1 `image: "assets/rainwater.png"`     |
| `assets/claw.png`           | Retrieval Claw poster cover    | project p2 `image: "assets/claw.png"`          |
| `assets/snowboard.png`      | Snowboard book cover           | project p3 `image: "assets/snowboard.png"`     |
| `assets/menu.png`           | Menu design                    | project p4 `image: "assets/menu.png"`          |

Recommended sizes: project covers around 1200x800 (3:2); the featured first project reads
best at 16:9. Any of PNG / JPG / WebP is fine.

Or just send me the exported files (or tell me you've dropped them in with the names above)
and I'll flip the paths on for you.
