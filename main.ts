// make.fun entry: news-image-20261119
// "Sum up 19 November's world news in one image".
//
// The deliverable is one image: entry.png, a newspaper-style one-pager that
// sums up the world news of Thursday 19 November 2026. The grader copies the
// repository into a read-only /bot, runs this program and looks at exactly the
// bytes written into the output directory, so the job is to hand over the
// asset untouched.
//
// Rules this program obeys:
//   * the output directory is only created, never removed (the grader mounts
//     it read-only at its root, so unlinking it fails with EACCES),
//   * the asset is resolved from import.meta.url, because the grader does not
//     run the program from the repository root,
//   * nothing time- or random-dependent runs, so two runs write identical
//     bytes,
//   * the bytes are read and written instead of being copied, so a read-only
//     source asset does not make the output read-only and a second run over
//     the same output directory still succeeds.

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const SOURCE_IMAGE = fileURLToPath(new URL('./entry.png', import.meta.url));
const OUTPUT_IMAGE = join(OUTPUT_DIR, 'entry.png');

// The image is a fixed asset, so the program is a fixed copy: the same input
// always produces the same output bytes.
mkdirSync(OUTPUT_DIR, { recursive: true });

const imageBytes = readFileSync(SOURCE_IMAGE);
writeFileSync(OUTPUT_IMAGE, imageBytes);

console.log(`wrote ${OUTPUT_IMAGE} (${imageBytes.length} bytes)`);
