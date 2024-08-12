import{test,expect} from '@playwright/test'

test('MouseHover', async({page})=>
    
    {
    await page.goto('https://demo.opencart.com/')
    const desktop=await page.locator('//a[normalize-space()="Desktops"]')
    const macbook=await page.locator('//a[normalize-space()="Mac (1)"]')
    await desktop.hover()
    await macbook.hover()
    await page.waitForTimeout(5000)
    }
)

test('MouseRightClick', async({page})=>
    
    {
    await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html')
    const button= await page.locator('//span[normalize-space()="right click me"]')
    await button.click({button: 'right'})
    await page.waitForTimeout(5000)
    }
)

test('MouseDoubleClick', async({page})=>
    
    {
    await page.goto('https://testautomationpractice.blogspot.com/')
    const button= await page.locator('//button[normalize-space()="Copy Text"]')
    await button.dblclick()
    const secondfield=await page.locator('#field2')
    await expect(secondfield).toHaveValue('Hello World!')
    await page.waitForTimeout(5000)
    }
)

test('MouseDrag&DrapApproach1', async({page})=>
    
    {
    await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')
    const source= await page.locator('#box6')
    const target= await page.locator('#box106')
    await source.hover()
    await page.mouse.down()
    await target.hover()
    await page.mouse.up()
    await page.waitForTimeout(5000)
    }
)

test.only('MouseDrag&DrapApproach2', async({page})=>
    
    {
    await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')
    const source= await page.locator('#box6')
    const target= await page.locator('#box106')
    await source.dragTo(target)
    await page.waitForTimeout(5000)
    }
)