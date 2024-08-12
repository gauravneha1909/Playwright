import {test,expect} from '@playwright/test'

//Just like screenshot and videos, trace can also be enabled by setting parameter "trace" in playwright.config.js

test('Element screenshot', async({page})=>
{
await page.goto('https://demo.opencart.com/')
await page.locator('//*[@id="content"]/div[2]/div[1]').screenshot({path: 'tests/Screenshots/'+Date.now()+'Element.png'})
}
)

