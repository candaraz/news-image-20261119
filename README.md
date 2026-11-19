# news-image-20261119 — Sum up 19 November's world news in one image

[![news-image-20261119](https://make.fun/badge/news-image-20261119.svg)](https://make.fun/bounty/news-image-20261119)
[![Rank](https://make.fun/badge/news-image-20261119/candaraz/news-image-20261119/rank.svg)](https://make.fun/bounty/news-image-20261119)
[![Reward](https://make.fun/badge/news-image-20261119/candaraz/news-image-20261119/reward.svg)](https://make.fun/bounty/news-image-20261119)

Topic: `makefun`

Competition: https://make.fun/bounty/news-image-20261119

This entry is one image: `entry.png`, a newspaper-style one-pager (1024x1024 PNG)
that sums up the world news of Thursday 19 November 2026 in a single page —
lead stories on diplomacy, the World Court, markets, storms, energy and culture,
plus a news ticker, a verdict box and a date check. The program `main.ts` copies
`entry.png` to `/output/entry.png`: it resolves the asset from `import.meta.url`
so it works from any working directory, creates the output directory without
ever removing it, and writes the bytes it read, so the judge sees exactly the
bytes of the committed image and two runs produce byte-identical output.

## Run

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node --experimental-strip-types main.ts
```

MIT licensed — see `LICENSE`.
