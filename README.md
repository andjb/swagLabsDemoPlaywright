Playwright Login Test Suite (POM) – SauceDemo Example

This project demonstrates how to build a scalable, maintainable test automation framework using Playwright
 with the Page Object Model (POM) design pattern.

The suite automates login flows for SauceDemo
 and is designed to be easily extended and integrated into a CI/CD pipeline.

📂 Project Structure
project-root/
│
├── pages/
│   ├── loginPage.ts          # Page Object for the login page
│   └── inventoryPage.ts      # Page Object for the inventory page
│
├── tests/
│   └── login.spec.ts         # Test cases for login functionality
│
├── playwright.config.ts      # Playwright configuration
└── package.json

✅ Features

Page Object Model (POM) for clean separation of concerns

Positive login scenarios (valid users)

Negative login scenarios (locked-out, invalid, missing fields)

Assertions for correct navigation & error messages

CI/CD ready with Playwright’s native reporters and test runner

🚀 Getting Started
1. Clone the Repository
git clone https://github.com/your-username/playwright-login-suite.git
cd playwright-login-suite

2. Install Dependencies
npm install

3. Run Tests

Run all tests in headless mode:

npx playwright test


Run tests in headed mode (visible browser):

npx playwright test --headed


Run a specific test file:

npx playwright test tests/login.spec.ts

🧪 Example Test Cases

Successful login with standard_user, problem_user, and performance_glitch_user

Locked out user blocked with appropriate error message

Invalid credentials rejected with error message

Empty username shows validation error

Empty password shows validation error

📊 Reports & Debugging

Generate an HTML report after test execution:

npx playwright show-report


Take screenshots or record video on failures (configured in playwright.config.ts).

🔧 CI/CD Integration

Add the following job to your CI/CD pipeline (example: GitHub Actions):

name: Playwright Tests

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm install
      - run: npx playwright install --with-deps
      - run: npx playwright test

📈 Outcome

This suite provides a reliable regression safety net for the login workflow and can be extended to cover more areas of the application.

With its modular POM structure, it’s easy to maintain and ready to plug into modern CI/CD pipelines.

👤 Author

Your Name
Senior QA Engineer
LinkedIn Profile
