import {test,expect} from '@playwright/test'

test('AutoSuggestDropDown',async({page})=>
    
    {
        await page.goto('https://www.redbus.in/')
        await page.locator('#src').fill('Delhi')
        await page.waitForSelector("//li[contains(@class,'sc-iwsKbI')]/div/text[1]")
        const source= await page.$$("//li[contains(@class,'sc-iwsKbI')]/div/text[1]")

        for (let option of source )

            {
               let location= await option.textContent()
               console.log(location)
            }

        for (let option of source )

            {
                let location= await option.textContent()
                if (location.includes('Majnu Ka Tilla'))
                {
                    await option.click()
                    break
                }
            }
    
        await page.waitForTimeout(5000)

    }

)