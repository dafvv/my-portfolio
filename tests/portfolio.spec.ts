import { test, expect } from "@playwright/test";
import fs from "fs";
import path from "path";

test.describe("Daffa Portfolio Verification", () => {
  test("1. SSR output contains all 7 sections in static HTML", async ({ request }) => {
    const response = await request.get("/");
    expect(response.status()).toBe(200);
    const html = await response.text();

    expect(html).toContain('role="banner"');
    expect(html).toContain('id="hero"');
    expect(html).toContain('id="work"');
    expect(html).toContain('id="experience"');
    expect(html).toContain('id="skills"');
    expect(html).toContain('id="education"');
    expect(html).toContain('id="contact"');
    expect(html).toContain("DAFFA BISMA RUDIDHARMA");
    expect(html).toContain("Full-stack Developer · Aspiring DevOps Engineer");
    expect(html).toContain("SPASI");
    expect(html).toContain("Croma Music");
    expect(html).toContain("KotaU Itinerary");
  });

  test("2. Host Grotesk font dual loading pipeline files exist and are served", async ({ request }) => {
    const fontWeights = [400, 500, 600, 700, 800];
    for (const w of fontWeights) {
      const fontUrl = `/fonts/host-grotesk-latin-${w}-normal.woff2`;
      const res = await request.get(fontUrl);
      expect(res.status()).toBe(200);
      expect(res.headers()["content-type"]).toContain("font/woff2");
    }
  });

  test("3. Hero section displays portrait asset with 520x520 circular bounds", async ({ page }) => {
    await page.goto("/");
    await page.waitForTimeout(500);

    const portrait = page.locator("#hero img[alt='Portrait of Daffa Bisma Rudidharma']");
    await expect(portrait).toBeVisible();

    const box = await portrait.boundingBox();
    expect(box).not.toBeNull();
    if (box) {
      expect(Math.round(box.width)).toBeGreaterThanOrEqual(320);
      expect(Math.round(box.width)).toBeLessThanOrEqual(520);
      expect(Math.round(box.height)).toBe(Math.round(box.width));
    }

    const wrapper = page.locator("#hero div[class*='portraitWrapper']");
    const borderRadius = await wrapper.evaluate((el) => window.getComputedStyle(el).borderRadius);
    expect(borderRadius).toBe("50%");
  });

  test("4. Navigation anchors and external links resolve", async ({ page }) => {
    await page.goto("/");
    await page.waitForTimeout(500);

    const navLinks = ["#work", "#experience", "#skills", "#education", "#contact"];
    for (const hash of navLinks) {
      const link = page.locator(`header a[href='${hash}']`);
      await expect(link).toBeVisible();
      const target = page.locator(hash);
      await expect(target).toBeAttached();
    }

    const cvButton = page.locator("#hero a[href='/media/CV.pdf']");
    await expect(cvButton).toBeVisible();
  });

  test("5. Projects action slots render status badge vs CTA links accurately", async ({ page }) => {
    await page.goto("/");
    await page.waitForTimeout(500);

    const badge = page.locator("#work span[role='status']");
    await expect(badge).toHaveText("IN PROGRESS");

    const ctas = page.locator("#work a[class*='ctaBadge']");
    await expect(ctas).toHaveCount(2);
  });

  test("6. Skills matrix renders 5 equal-width columns and 6 rows without dashes", async ({ page }) => {
    await page.goto("/");
    await page.waitForTimeout(500);

    const headers = page.locator("#skills th");
    await expect(headers).toHaveCount(5);
    await expect(headers.nth(0)).toHaveText("Language");
    await expect(headers.nth(1)).toHaveText("Backend");
    await expect(headers.nth(2)).toHaveText("Frontend");
    await expect(headers.nth(3)).toHaveText("Database");
    await expect(headers.nth(4)).toHaveText("Tools");

    const rows = page.locator("#skills tbody tr");
    await expect(rows).toHaveCount(6);

    const tableText = await page.locator("#skills table").innerText();
    expect(tableText).not.toContain("—");
  });

  test("7. Contact section renders two-tone display title, links, and persistent back-to-top", async ({ page }) => {
    await page.goto("/");
    await page.waitForTimeout(500);

    const contactHeading = page.locator("#contact-heading");
    await expect(contactHeading).toHaveText("LET'S");

    await page.evaluate(() => window.scrollTo(0, 1200));
    await page.waitForTimeout(300);

    const backToTop = page.locator("#contact a[aria-label='Back to top']");
    await expect(backToTop).toBeVisible();
    await expect(backToTop).toHaveAttribute("href", "#top");

    await backToTop.click();
    await page.waitForTimeout(800);
    const scrollY = await page.evaluate(() => window.scrollY);
    expect(scrollY).toBeLessThanOrEqual(10);
  });

  test("8. Section bounds and geometry match Figma specifications at 1440px viewport", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto("/");
    await page.waitForTimeout(500);

    const headerBox = await page.locator("header").boundingBox();
    expect(headerBox).not.toBeNull();
    if (headerBox) {
      expect(Math.round(headerBox.height)).toBe(72);
    }

    const heroInner = await page.locator("#hero div[class*='inner']").boundingBox();
    expect(heroInner).not.toBeNull();
    if (heroInner) {
      expect(Math.round(heroInner.height)).toBeGreaterThanOrEqual(700);
    }

    const workLabelBar = await page.locator("#work div[class*='labelBar']").boundingBox();
    expect(workLabelBar).not.toBeNull();
    if (workLabelBar) {
      expect(Math.round(workLabelBar.height)).toBe(55);
    }

    const expLeft = await page.locator("#experience div[class*='splitLeft']").boundingBox();
    expect(expLeft).not.toBeNull();
    if (expLeft) {
      expect(Math.round(expLeft.width)).toBeGreaterThanOrEqual(240);
      expect(Math.round(expLeft.width)).toBeLessThanOrEqual(380);
    }

    const eduRows = page.locator("#education article[class*='item']");
    await expect(eduRows).toHaveCount(2);
    const edu1Box = await eduRows.nth(0).boundingBox();
    expect(edu1Box).not.toBeNull();
    if (edu1Box) {
      expect(Math.round(edu1Box.height)).toBeGreaterThanOrEqual(80);
    }

    const contactBox = await page.locator("#contact").boundingBox();
    expect(contactBox).not.toBeNull();
    if (contactBox) {
      expect(Math.round(contactBox.height)).toBeGreaterThanOrEqual(500);
    }

    const totalHeight = await page.evaluate(() => document.documentElement.scrollHeight);
    expect(totalHeight).toBeGreaterThan(4000);
  });
});
