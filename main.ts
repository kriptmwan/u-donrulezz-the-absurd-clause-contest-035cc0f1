// The Absurd Clause Contest — entry program (v2, full rewrite).
// Writes one absurd terms-of-service clause to /output/entry.txt.
// Gate: UTF-8 text, 1-200 characters, not only whitespace.
import { mkdirSync, writeFileSync } from "node:fs";

function buildEntry(): string {
  // Deadpan SLA boilerplate that quietly turns absurd: the compensation
  // for an outage is an apology plus a photograph of the broken server —
  // which is itself down. One sentence, 153 characters.
  return (
    "In the event of a service outage, the company shall compensate each " +
    "user with one (1) sincere apology and a photograph of the server, " +
    "which is also down."
  );
}

function validate(entry: string): void {
  const chars = [...entry];
  if (chars.length < 1 || chars.length > 200) {
    throw new Error(`entry is ${chars.length} chars, must be 1-200`);
  }
  if (entry.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (entry.trim() !== entry) {
    throw new Error("entry must not start or end with whitespace");
  }
}

const entry = buildEntry();
validate(entry);
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`wrote ${[...entry].length} chars to /output/entry.txt`);
