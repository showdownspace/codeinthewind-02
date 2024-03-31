import assert from "node:assert";
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";
import { parseArgs } from "node:util";

const { values } = parseArgs({
  options: {
    challenge: { type: "string" },
    id: { type: "string" },
  },
});

const apiKey = "dummy";

async function run(code) {
  const response = await fetch("http://localhost:20279/run", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ code, apiKey }),
  });
  assert(response.ok, `HTTP ${response.status} ${response.statusText}`);
  return response;
}

async function screenshot(name, code) {
  const response = await run(code);
  const buffer = await response.arrayBuffer();
  mkdirSync(dirname(name), { recursive: true });
  writeFileSync(name, Buffer.from(buffer));
}

export const previewerCode = [
  `<!DOCTYPE html><html><head><meta charset="utf-8">`,
  '<base href="https://codeinthewind-editor-core.showdown.space/">',
  '<link rel="preconnect" href="https://fonts.googleapis.com">',
  '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>',
  '<script src="https://cdn.tailwindcss.com"></script>',
  '<style type="text/tailwindcss">',
  `@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Thai:wght@100;200;300;400;500;600;700;800;900&family=Noto+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');`,
  `body { font-family: Noto Sans, Noto Sans Thai, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; }`,
  "@tailwind base; @tailwind components; @tailwind utilities;",
  "</style>",
  '<body id="htmlbody">',
  "__CODE__",
  "</body></html>",
].join("");

async function screenshotHtml(name, html) {
  return screenshot(
    name,
    `(${async (html) => {
      // 540x720, 2x
      await page.setViewport({ width: 540, height: 720, deviceScaleFactor: 2 });
      await page.setContent(html, { waitUntil: "networkidle0" });
      return page.screenshot();
    }})(${JSON.stringify(html)})`
  );
}

async function preview(challenge, playId) {
  playId = new URL(playId, "https://play.tailwindcss.com/").pathname.slice(1);
  const response = await fetch(`https://play.tailwindcss.com/${playId}`);
  const rawHtml = await response.text();
  // data is in <script id="__NEXT_DATA__" type="application/json">...</script>
  // props.pageProps.initialContent.html
  const html = JSON.parse(
    rawHtml.match(/<script id="__NEXT_DATA__"[^>]*>(.+?)<\/script>/)[1]
  ).props.pageProps.initialContent.html;
  const name = `challenges/${challenge}/reference.png`;
  await screenshotHtml(name, previewerCode.replace("__CODE__", html));
}

await preview(values.challenge, values.id);
