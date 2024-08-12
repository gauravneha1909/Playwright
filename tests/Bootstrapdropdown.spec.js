import{test,expect} from '@playwright/test'

test('BootStrap Dropdown',async({page})=>
{
    await page.goto('https://jquery-az.com/boots/demo.php?ex=63.0_2')
    await page.waitForTimeout(5000)
    await page.locator('.multiselect').click()
    const options =await page.locator('ul>li label input')
    await expect(options).toHaveCount(11)

    const optionslength =await page.$$('ul>li label input')
    await expect(optionslength.length).toBe(11)

    const optionslabel =await page.$$('ul>li label')

    for (let label of optionslabel)
    {
        let val=await label.textContent()
        console.log(val)

        if (val.includes('Angular')|| val.includes('Java'))
        {
            await label.click()

        }

    }

    for (let label of optionslabel)
    {
        let val=await label.textContent()
        console.log(val)

        if (val.includes('HTML')|| val.includes('CSS')||val.includes('Angular'))
        {
            await label.click()

        }

    }

    await page.waitForTimeout(5000)
}
)