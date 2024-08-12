import{test,expect} from '@playwright/test'

test.skip ('iFrame using Name or URL', async({page})=>
    {
    await page.goto('https://ui.vision/demo/webtest/frames/')
    const allframes=await page.frames()
    console.log(allframes.length)
    //using name or url of the frame
    //const frame1=await page.frame('framename') //if name is present
    const frame1=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'}) //using frame url
    //await frame1.locator("[name='mytext1']").fill('Hello') //or below
    await frame1.fill("[name='mytext1']",'Hello')

    }
)

test ('iFrame using Frame Locator', async({page})=>
    {
    await page.goto('https://ui.vision/demo/webtest/frames/')
    const frame=await page.frameLocator('frame[src="frame_1.html"]')
    await frame.locator("[name='mytext1']").fill('Hello')
    await page.waitForTimeout(3000)

    }
)