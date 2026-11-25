import { mkdirSync, writeFileSync } from "node:fs";

// One funny line a hopeless tech support agent says to a desperate customer.
// The joke is the agent's cheerful uselessness: the ticket is "critical" now,
// which changes the colour of the ticket and nothing else — while nobody
// picks it up. The customer's urgency is felt ("I hear how urgent this is"),
// never mocked.
const LINE =
  "I hear how urgent this is, so I've marked your ticket critical \u2014 it now turns red while nobody picks it up.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Guard: the sealed gate requires 1–199 UTF-8 characters, not only whitespace.
// Fail loudly here rather than shipping an entry the gate would refuse.
if (LINE.length < 1 || LINE.length > 199 || LINE.trim().length === 0) {
  throw new Error(
    `entry line must be 1-199 characters, got ${LINE.length}`,
  );
}

mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
