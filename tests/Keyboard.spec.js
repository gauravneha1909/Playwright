import{test,expect} from '@playwright/test'

test('Keyboardaction',async({page})=>
    
{
//When there are two text inputs on the web page and can be toggled using Tab key
await page.goto('https://gotranscript.com/text-compare')
await page.locator('[name="text1"]').fill('Welcome Gaurav')
await page.keyboard.press('Meta+A')// Control+A for windows
await page.keyboard.press('Meta+C')// Control+C for windows
//below two commands will switch focus from one text field to other text field
await page.keyboard.down('Tab')
await page.keyboard.up('Tab') //down and up are used when only single key has to be pressed. For more than one key, use press like above
await page.keyboard.press('Meta+V')// Control+C for windows
await expect(await page.locator('[name="text1"]').textContent()).toEqual(await page.locator('[name="text2"]').textContent())
await page.waitForTimeout(5000)
}
)