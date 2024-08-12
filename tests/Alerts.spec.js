import{test,expect} from '@playwright/test'

test.skip('Alert with OK', async({page})=>
{
    await page.goto('https://testautomationpractice.blogspot.com/')

    //dialog window handler
    await page.on('dialog', async dialog=>
    
    {
        expect (dialog.type()).toContain('alert')
        expect(dialog.message()).toContain('I am an alert box!')
        await dialog.accept()

    })

    await page.click('//button[normalize-space()="Alert"]')

})

test.skip('Confirmation Dialog with OK and cancel', async({page})=>
    {
    await page.goto('https://testautomationpractice.blogspot.com/')
    //dialog window handler
    await page.on('dialog', async dialog=>
    {
    expect (dialog.type()).toContain('confirm')
    expect(dialog.message()).toContain('Press a button!')
    //await dialog.accept()//close by using OK button
    await dialog.dismiss()//close by using Cancel button
    })
        await page.click('//button[normalize-space()="Confirm Box"]')
        //await expect(page.locator('//p[@id="demo"]')).toHaveText('You pressed OK!')
        await expect(page.locator('//p[@id="demo"]')).toHaveText('You pressed Cancel!')
        await page.waitForTimeout(5000)
    })

test('Prompt Dialog', async({page})=>
    {
    await page.goto('https://testautomationpractice.blogspot.com/')
            //dialog window handler
    await page.on('dialog', async dialog=>
    
    {
    expect (dialog.type()).toContain('prompt')
    expect(dialog.message()).toContain('Please enter your name:')
    expect(dialog.defaultValue()).toContain('Harry Potter')
    await dialog.accept('Gaurav Kumar')//close by using OK button and providing input in text field 
    })
    
        await page.click('//button[normalize-space()="Prompt"]')
        //await expect(page.locator('//p[@id="demo"]')).toHaveText('You pressed OK!')
        await expect(page.locator('//p[@id="demo"]')).toHaveText('Hello Gaurav Kumar! How are you today?')
        await page.waitForTimeout(5000)
        
    })