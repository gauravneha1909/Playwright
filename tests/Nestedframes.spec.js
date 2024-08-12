import {test,expect} from '@playwright/test'

test('NestedFrames', async({page})=>
    {
        await page.goto('https://ui.vision/demo/webtest/frames/')
        const frame3=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'})
        await frame3.locator("input[name='mytext3']").fill('Testing')
        
        //Nested Frame inside frame 3
        const childframes=await frame3.childFrames()
        await childframes[0].locator("//*[@id='i5']/div[3]/div").check()
        await page.waitForTimeout(5000)
    }

)