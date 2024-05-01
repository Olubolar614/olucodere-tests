import { test, expect } from "@playwright/test";
import { LoginPage } from "../pageObjects/LoginPage/loginPage";

test("Should login successfully with valid credentials", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await page.waitForSelector(".alert-button-group");
  await page.click(".alert-button-group .reyectBtnCookie");
  await loginPage.performLogin("testproes2405", "Vale2015");
  await loginPage.verifySuccessLogin();
});
test("Should display error message with incorrect credentials", async ({
  page,
}) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await page.waitForSelector(".alert-button-group");
  await page.click(".alert-button-group .reyectBtnCookie");
  await loginPage.performLogin("testoes24022", "Vale215");
  await loginPage.verifyUnsuccessLogin();
});
test("Should display error message with Empty username and password fields", async ({
  page,
}) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await page.waitForSelector(".alert-button-group");
  await page.click(".alert-button-group .reyectBtnCookie");
  await loginPage.performLogin("", "");
  await loginPage.verifyEmptyFieldserrormsg();
});
test("Confirm that the displayed password functionality is functioning properly.", 
async ({
  page,
}) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await page.waitForSelector(".alert-button-group");
  await page.click(".alert-button-group .reyectBtnCookie");
  await loginPage.verifyShownpassword();
});
