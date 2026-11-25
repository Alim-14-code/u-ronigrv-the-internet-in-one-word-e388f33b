// The Internet in One Word (R1) — writes the entry word to /output/entry.txt
// One word, 8 characters, the internet as a wormhole.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const word = readFileSync(join(here, "entry.txt"), "utf8").trim();
const outFile = join(outDir, "entry.txt");
const outText = word + "\n";
writeFileSync(outFile, outText, "utf8");
console.log(`wormhole opened: ${word.length} characters in ${outFile}`);
