import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "The bug was in line 47. I wrote line 47. I reviewed line 47. I still think line 47 is beautiful, and that is the problem.";

// Gate: the bounty allows 1–200 characters; refuse to emit an invalid entry.
if (entry.length < 1 || entry.length > 200) {
  throw new Error(`Entry is ${entry.length} characters; must be 1-200.`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`Wrote ${entry.length} characters to /output/entry.txt`);
