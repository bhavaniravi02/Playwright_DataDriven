import { expect, Locator, Page } from "@playwright/test";

export class CustomersPage{
    page:Page
        readonly ClickCustomers:Locator
        readonly ClickAddIcon:Locator
        readonly CustomerNumber:Locator
        readonly CustomerName:Locator
        readonly CustomerAddress:Locator
        readonly CustomerCity:Locator
        readonly CustomerCountry:Locator
        readonly CustomerContactperson:Locator
        readonly CustomerPhonenumber:Locator
        readonly CustomerEmail:Locator
        readonly CustomerMobileNumber:Locator
        readonly CustomerNotes:Locator
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
            this.ClickCustomers=page.locator('#mi_a_customers')
            this.ClickAddIcon=page.locator('span[class="glyphicon glyphicon-plus ewIcon"]').first()
            this.CustomerNumber=page.getByLabel('Customer Number')
            this.CustomerName=page.getByPlaceholder('Customer Name')
            this.CustomerAddress=page.getByPlaceholder('Address')
            this.CustomerCity=page.getByPlaceholder('City')
            this.CustomerCountry=page.getByPlaceholder('Country')
            this.CustomerContactperson=page.getByPlaceholder('Contact Person')
            this.CustomerPhonenumber=page.getByPlaceholder('Phone Number')
            this.CustomerEmail=page.getByPlaceholder('Email')
            this.CustomerMobileNumber=page.getByPlaceholder('Mobile Number')
            this.CustomerNotes=page.getByPlaceholder('Notes')
            this.clickAddButton=page.getByRole('button',{name:'Add'})
            this.ConfirmAddRecord=page.getByRole('button',{name:'OK!'})
            this.ClckAlertOk=page.getByRole('button',{name:'OK'})
            this.SearchPanel=page.locator('[data-caption="Search"]')
            this.SearchTextBox=page.locator('#psearch')
            this.SearchButton=page.getByRole('button',{name:'Search'})
        }
        // method for navigate to supplier add page
        async LaunchUrl(){
            await this.ClickCustomers.waitFor()
            await this.ClickCustomers.click()
            await this.ClickAddIcon.waitFor()
            await this.ClickAddIcon.click()
        }
        // method to fill supplier details
        async addCustomerDetails(cname:string,address:string,city:string,country:string,
            cperson:string,pnumber:string,email:string,mnumber:string,notes:string)
            {
                await this.CustomerNumber.waitFor()
                this.expNumber = await this.CustomerNumber.inputValue()
                await this.CustomerName.fill(cname)
                await this.CustomerAddress.fill(address)
                await this.CustomerCity.fill(city)
                await this.CustomerCountry.fill(country)
                await this.CustomerContactperson.fill(cperson)
                await this.CustomerPhonenumber.fill(pnumber)
                await this.CustomerEmail.fill(email)
                await this.CustomerMobileNumber.fill(mnumber)
                await this.CustomerNotes.fill(notes)
                await this.clickAddButton.click()
            }
            // method for confirm and alert dialog
            async HandlingCustomerAlerts()
            {
                await this.ConfirmAddRecord.waitFor()
                await this.ConfirmAddRecord.click()
                await this.ClckAlertOk.waitFor()
                await this.ClckAlertOk.click()
            }
            // method for supplier table
            async CustomerTable()
            {
                if (!await this.SearchTextBox.isVisible()) {
                    await this.SearchPanel.click()
                }
                await this.SearchTextBox.clear()
                await this.SearchTextBox.fill(this.expNumber)
                await this.SearchButton.click()
    
                const CustomerRow = this.page.locator('#tbl_a_customerslist tbody tr',
                    {hasText: this.expNumber}
                )
                await expect(CustomerRow).toBeVisible()
                console.log(`Customer Name found in Table: ${this.expNumber}`)
                await expect(CustomerRow).toContainText(this.expNumber)
    
            }
    
}