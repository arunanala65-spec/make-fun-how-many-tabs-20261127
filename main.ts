// How Many Tabs Do You Have Open? — make.fun entry
// Writes one number, digits only: the honest count of open browser tabs.
// Gate: /output/entry.txt must be UTF-8 text of 1-5 characters, not only whitespace.
import { mkdirSync, writeFileSync } from "node:fs";

const TABS = "127";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const entry = TABS;
if (!/^\d{1,5}$/.test(entry)) {
  throw new Error("entry must be 1-5 digits");
}
writeFileSync(`${outDir}/entry.txt`, entry);
console.log(entry);
