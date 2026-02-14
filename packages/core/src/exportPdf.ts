import { chromium as playwrightChromium } from "playwright-core";
import chromium from "@sparticuz/chromium";

/**
 * Recebe HTML completo (com <style> inline ou CSS embutido) e retorna PDF.
 */
export async function exportPdfFromHtml(html: string): Promise<Uint8Array> {
  const browser = await playwrightChromium.launch({
    args: chromium.args,
    executablePath: await chromium.executablePath(),
    headless: true,
  });

  try {
    const page = await browser.newPage();

    // garante que recursos inline renderizem; se tiver fetch de assets externos, precisa de baseURL/rotas
    await page.setContent(html, { waitUntil: "networkidle" });

    const pdf = await page.pdf({
      format: "A4",
      printBackground: true,
      preferCSSPageSize: true,
    });

    return pdf; // playwright retorna Uint8Array
  } finally {
    await browser.close();
  }
}
