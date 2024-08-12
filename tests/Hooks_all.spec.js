import {test,expect} from '@playwright/test'

let page; //we are creating a page fixture that will be used in all test cases. This fixture is being declared in beforeEach block

//also this will need fullyParallel to be false in config.js
test.beforeAll(async({browser})=>
{

page=await browser.newPage()
await page.goto('https://www.demoblaze.com/index.html')
await page.locator('#login2').click()
await page.locator('#loginusername').fill('pavanol')
await page.locator('#loginpassword').fill('test@123')
await page.locator('//button[normalize-space()="Log in"]').click()

}
)

test.afterAll(async()=>
    {
        await page.locator('#logout2').click()
    }
)

test('Home Page',async()=>
{
await page.waitForSelector('.hrefch')
const prods= await page.$$('.hrefch')
expect (prods).toHaveLength(9)
}
)

test('Add Product to Card',async()=>

    {

        await page.locator('//a[normalize-space()="Samsung galaxy s6"]').click()
        await page.waitForSelector('//a[normalize-space()="Add to cart"]')
        await page.locator('//a[normalize-space()="Add to cart"]').click()
        page.on('dialog',async dialog=>
            {
                expect(dialog.message).toContain('Product added.') 
                await dialog.accept()
            }
        )
    
    }
    )