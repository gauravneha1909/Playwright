import{test,expect} from '@playwright/test'

test('Multiselect',async({page})=>

{

await page.goto('https://testautomationpractice.blogspot.com/')
await page.locator('#colors').selectOption(['Blue','Red','Yellow']) //or await page.selectOption('#colors',['Blue','Red','Yellow'])

//Assert number of options
const options= await page.locator('#colors option')
expect(options).toHaveCount(5)

//Assert using javascript
const jsoptions= await page.$$('#colors option')
console.log(jsoptions.length)
await expect(jsoptions.length).toBe(5)

//Assert presence of option
const content= await page.locator('#colors').textContent()
await expect(content.includes('Blue')).toBeTruthy()
await expect(content.includes('Black')).toBeFalsy()

await page.waitForTimeout(5000)

}

)