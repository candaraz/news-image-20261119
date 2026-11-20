// news-image-20261119 — v4 entry program.
//
// A single-file program that writes the finished front page (entry.png,
// rendered in this repo from page.html) to the grader's output directory.
// Deterministic: it copies the exact bytes of entry.png, so every run
// produces the identical file. Node 22, stdlib only, no network.

import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// The image lives next to this program file, wherever the repo is checked out.
const here = dirname(fileURLToPath(import.meta.url));
const sourcePath = join(here, "entry.png");

// The grader sets MAKEFUN_OUTPUT_DIR; fall back to a local out/ for a
// manual run. We only ever create the directory if it is missing and
// write one file inside it — we never remove the directory itself.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? join(here, "out");
mkdirSync(outDir, { recursive: true });

// Copy the finished front page byte-for-byte. No time, randomness or
// environment dependence anywhere, so two runs are always identical.
const image = readFileSync(sourcePath);
const targetPath = join(outDir, "entry.png");
writeFileSync(targetPath, image);

console.log(`wrote ${targetPath} (${image.length} bytes)`);
