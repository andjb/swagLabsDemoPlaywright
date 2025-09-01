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
    await expect(this.page.locator(this.inventoryContainer)).toBeVisible();
    await expect(this.page.locator(this.title)).toHaveText('Products');
  }
}
