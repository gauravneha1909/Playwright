import{test,expect} from '@playwright/test'

test('',async({page})=>
    
    {
        await page.goto('https://www.dummyticket.com/dummy-ticket-for-visa-application/')

        await page.waitForSelector('#product_551', { state: 'visible' }) //.waitForSelector(locator) can be used to put wait for a specific element to be visible

        const DummyHotelBooking=await page.locator('#product_551')
        await expect(DummyHotelBooking).not.toBeChecked()
        await DummyHotelBooking.check()
        await expect(DummyHotelBooking).toBeChecked()
        await expect ((DummyHotelBooking).isChecked()).toBeTruthy()

        //Uncheck will not work until you click on some other radio button. So basically, uncheck is not supported for radio buttons
        
    }

)