import{test,expect} from '@playwright/test'
import { KeyObject } from 'crypto'

test('HiddenDropDown', async({page})=>
{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.locator("[name='username']").fill('Admin')
    await page.locator("[name='password']").fill('admin123')
    await page.click("[type='submit']")
    await page.click("//span[normalize-space()='PIM']")
    await page.click(".oxd-icon.bi-caret-up-fill.oxd-select-text--arrow")//need to confirm

    //using selector hub debugger function

    await page.waitForTimeout(3000)

    const options= await page.$$("//div[@role='listbox']//span")

    for(const option of options)

        {
           const jobtitle =await option.textContent()
           console.log(jobtitle)

          if (jobtitle.includes('QA Engineer'))

            {await option.click()}
            break
            


        }



    await page.waitForTimeout(5000)
    
}

)