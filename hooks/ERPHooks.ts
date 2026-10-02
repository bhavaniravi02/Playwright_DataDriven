import { AdminLoginPage } from '../Pages/AdminLoginPage'
import { AdminLogoutPage } from '../Pages/AdminLogoutPage'
import { test as base, expect } from '@playwright/test'

export const test = base;

test.beforeEach(async ({page})=>{
    const loginpage = new AdminLoginPage(page)
    // call launch url method
    await loginpage.launchurl(process.env.Base_URL!)
    // call login method
    await loginpage.login(process.env.Base_USER!,process.env.Base_PASS!)

})
test.afterEach(async({page})=>{
    // call launch url method
    const lougoutpage = new AdminLogoutPage(page)
    await lougoutpage.ERPLogout()

})

export { expect }



