import {test,expect} from '@playwright/test'

//default screenshots can be captured by declaring screenshot : 'on','off' or 'only-on-failure'  in playwright.config.js
//default videos can be captured by declaring video : 'on','off', 'on-first-retry','retain-on-failure' or 'retry-with-video'  in playwright.config.js
test('Page screenshot', async({page})=>
{
await page.goto('https://demo.opencart.com/')
//await page.screenshot({path: 'Homepage.png'})
await page.screenshot({path: 'tests/Screenshots/'+Date.now()+'Homepage.png'})
}
)

test('Full Page screenshot', async({page})=>
{
await page.goto('https://demo.opencart.com/')
await page.screenshot({path: 'tests/Screenshots/'+Date.now()+'Fullpage.png',fullPage:true})
}
)

test('Element screenshot', async({page})=>
{
await page.goto('https://demo.opencart.com/')
await page.locator('//*[@id="content"]/div[2]/div[1]').screenshot({path: 'tests/Screenshots/'+Date.now()+'Element.png'})
}
)

