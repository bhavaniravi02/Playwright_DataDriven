import { expect, Locator, Page } from "@playwright/test";

export class SuppliersPage{
    // declare properties and variables for suppliers
    page:Page
    readonly ClickSuppliers:Locator
    readonly ClickAddIcon:Locator
    readonly SupplierNumber:Locator
    readonly SupplierName:Locator
    readonly SupplierAddress:Locator
    readonly SupplierCity:Locator
    readonly SupplierCountry:Locator
    readonly SupplierContactperson:Locator
    readonly SupplierPhonenumber:Locator
    readonly SupplierEmail:Locator
    readonly SupplierMobileNumber:Locator
    readonly SupplierNotes:Locator
    readonly clickAddButton:Locator
    readonly ConfirmAddRecord:Locator
    readonly ClckAlertOk:Locator
    readonly SearchPanel:Locator
    readonly SearchTextBox:Locator
    readonly SearchButton:Locator
    // readonly SupplierGrid:Locator
    private expNumber!: string
    constructor(page:Page){
        this.page=page
        this.ClickSuppliers=page.locator('#mi_a_suppliers')
        this.ClickAddIcon=page.locator('span[class="glyphicon glyphicon-plus ewIcon"]').first()
        this.SupplierNumber=page.getByLabel('Supplier Number')
        this.SupplierName=page.getByPlaceholder('Supplier Name')
        this.SupplierAddress=page.getByPlaceholder('Address')
        this.SupplierCity=page.getByPlaceholder('City')
        this.SupplierCountry=page.getByPlaceholder('Country')
        this.SupplierContactperson=page.getByPlaceholder('Contact Person')
        this.SupplierPhonenumber=page.getByPlaceholder('Phone Number')
        this.SupplierEmail=page.getByPlaceholder('Email')
        this.SupplierMobileNumber=page.getByPlaceholder('Mobile Number')
        this.SupplierNotes=page.getByPlaceholder('Notes')
        this.clickAddButton=page.getByRole('button',{name:'Add'})
        this.ConfirmAddRecord=page.getByRole('button',{name:'OK!'})
        this.ClckAlertOk=page.getByRole('button',{name:'OK'})
        this.SearchPanel=page.locator('[data-caption="Search"]')
        this.SearchTextBox=page.locator('#psearch')
        this.SearchButton=page.getByRole('button',{name:'Search'})
    }
    // method for navigate to supplier add page
    async LaunchUrl(){
        await this.ClickSuppliers.waitFor()
        await this.ClickSuppliers.click()
        await this.ClickAddIcon.waitFor()
        await this.ClickAddIcon.click()
    }
    // method to fill supplier details
    async addsupplierdetails(sname:string,address:string,city:string,country:string,
        cperson:string,pnumber:string,email:string,mnumber:string,notes:string)
        {
            await this.SupplierNumber.waitFor()
            this.expNumber = await this.SupplierNumber.inputValue()
            await this.SupplierName.fill(sname)
            await this.SupplierAddress.fill(address)
            await this.SupplierCity.fill(city)
            await this.SupplierCountry.fill(country)
            await this.SupplierContactperson.fill(cperson)
            await this.SupplierPhonenumber.fill(pnumber)
            await this.SupplierEmail.fill(email)
            await this.SupplierMobileNumber.fill(mnumber)
            await this.SupplierNotes.fill(notes)
            await this.clickAddButton.click()
        }
        // method for confirm and alert dialog
        async HandlingSupplierAlerts()
        {
            await this.ConfirmAddRecord.waitFor()
            await this.ConfirmAddRecord.click()
            await this.ClckAlertOk.waitFor()
            await this.ClckAlertOk.click()
        }
        // method for supplier table
        async SupplierTable()
        {
            if (!await this.SearchTextBox.isVisible()) {
                await this.SearchPanel.click()
            }
            await this.SearchTextBox.clear()
            await this.SearchTextBox.fill(this.expNumber)
            await this.SearchButton.click()

            const SupplierRow = this.page.locator('#tbl_a_supplierslist tbody tr',
                {hasText: this.expNumber}
            )
            await expect(SupplierRow).toBeVisible()
            console.log(`Supplier Name found in Table: ${this.expNumber}`)
            await expect(SupplierRow).toContainText(this.expNumber)

        }

}