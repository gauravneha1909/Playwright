import {test,expect} from '@playwright/test'

test('InputBox', async({page})=>
    
    {
        await page.goto('https://www.demoblaze.com/index.html')
        await page.click('id=login2') // or await page.locator('id=login2').click()
        await page.fill('#loginusername','pavanol') // or await page.locator('#loginusername').fill('pavanol')
        await expect(page.locator("input[id='loginpassword']")).toBeVisible()
        await expect(page.locator("input[id='loginpassword']")).toBeEmpty()
        await expect(page.locator("input[id='loginpassword']")).toBeEditable()
        await expect(page.locator("input[id='loginpassword']")).toBeEnabled()
        await page.locator("input[id='loginpassword']").fill( 'test@123') //can also use .type()
        await page.click("//button[normalize-space()='Log in']")
        const logoutlink= await page.locator("//button[normalize-space()='Log out']")
        await expect(logoutlink).toBeVisible
        await page.waitForTimeout(5000)//if you want script to pause execution for some time. in this instance, its 5 seconds
        await page.close()

    }

)