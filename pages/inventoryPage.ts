import { Page, expect } from '@playwright/test';

export class InventoryPage {
  readonly page: Page;
  readonly inventoryContainer = '#inventory_container';
  readonly title = '.product_label'; // "Products" header

  constructor(page: Page) {
    this.page = page;
  }

  async isLoaded() {
    // Both URL and UI checks
    await expect(this.page).toHaveURL(/.*inventory.html/);

    // Pick the first matched element to satisfy strict mode
    await expect(this.page.locator(this.inventoryContainer).first()).toBeVisible();

    await expect(this.page.locator(this.title).first()).toHaveText('Products');
  }
}
