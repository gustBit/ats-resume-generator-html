import chromium from "@sparticuz/chromium";
import { chromium as playwright } from "playwright-core";

export async function exportPdfFromHtml(html: string) {
  const executablePath =
    process.env.VERCEL || process.env.AWS_LAMBDA_FUNCTION_NAME
      ? await chromium.executablePath()
      : undefined;

  const browser = await playwright.launch({
    args: chromium.args,
    executablePath,
    headless: true,
  });

  const page = await browser.newPage();
  await page.setContent(html, { waitUntil: "load" });

  const pdf = await page.pdf({
    format: "A4",
    printBackground: true,
  });

  await browser.close();
  return pdf;
}
