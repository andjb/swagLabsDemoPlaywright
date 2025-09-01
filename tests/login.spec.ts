import { test } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { InventoryPage } from '../pages/inventoryPage';

const VALID_USERS = [
  'standard_user',
  'problem_user',
  'performance_glitch_user'
];

const PASSWORD = 'secret_sauce';

test.describe('SauceDemo Login Tests', () => {
  test('Successful login with valid users', async ({ page }) => {
    for (const user of VALID_USERS) {
      const loginPage = new LoginPage(page);
      const inventoryPage = new InventoryPage(page);

      await loginPage.goto();
      await loginPage.login(user, PASSWORD);

      await inventoryPage.isLoaded(); // 🚀 verifies URL + UI
    }
  });

  test('Locked out user sees correct error message', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('locked_out_user', PASSWORD);

    await loginPage.assertErrorMessage(
      'Sorry, this user has been locked out.'
    );
  });

  test('Login fails with invalid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('invalid_user', 'bad_password');

    await loginPage.assertErrorMessage(
      'Username and password do not match any user in this service'
    );
  });

  test('Login fails with empty username', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('', PASSWORD);

    await loginPage.assertErrorMessage('Username is required');
  });

  test('Login fails with empty password', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('standard_user', '');

    await loginPage.assertErrorMessage('Password is required');
  });
});
