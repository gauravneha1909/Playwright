import {test,expect,chromium} from '@playwright/test' // We have imported browser here

//browser contains multiple context and context can contain multiple pages

//Scenario 1- When both pages are independent
test('Handlewindow/pages',async({})=>
{
const browser=await chromium.launch()
const context=await browser.newContext()
const page1= await context.newPage()
const page2= await context.newPage()
const allpages=context.pages()
console.log("Number of pages created is "+allpages.length)

//now page1 and page2 can be handled seperately and both will be for chromium browser. 
//you can also import other browsers and crerate new context if you want to use other browsers parallely

await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
await expect(page1).toHaveTitle('OrangeHRM')
await page1.waitForTimeout(5000)

await page2.goto("https://www.demoblaze.com/index.html")
await expect(page2).toHaveTitle('STORE')
await page2.waitForTimeout(5000)
await page1.close()
await page2.close()
}
)
//Scenario 2- When page 1 redirects/switches to a new page
test.only('HandleMultiplewindow/pages',async({})=>
    {
    const browser=await chromium.launch()
    const context=await browser.newContext()
    const page1= await context.newPage()

    await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await expect(page1).toHaveTitle('OrangeHRM')

    //Before clicking the element, we have create one event
    const pagePromise=context.waitForEvent('page')//this will create a new page and below click will use that page
    await page1.click('//a[normalize-space()="OrangeHRM, Inc"]')
    const page2= await pagePromise
    await expect(page2).toHaveTitle('Human Resources Management Software | OrangeHRM')

    //after this page1 and page2 can be handled separately
    await page1.waitForTimeout(3000)
    await page2.waitForTimeout(3000)
    //await page1.close()
    //await page2.close()
    await browser.close()
}
)