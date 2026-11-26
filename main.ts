import { mkdirSync, writeFileSync } from "node:fs";

// The funniest famous last words, as a tombstone epitaph: the stone itself
// is cut off mid-sentence, exactly the way he was.
const EPITAPH = "He died as he lived — mid-sentence, arguing with—";

const MAX_CHARS = 150;

// Every rule the gate checks: one non-empty line, 1–150 characters.
function validateEntry(text: string): void {
  if (text.length === 0 || text.length > MAX_CHARS) {
    throw new Error(
      `epitaph must be 1–${MAX_CHARS} characters, got ${text.length}`,
    );
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("epitaph must be a single line");
  }
  if (text.trim() !== text) {
    throw new Error("epitaph must not start or end with whitespace");
  }
}

function main(): void {
  const text = EPITAPH.trim();
  validateEntry(text);
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", text, "utf8");
}

main();
