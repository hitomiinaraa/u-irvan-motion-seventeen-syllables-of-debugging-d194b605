// Revision pass: a single line added above, entry untouched.
import { mkdirSync, writeFileSync } from "node:fs";

const haiku = [
  "Yesterday it worked",
  "today it fails, nothing changed",
  "I touched one small thing",
].join("\n");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", haiku, "utf8");
