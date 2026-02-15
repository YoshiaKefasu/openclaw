
const THINKING_TAG_SCAN_RE = /<\s*(\/?)\s*(?:think(?:ing)?|thought|antthinking)\b[^<>]*>/gi;
const text = "Start <think";

console.log("Original text:", JSON.stringify(text));
console.log("Regex source:", THINKING_TAG_SCAN_RE.source);

let match;
while ((match = THINKING_TAG_SCAN_RE.exec(text)) !== null) {
  console.log(`Found match at ${match.index}: '${match[0]}'`);
}

THINKING_TAG_SCAN_RE.lastIndex = 0;
console.log("Has match?", THINKING_TAG_SCAN_RE.test(text));
