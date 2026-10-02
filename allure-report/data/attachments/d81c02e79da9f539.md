# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ERPSingleData.spec.ts >> ERP Inventory Management >> Customer Module
- Location: tests\ERPSingleData.spec.ts:17:9

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: 'Search Panel' })

```

# Page snapshot

```yaml
- generic [ref=f5e2]:
  - generic [ref=f5e3]:
    - link "Stock Accounting" [ref=f5e6] [cursor=pointer]:
      - /url: .
    - strong [ref=f5e9]: Stock Accounting
  - text:       
  - generic [ref=f5e13]:
    - list [ref=f5e14]:
      - listitem [ref=f5e15]:
        - link " Help (Categories)" [ref=f5e16] [cursor=pointer]:
          - /url: help_categorieslist.php
          - generic [ref=f5e17]: 
          - text: Help (Categories)
        - text:   
      - listitem [ref=f5e19]:
        - link " Login" [ref=f5e20] [cursor=pointer]:
          - /url: login.php
          - generic [ref=f5e21]: 
          - text: Login
    - list
  - generic [ref=f5e24]:
    - generic [ref=f5e27]:
      - generic [ref=f5e28] [cursor=pointer]:
        - radio "en" [checked]
        - text: en
      - generic [ref=f5e29] [cursor=pointer]:
        - radio "id"
        - text: id
    - generic:  
  - generic [ref=f5e32]:
    - text: ©2015
    - link "Masino Sinaga" [ref=f5e33] [cursor=pointer]:
      - /url: http://www.ilovephpmaker.com
    - text: . All rights reserved. |
    - link "Terms and Conditions" [ref=f5e34] [cursor=pointer]:
      - /url: javascript:void(0);
    - text: "|"
    - link "About Us" [ref=f5e35] [cursor=pointer]:
      - /url: javascript:void(0);
    - text: "|"
    - link "Back to Top" [ref=f5e36] [cursor=pointer]:
      - /url: javascript:void(0);
```

# Test source

```ts
  1  | import { expect, Locator, Page } from "@playwright/test";
  2  | 
  3  | export class CustomersPage{
  4  |     page:Page
  5  |         readonly ClickCustomers:Locator
  6  |         readonly ClickAddIcon:Locator
  7  |         readonly CustomerNumber:Locator
  8  |         readonly CustomerName:Locator
  9  |         readonly CustomerAddress:Locator
  10 |         readonly CustomerCity:Locator
  11 |         readonly CustomerCountry:Locator
  12 |         readonly CustomerContactperson:Locator
  13 |         readonly CustomerPhonenumber:Locator
  14 |         readonly CustomerEmail:Locator
  15 |         readonly CustomerMobileNumber:Locator
  16 |         readonly CustomerNotes:Locator
  17 |         readonly clickAddButton:Locator
  18 |         readonly ConfirmAddRecord:Locator
  19 |         readonly ClckAlertOk:Locator
  20 |         readonly SearchPanel:Locator
  21 |         readonly SearchTextBox:Locator
  22 |         readonly SearchButton:Locator
  23 |         // readonly SupplierGrid:Locator
  24 |         private expNumber!: string
  25 |         constructor(page:Page){
  26 |             this.page=page
  27 |             this.ClickCustomers=page.locator('#mi_a_customers')
  28 |             this.ClickAddIcon=page.locator('span[class="glyphicon glyphicon-plus ewIcon"]').first()
  29 |             this.CustomerNumber=page.getByLabel('Customer Number')
  30 |             this.CustomerName=page.getByPlaceholder('Customer Name')
  31 |             this.CustomerAddress=page.getByPlaceholder('Address')
  32 |             this.CustomerCity=page.getByPlaceholder('City')
  33 |             this.CustomerCountry=page.getByPlaceholder('Country')
  34 |             this.CustomerContactperson=page.getByPlaceholder('Contact Person')
  35 |             this.CustomerPhonenumber=page.getByPlaceholder('Phone Number')
  36 |             this.CustomerEmail=page.getByPlaceholder('Email')
  37 |             this.CustomerMobileNumber=page.getByPlaceholder('Mobile Number')
  38 |             this.CustomerNotes=page.getByPlaceholder('Notes')
  39 |             this.clickAddButton=page.getByRole('button',{name:'Add'})
  40 |             this.ConfirmAddRecord=page.getByRole('button',{name:'OK!'})
  41 |             this.ClckAlertOk=page.getByRole('button',{name:'OK'})
  42 |             this.SearchPanel=page.getByRole('button',{name:'Search Panel'})
  43 |             this.SearchTextBox=page.locator('#psearch')
  44 |             this.SearchButton=page.getByRole('button',{name:'Search'})
  45 |         }
  46 |         // method for navigate to supplier add page
  47 |         async LaunchUrl(){
  48 |             await this.ClickCustomers.waitFor()
  49 |             await this.ClickCustomers.click()
  50 |             await this.ClickAddIcon.waitFor()
  51 |             await this.ClickAddIcon.click()
  52 |         }
  53 |         // method to fill supplier details
  54 |         async addCustomerDetails(cname:string,address:string,city:string,country:string,
  55 |             cperson:string,pnumber:string,email:string,mnumber:string,notes:string)
  56 |             {
  57 |                 await this.CustomerNumber.waitFor()
  58 |                 this.expNumber = await this.CustomerNumber.inputValue()
  59 |                 await this.CustomerName.fill(cname)
  60 |                 await this.CustomerAddress.fill(address)
  61 |                 await this.CustomerCity.fill(city)
  62 |                 await this.CustomerCountry.fill(country)
  63 |                 await this.CustomerContactperson.fill(cperson)
  64 |                 await this.CustomerPhonenumber.fill(pnumber)
  65 |                 await this.CustomerEmail.fill(email)
  66 |                 await this.CustomerMobileNumber.fill(mnumber)
  67 |                 await this.CustomerNotes.fill(notes)
  68 |                 await this.clickAddButton.click()
  69 |             }
  70 |             // method for confirm and alert dialog
  71 |             async HandlingCustomerAlerts()
  72 |             {
  73 |                 await this.ConfirmAddRecord.waitFor()
  74 |                 await this.ConfirmAddRecord.click()
  75 |                 await this.ClckAlertOk.waitFor()
  76 |                 await this.ClckAlertOk.click()
  77 |             }
  78 |             // method for supplier table
  79 |             async CustomerTable()
  80 |             {
  81 |                 if (!await this.SearchTextBox.isVisible()) {
> 82 |                     await this.SearchPanel.click()
     |                                            ^ Error: locator.click: Test timeout of 30000ms exceeded.
  83 |                 }
  84 |                 await this.SearchTextBox.clear()
  85 |                 await this.SearchTextBox.fill(this.expNumber)
  86 |                 await this.SearchButton.click()
  87 |     
  88 |                 const CustomerRow = this.page.locator('#tbl_a_customerslist tbody tr',
  89 |                     {hasText: this.expNumber}
  90 |                 )
  91 |                 await expect(CustomerRow).toBeVisible()
  92 |                 console.log(`Customer Name found in Table: ${this.expNumber}`)
  93 |                 await expect(CustomerRow).toContainText(this.expNumber)
  94 |     
  95 |             }
  96 |     
  97 | }
```