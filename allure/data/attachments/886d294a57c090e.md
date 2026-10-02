# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ERPSingleData.spec.ts >> ERP Inventory Management >> supplier with single data
- Location: tests\ERPSingleData.spec.ts:6:9

# Error details

```
Error: locator.waitFor: Error: strict mode violation: getByLabel('User Name') resolved to 3 elements:
    1) <input value="" type="text" id="username" name="username" placeholder="User Name" class="form-control ewControl"/> aka getByPlaceholder('User Name')
    2) <input value="u" id="type2" name="type" type="radio"/> aka getByLabel('Save my user name')
    3) <input value="" id="type3" name="type" type="radio" checked="checked"/> aka getByLabel('Always ask for my user name')

Call log:
  - waiting for getByLabel('User Name') to be visible

```

```
Test timeout of 30000ms exceeded while running "afterEach" hook.
```

# Page snapshot

```yaml
- generic [ref=e2]:
  - generic [ref=e3]:
    - link "Stock Accounting" [ref=e6] [cursor=pointer]:
      - /url: .
    - strong [ref=e9]: Stock Accounting
  - text:       
  - generic [ref=e13]:
    - list [ref=e14]:
      - listitem [ref=e15]:
        - link " Help (Categories)" [ref=e16] [cursor=pointer]:
          - /url: help_categorieslist.php
          - generic [ref=e17]: 
          - text: Help (Categories)
        - text:   
      - listitem [ref=e19]:
        - link " Login" [ref=e20] [cursor=pointer]:
          - /url: login.php
          - generic [ref=e21]: 
          - text: Login
    - list
  - generic [ref=e24]:
    - generic [ref=e27]:
      - generic [ref=e28] [cursor=pointer]:
        - radio "en" [checked]
        - text: en
      - generic [ref=e29] [cursor=pointer]:
        - radio "id"
        - text: id
    - generic [ref=e33]:
      - generic [ref=e34]:
        - button "x" [ref=e35] [cursor=pointer]: ×
        - heading [level=4] [ref=e37]:
          - text: Login
          - link "" [ref=e38] [cursor=pointer]:
            - /url: javascript:void(0);
      - generic [ref=e40]:
        - generic [ref=e41]:
          - generic [ref=e42]: User Name
          - textbox "User Name" [active] [ref=e44]: admin
        - generic [ref=e45]:
          - generic [ref=e46]: Password
          - textbox "Password" [ref=e48]: master
        - generic [ref=e51] [cursor=pointer]:
          - text: Options
          - generic [ref=e52]: 
        - generic [ref=e54]:
          - button "Login" [ref=e55] [cursor=pointer]
          - button "Reset" [ref=e56] [cursor=pointer]
      - generic [ref=e58]:
        - link "Forgot Password" [ref=e59] [cursor=pointer]:
          - /url: forgotpwd.php
        - link "Register" [ref=e60] [cursor=pointer]:
          - /url: register.php
  - generic [ref=e62]:
    - text: ©2015
    - link "Masino Sinaga" [ref=e63] [cursor=pointer]:
      - /url: http://www.ilovephpmaker.com
    - text: . All rights reserved. |
    - link "Terms and Conditions" [ref=e64] [cursor=pointer]:
      - /url: javascript:void(0);
    - text: "|"
    - link "About Us" [ref=e65] [cursor=pointer]:
      - /url: javascript:void(0);
    - text: "|"
    - link "Back to Top" [ref=e66] [cursor=pointer]:
      - /url: javascript:void(0);
```

# Test source

```ts
  1  | import { AdminLoginPage } from '../Pages/AdminLoginPage'
  2  | import { AdminLogoutPage } from '../Pages/AdminLogoutPage'
  3  | import { test as base, expect } from '@playwright/test'
  4  | 
  5  | export const test = base;
  6  | 
  7  | test.beforeEach(async ({page})=>{
  8  |     const loginpage = new AdminLoginPage(page)
  9  |     // call launch url method
  10 |     await loginpage.launchurl(process.env.Base_URL!)
  11 |     // call login method
  12 |     await loginpage.login(process.env.Base_USER!,process.env.Base_PASS!)
  13 | 
  14 | })
> 15 | test.afterEach(async({page})=>{
     |      ^ Test timeout of 30000ms exceeded while running "afterEach" hook.
  16 |     // call launch url method
  17 |     const lougoutpage = new AdminLogoutPage(page)
  18 |     await lougoutpage.ERPLogout()
  19 | 
  20 | })
  21 | 
  22 | export { expect }
  23 | 
  24 | 
  25 | 
  26 | 
```