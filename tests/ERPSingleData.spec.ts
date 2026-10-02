import { SuppliersPage } from "../Pages/SuppliersPage";
import { CustomersPage } from "../Pages/CustomersPage";
import { test } from "../hooks/ERPHooks";
test.describe('ERP Inventory Management',()=>{
    // First test case for supplier module
    test('supplier with single data',async({page})=>{
        // create Object for Supplier Page File
        const sup = new SuppliersPage(page)
        await sup.LaunchUrl()
        await sup.addsupplierdetails('Bhavani','RajaStreet','Hyd','India','Ram','9849363696','test@mail.com','5758587858','i am learning playwright'
            
        )
        await sup.HandlingSupplierAlerts()
        await sup.SupplierTable()
    })
    // Customer Module
    test('Customer Module',async({page})=>{
        // create object for Customer page File
        const custmr = new CustomersPage(page)
        await custmr.LaunchUrl()
        await custmr.addCustomerDetails('Shankar','Garikapatis Building','Rjy','India','Vajra','9849363696','test1@gmail.com','6789345612','eehhjbf')
        await custmr.HandlingCustomerAlerts()
        await custmr.CustomerTable()
    })
})