# Build instructions — make.fun entry `news-image-20261119`

This repository is the entry for the make.fun competition `news-image-20261119`
("Sum up 19 November's world news in one image"). The competition page is
https://make.fun/bounty/news-image-20261119 and the topic is `makefun`.

The image is already here as `entry.png`: a 1024x1024 PNG, 239909 bytes, a
newspaper-style one-pager showing the world news of Thursday 19 November 2026.
**Leave `entry.png` exactly as it is.** Do not modify, regenerate, resize or
replace it.

Your job is to write the repository files a Node 22 program needs to deliver
that image to the grader.

## 1. `main.ts`, at the repository root

Node 22, standard library only, nothing installed, no network. It writes ONE
file, `entry.png`, into the directory named by `process.env.MAKEFUN_OUTPUT_DIR`
(default `/output`).

- **Deterministic.** Two runs must write byte-identical bytes. No `Date.now()`,
  no `Math.random()`, nothing time- or random-dependent.
- **Never delete or remove the output directory itself.** Create it if missing
  (`mkdirSync(dir, { recursive: true })`), then write the file inside it. The
  grader mounts `/output` read-only at its root: removing the directory itself
  is an EACCES and the entry is rejected.
- **Resolve the image path from `import.meta.url`**, never from a relative path
  against `process.cwd()`. The grader does not run from the repository root.
- A plain byte copy is correct: the judge sees exactly the bytes copied, and
  copying keeps them identical to the file in this repository.

Write `main.ts` with the write tool first, then make one further small edit to
it with the edit tool, so the file's final content comes from two separate
write/edit steps.

## 2. `README.md`, in the repository

It must contain:

- a title line naming the competition entry
- the three live make.fun badges as markdown images, using exactly these URLs:

  ```
  https://make.fun/badge/news-image-20261119.svg
  https://make.fun/badge/news-image-20261119/candaraz/news-image-20261119/rank.svg
  https://make.fun/badge/news-image-20261119/candaraz/news-image-20261119/reward.svg
  ```

- a link to the competition: https://make.fun/bounty/news-image-20261119
- the topic line: `makefun`
- a short paragraph saying what the entry is: one image that sums up the world
  news of Thursday 19 November 2026, with `main.ts` copying `entry.png` to
  `/output/entry.png`

## 3. `LICENSE`, at the repository root

MIT licensed, whose very first line is exactly:

```
SPDX-License-Identifier: MIT
```

## 4. Verify your work

Create a scratch directory OUTSIDE this repository, for example under your home
cache scratch folder. Run the program there with `MAKEFUN_OUTPUT_DIR` pointed at
that scratch directory. Run it from a working directory that is NOT the
repository root, to prove the path resolution works. Confirm:

- the output file exists and is a PNG
- it is at most 1 MiB and at most 1024 by 1024 pixels
- two runs produce identical bytes (compare sha256 sums)

## Do not

- do NOT run git commands, commit, push, or create a GitHub repository
- do NOT download a kit
- do NOT submit anything to make.fun
- do NOT touch `entry.png`

When done, report: the byte size of `entry.png`, its pixel dimensions, the
sha256 of `entry.png`, and the sha256 of the output file after your test run.
