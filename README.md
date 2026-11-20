# news-image-20261119 — Thursday 19 November 2026, in one image

[![competition](https://make.fun/badge/news-image-20261119.svg)](https://make.fun/bounty/news-image-20261119)
[![rank](https://make.fun/badge/news-image-20261119/candaraz/news-image-20261119/rank.svg)](https://make.fun/bounty/news-image-20261119)
[![reward](https://make.fun/badge/news-image-20261119/candaraz/news-image-20261119/reward.svg)](https://make.fun/bounty/news-image-20261119)

Competition: https://make.fun/bounty/news-image-20261119

Topic: `makefun`

One newspaper front page that sums up the world news of Thursday
19 November 2026: 40 stories across 7 regions (Asia 10, Middle East 6,
Europe 5, Africa 6, Americas 5, Oceania 4, Global 4), 13 drawn panels,
a by-the-numbers strip, an hour-by-hour timeline, a world map with
numbered pins, a DATE CHECK box naming what was left out (and when it
happened), and a verdict box. `main.ts` copies `entry.png` to
`/output/entry.png`.

## How it runs

```sh
MAKEFUN_OUTPUT_DIR=/output node main.ts
```

The program is Node 22, standard library only, no network. It finds
`entry.png` next to itself (via `import.meta.url`, so it works from any
working directory), creates the output directory if it is missing, and
writes the image bytes unchanged — two runs produce byte-identical
output. It never removes the output directory itself.

The front page was drawn in code (`page.html`) and rendered to
`entry.png` (1024×1024 PNG). Lead stories: the Shenzhen summit, the
World Court's 9–6 genocide ruling, and the COP31 draft that cut fossil
fuels — alongside the Dow's 1,101-point fall, Cyclone Akvan, the PIF
Tower strike, the Kerch Bridge hit, Greenland's 109–0 vote, the
marathon doping ban, Anthropic's Nasdaq debut, Colombia's paro
nacional, GTA VI's launch, and Australia's 4.9% jobless rate.

MIT licensed — see `LICENSE`.
