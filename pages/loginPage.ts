import { Page, expect } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly usernameInput = '#user-name';
  readonly passwordInput = '#password';
  readonly loginButton = '#login-button';
  readonly errorMessage = '[data-test="error"]';

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('https://www.saucedemo.com/v1/index.html');
  }

  async login(username: string, password: string) {
    await this.page.fill(this.usernameInput, username);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.loginButton);
  }

  async assertErrorMessage(expectedText: string) {
    const errorLocator = this.page.locator(this.errorMessage);
    await expect(errorLocator).toBeVisible();
    await expect(errorLocator).toContainText(expectedText);
  }
}
