import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import type { ResumeData } from "./types.js";
import { renderResumeHtml } from "./renderer.js";
export { exportPdfFromHtml } from "./pdf-exporter.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export async function buildHtml(resumeData: ResumeData) {
  const templatePath = path.join(__dirname, "../templates/ats.html");
  const cssPath = path.join(__dirname, "../templates/style.css");

  const templateHtml = await fs.readFile(templatePath, "utf-8");
  const css = await fs.readFile(cssPath, "utf-8");

  return renderResumeHtml(resumeData, templateHtml, css);
}
