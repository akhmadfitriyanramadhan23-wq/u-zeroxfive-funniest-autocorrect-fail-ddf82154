import { mkdirSync, writeFileSync } from "node:fs";

// A one-line autocorrect fail, told as the message itself: the
// intended word ("pasta") and the slip ("pastor") are both on the
// page, and the joke lands on the flat consequence — Father O'Brien
// coming to dinner — with no explanation afterwards.
const lines = [
  "I told my date I'd bring the pasta — autocorrect sent 'pastor' instead, and now Father O'Brien is coming to dinner.",
];

const text = lines.join("\n") + "\n";

// Guard: the gate requires 1-199 characters and exactly one line.
const codePoints = [...text].length;
if (codePoints < 1 || codePoints > 199) {
  throw new Error(`entry must be 1-199 characters, got ${codePoints}`);
}
if (lines.length !== 1 || lines.some((line) => !line.trim())) {
  throw new Error("entry must be exactly one non-empty line");
}
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
