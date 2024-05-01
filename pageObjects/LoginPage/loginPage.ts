import { Page, expect, type Locator } from "@playwright/test";

export class LoginPage {
  readonly page: Page;
  readonly toaccessbutton: Locator;
  readonly usernameField: Locator;
  readonly passwordField: Locator;
  readonly loginButton: Locator;
  readonly loginusername: Locator;
  readonly loginerrormessage: Locator;
  readonly RememberPassord: Locator;

  constructor(page: Page) {
    this.page = page;
    this.toaccessbutton = page.locator(".btAccess ");
    this.usernameField = page.getByRole("textbox", {
      name: "Usuario / Correo electrónico",
    });
    this.passwordField = page.getByLabel("Contraseña");
    this.loginButton = page.locator("#btnaccess");
    this.loginusername = page.getByRole("button", { name: "testproes2405" });
    this.loginerrormessage = page.locator("#alert-msg-2");
    this.RememberPassord = page.locator("#viewPass")
  }

  async goto() {
    await this.page.goto("https://m.apuestas.codere.es/deportes/#/HomePage");
  }
  
  async performLogin(username: string, password: string) {
    await this.toaccessbutton.click();
    await this.usernameField.fill(username);
    await this.passwordField.fill(password);
    await this.loginButton.click();
  }

  async verifySuccessLogin() {
    await expect(this.loginusername).toBeVisible();
  }
  
  async verifyUnsuccessLogin() {
    const errorMessage = await this.page.textContent(".alertMessageCustom");
    expect(errorMessage).toBe(
      " Por favor, revisa los datos y vuelve a intentarlo. Ten en cuenta el uso de mayúsculas y minúsculas en tu contraseña."
    );
  }
  
  async verifyEmptyFieldserrormsg() {
    const errorMessage = await this.page.textContent(".alert-message");
    expect(errorMessage).toBe("Revisa que todos los campos estén rellenos");
  }
  
  async verifyShownpassword(){
    const password = 'Testuser';
    await this.toaccessbutton.click();
    await this.passwordField.fill(password);
    await this.RememberPassord.click();
    const displayedPassword = await this.passwordField.evaluate((input: HTMLInputElement) => input.value);
    expect(displayedPassword).toEqual(password);
  }
}
