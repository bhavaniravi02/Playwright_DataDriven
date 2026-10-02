import { test } from "../hooks/ERPHooks";
import { SuppliersPage } from "../Pages/SuppliersPage";
import { CustomersPage } from "../Pages/CustomersPage";
import erpdata from "../TestData/ERPData.json"
test.describe('ERP Supplier/Customer',()=>{
    for( const supdata of erpdata.Suppliers)
        {
            test(`supplier data from json file ${supdata.Suppliername}`,async({page})=>{
                const suppler = new SuppliersPage(page)
                await suppler.LaunchUrl()
                await suppler.addsupplierdetails(
                    supdata.Suppliername,
                    supdata.Address,
                    supdata.City,
                    supdata.Country,
                    supdata.ContactPerson,
                    supdata.PhoneNumber,
                    supdata.Email,
                    supdata.MobileNumber,
                    supdata.Notes
                )

                await suppler.HandlingSupplierAlerts()
                await suppler.SupplierTable()

            })

           }

    for(const cusdata of erpdata.customers)
        {
            test(`customer data from json file ${cusdata.Customername}`,async({page})=>{
                const cus = new CustomersPage(page)
                await cus.LaunchUrl()
                await cus.addCustomerDetails(
                    cusdata.Customername,
                    cusdata.Address,
                    cusdata.City,
                    cusdata.Country,
                    cusdata.ContactPerson,
                    cusdata.PhoneNumber,
                    cusdata.Email,
                    cusdata.MobileNumber,
                    cusdata.Notes
                )
                
                await cus.HandlingCustomerAlerts()
                await cus.CustomerTable()

            })
        }


}) 