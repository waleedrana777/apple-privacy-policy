import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { marked } from "marked";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const dist = path.join(root, "dist");

const md = fs.readFileSync(path.join(root, "PRIVACY_POLICY.md"), "utf8");
const body = marked.parse(md, { mangle: false, headerIds: true });

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Privacy Policy — App Store Apps</title>
  <meta name="description" content="Privacy policy for mobile apps published on the Apple App Store." />
  <style>
    :root {
      --bg: #0f1419;
      --text: #e7e9ea;
      --muted: #8b98a5;
      --accent: #1d9bf0;
      --border: #2f3336;
    }
    @media (prefers-color-scheme: light) {
      :root {
        --bg: #ffffff;
        --text: #0f1419;
        --muted: #536471;
        --accent: #1d9bf0;
        --border: #eff3f4;
      }
    }
    * { box-sizing: border-box; }
    body {
      margin: 0;
      font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      background: var(--bg);
      color: var(--text);
      line-height: 1.6;
      font-size: 1rem;
    }
    .wrap {
      max-width: 42rem;
      margin: 0 auto;
      padding: 2rem 1.25rem 4rem;
    }
    header {
      margin-bottom: 2rem;
      padding-bottom: 1.5rem;
      border-bottom: 1px solid var(--border);
    }
    header h1 {
      margin: 0 0 0.5rem;
      font-size: 1.75rem;
      font-weight: 700;
      letter-spacing: -0.02em;
    }
    header p {
      margin: 0;
      color: var(--muted);
      font-size: 0.9rem;
    }
    .prose :first-child { margin-top: 0; }
    .prose h2 {
      margin: 2rem 0 0.75rem;
      font-size: 1.25rem;
      font-weight: 600;
    }
    .prose h3 {
      margin: 1.5rem 0 0.5rem;
      font-size: 1.05rem;
      font-weight: 600;
    }
    .prose p, .prose li { color: var(--text); }
    .prose ul { padding-left: 1.25rem; }
    .prose li { margin: 0.35rem 0; }
    .prose hr {
      border: none;
      border-top: 1px solid var(--border);
      margin: 2rem 0;
    }
    .prose strong { color: var(--text); }
    .prose a { color: var(--accent); text-decoration: none; }
    .prose a:hover { text-decoration: underline; }
    .prose table {
      width: 100%;
      border-collapse: collapse;
      font-size: 0.9rem;
      margin: 1rem 0;
    }
    .prose th, .prose td {
      border: 1px solid var(--border);
      padding: 0.5rem 0.65rem;
      text-align: left;
    }
    .prose th { background: rgba(127,127,127,0.08); }
    footer {
      margin-top: 3rem;
      padding-top: 1.5rem;
      border-top: 1px solid var(--border);
      font-size: 0.85rem;
      color: var(--muted);
    }
  </style>
</head>
<body>
  <div class="wrap">
    <header>
      <h1>Privacy Policy</h1>
      <p>Apps published on the Apple App Store · <a href="https://github.com/waleedrana777/apple-privacy-policy">Source on GitHub</a></p>
    </header>
    <article class="prose">
${body}
    </article>
    <footer>
      Plain text: <a href="./PRIVACY_POLICY.md">PRIVACY_POLICY.md</a>
    </footer>
  </div>
</body>
</html>
`;

fs.mkdirSync(dist, { recursive: true });
fs.writeFileSync(path.join(dist, "index.html"), html);
fs.copyFileSync(path.join(root, "PRIVACY_POLICY.md"), path.join(dist, "PRIVACY_POLICY.md"));
console.log("Built dist/index.html and dist/PRIVACY_POLICY.md");
