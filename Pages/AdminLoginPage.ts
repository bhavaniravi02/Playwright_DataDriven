import { expect, Locator, Page } from "@playwright/test";

export class AdminLoginPage {
    // declaring variables and properties
    page:Page
    readonly UsernameInput:Locator
    readonly PasswordInput:Locator
    readonly LoginBtn:Locator
    dashboard:Locator
    // create constructor to initialize the values to the properties
    constructor(page:Page)
    {
        this.page = page
        this.UsernameInput=page.locator('input[id="username"]')
        this.PasswordInput=page.locator('input[type="password"]')
        this.LoginBtn=page.getByRole('button',{name:'Login'})
        this.dashboard=page.locator('#ewBreadcrumb2')
    }
    // write methods to perform actions
    async launchurl(Url:string){
        await this.page.goto(Url)
    }
    // write method to perform actions in login
    async login(user:string,pass:string){
        // await this.username.waitFor()
        await this.UsernameInput.clear()
        await this.UsernameInput.fill(user)
        await this.PasswordInput.clear()
        await this.PasswordInput.fill(pass)
        await this.LoginBtn.click()
        await expect(this.dashboard).toBeVisible()
    }
    
}