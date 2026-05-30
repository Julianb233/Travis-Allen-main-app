import { expect, test } from "@playwright/test";

test("renders the portal dashboard from manifests and updates intake state", async ({ page }) => {
  const consoleMessages: string[] = [];

  page.on("console", (message) => {
    if (["error", "warning"].includes(message.type())) {
      consoleMessages.push(`${message.type()}: ${message.text()}`);
    }
  });

  await page.goto("/");

  await expect(page.getByText("TBT Racing franchise resource portal")).toBeVisible();
  await expect(page.getByText("20")).toBeVisible();
  await expect(page.getByText("25")).toBeVisible();

  await page.getByRole("button", { name: "Bike Intake" }).click();
  await page.getByLabel("Bike brand").selectOption("KTM");
  await page.getByLabel("Service type").selectOption("Fork Re-Build");
  await expect(page.locator(".summary-panel")).toContainText("KTM");
  await expect(page.locator(".summary-panel")).toContainText("Fork Re-Build");

  await page.getByRole("button", { name: "Admin" }).click();
  await expect(page.getByText("Clean TBT logo package")).toBeVisible();
  await expect(page.getByText("Trailer wrap/art source files")).toBeVisible();

  expect(consoleMessages).toEqual([]);
});
