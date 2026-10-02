# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ERPSingleData.spec.ts >> ERP Inventory Management >> supplier with single data
- Location: tests\ERPSingleData.spec.ts:6:9

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: 'Search Panel' })
    - waiting for navigation to finish...
    - navigated to "http://webapp.qedgetech.com/login.php"

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
  3  | export class SuppliersPage{
  4  |     // declare properties and variables for suppliers
  5  |     page:Page
  6  |     readonly ClickSuppliers:Locator
  7  |     readonly ClickAddIcon:Locator
  8  |     readonly SupplierNumber:Locator
  9  |     readonly SupplierName:Locator
  10 |     readonly SupplierAddress:Locator
  11 |     readonly SupplierCity:Locator
  12 |     readonly SupplierCountry:Locator
  13 |     readonly SupplierContactperson:Locator
  14 |     readonly SupplierPhonenumber:Locator
  15 |     readonly SupplierEmail:Locator
  16 |     readonly SupplierMobileNumber:Locator
  17 |     readonly SupplierNotes:Locator
  18 |     readonly clickAddButton:Locator
  19 |     readonly ConfirmAddRecord:Locator
  20 |     readonly ClckAlertOk:Locator
  21 |     readonly SearchPanel:Locator
  22 |     readonly SearchTextBox:Locator
  23 |     readonly SearchButton:Locator
  24 |     // readonly SupplierGrid:Locator
  25 |     private expNumber!: string
  26 |     constructor(page:Page){
  27 |         this.page=page
  28 |         this.ClickSuppliers=page.locator('#mi_a_suppliers')
  29 |         this.ClickAddIcon=page.locator('span[class="glyphicon glyphicon-plus ewIcon"]').first()
  30 |         this.SupplierNumber=page.getByLabel('Supplier Number')
  31 |         this.SupplierName=page.getByPlaceholder('Supplier Name')
  32 |         this.SupplierAddress=page.getByPlaceholder('Address')
  33 |         this.SupplierCity=page.getByPlaceholder('City')
  34 |         this.SupplierCountry=page.getByPlaceholder('Country')
  35 |         this.SupplierContactperson=page.getByPlaceholder('Contact Person')
  36 |         this.SupplierPhonenumber=page.getByPlaceholder('Phone Number')
  37 |         this.SupplierEmail=page.getByPlaceholder('Email')
  38 |         this.SupplierMobileNumber=page.getByPlaceholder('Mobile Number')
  39 |         this.SupplierNotes=page.getByPlaceholder('Notes')
  40 |         this.clickAddButton=page.getByRole('button',{name:'Add'})
  41 |         this.ConfirmAddRecord=page.getByRole('button',{name:'OK!'})
  42 |         this.ClckAlertOk=page.getByRole('button',{name:'OK'})
  43 |         this.SearchPanel=page.getByRole('button',{name:'Search Panel'})
  44 |         this.SearchTextBox=page.locator('#psearch')
  45 |         this.SearchButton=page.getByRole('button',{name:'Search'})
  46 |     }
  47 |     // method for navigate to supplier add page
  48 |     async LaunchUrl(){
  49 |         await this.ClickSuppliers.waitFor()
  50 |         await this.ClickSuppliers.click()
  51 |         await this.ClickAddIcon.waitFor()
  52 |         await this.ClickAddIcon.click()
  53 |     }
  54 |     // method to fill supplier details
  55 |     async addsupplierdetails(sname:string,address:string,city:string,country:string,
  56 |         cperson:string,pnumber:string,email:string,mnumber:string,notes:string)
  57 |         {
  58 |             await this.SupplierNumber.waitFor()
  59 |             this.expNumber = await this.SupplierNumber.inputValue()
  60 |             await this.SupplierName.fill(sname)
  61 |             await this.SupplierAddress.fill(address)
  62 |             await this.SupplierCity.fill(city)
  63 |             await this.SupplierCountry.fill(country)
  64 |             await this.SupplierContactperson.fill(cperson)
  65 |             await this.SupplierPhonenumber.fill(pnumber)
  66 |             await this.SupplierEmail.fill(email)
  67 |             await this.SupplierMobileNumber.fill(mnumber)
  68 |             await this.SupplierNotes.fill(notes)
  69 |             await this.clickAddButton.click()
  70 |         }
  71 |         // method for confirm and alert dialog
  72 |         async HandlingSupplierAlerts()
  73 |         {
  74 |             await this.ConfirmAddRecord.waitFor()
  75 |             await this.ConfirmAddRecord.click()
  76 |             await this.ClckAlertOk.waitFor()
  77 |             await this.ClckAlertOk.click()
  78 |         }
  79 |         // method for supplier table
  80 |         async SupplierTable()
  81 |         {
  82 |             if (!await this.SearchTextBox.isVisible()) {
> 83 |                 await this.SearchPanel.click()
     |                                        ^ Error: locator.click: Test timeout of 30000ms exceeded.
  84 |             }
  85 |             await this.SearchTextBox.clear()
  86 |             await this.SearchTextBox.fill(this.expNumber)
  87 |             await this.SearchButton.click()
  88 | 
  89 |             const SupplierRow = this.page.locator('#tbl_a_supplierslist tbody tr',
  90 |                 {hasText: this.expNumber}
  91 |             )
  92 |             await expect(SupplierRow).toBeVisible()
  93 |             console.log(`Supplier Name found in Table: ${this.expNumber}`)
  94 |             await expect(SupplierRow).toContainText(this.expNumber)
  95 | 
  96 |         }
  97 | 
  98 | }
```