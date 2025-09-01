import { test, expect, type Page } from '@playwright/test';


// positive 

test("valid user can login", async ({ page }) => {

    await page.goto("https://www.saucedemo.com/v1/index.html");

// ('await page.goto('https://www.saucedemo.com/v1/index.html')
    // await expect(page.locator('form')).toBeVisible();
    // await page.getByTestId("username").fill('    standard_user');


    // validate form load
    await page.locator('[data-test="username"]').click();
    // enter credentials
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');

    // click login
    await page.getByRole('button', { name: 'LOGIN' }).click();
        
    // validate page load
    await expect(page.getByText('Products')).toBeVisible();await expect(page.getByText('Products')).toBeVisible();


    // await page.close();

})

test("validate tat a locked out user is locked out", async ({ page }) => {
    await page.goto("https://www.saucedemo.com/v1/index.html");

    // validate form load
    await page.locator('[data-test="username"]').click();
    // enter credentials
    await page.locator('[data-test="username"]').fill('locked_out_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');

    // click login
    await page.getByRole('button', { name: 'LOGIN' }).click();

    // assert the correct error message is displayed
    await expect(page.locator('[data-test="error"]')).toContainText('Epic sadface: Sorry, this user has been locked out.');
})
// skip - 
test("validate that a problem user...", async ({ page }) => {
    await page.goto("https://www.saucedemo.com/v1/index.html");

    // validate form load
    await page.locator('[data-test="username"]').click();
    // enter credentials
    await page.locator('[data-test="username"]').fill('problem_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');

    // click login
    await page.getByRole('button', { name: 'LOGIN' }).click();

    // assert the correct error message is displayed
    await expect(page.locator('[data-test="error"]')).toContainText('Epic sadface: Sorry, this user has been locked out.');
})
//  firther work re netword return speed]
test("test for performance_glitch_user", async ({ page }) => {
    await page.goto("https://www.saucedemo.com/v1/index.html");

    // validate form load
    await page.locator('[data-test="username"]').click();
    // enter credentials
    await page.locator('[data-test="username"]').fill('performance_glitch_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');

    // click login
    await page.getByRole('button', { name: 'LOGIN' }).click();

    // assert the correct error message is displayed
    // await expect(page.locator('[data-test="error"]')).toContainText('Epic sadface: Sorry, this user has been locked out.');
})

test("valid user can login/login", async ({ page }) => {

    await page.goto("https://www.saucedemo.com/v1/index.html");

// ('await page.goto('https://www.saucedemo.com/v1/index.html')
    // await expect(page.locator('form')).toBeVisible();
    // await page.getByTestId("username").fill('    standard_user');


    // validate form load
    await page.locator('[data-test="username"]').click();
    // enter credentials
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');

    // click login
    await page.getByRole('button', { name: 'LOGIN' }).click();
        
    // validate page load
    await expect(page.getByText('Products')).toBeVisible();await expect(page.getByText('Products')).toBeVisible();

    


    // await page.close();

})