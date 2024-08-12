import {test,expect} from '@playwright/test'

test('Locators', async({page})=>
    
    {
        await page.goto('https://www.demoblaze.com/index.html')

        await page.click('id=login2') // or await page.locator('id=login2').click()

        await page.fill('#loginusername','pavanol') // or await page.locator('#loginusername').fill('pavanol')

        await page.fill("input[id='loginpassword']", 'test@123')

        await page.click("//button[normalize-space()='Log in']")

       const logoutlink= await page.locator("//button[normalize-space()='Log out']")

       await expect(logoutlink).toBeVisible

       await page.close()

        

    }





)