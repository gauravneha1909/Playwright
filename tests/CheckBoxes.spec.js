import {test,expect} from '@playwright/test'
import exp from 'constants'

test('Checkbox', async({page})=>


{

await page.goto('https://the-internet.herokuapp.com/checkboxes')
await expect(page.locator('input:nth-child(1)')).not.toBeChecked()
await expect(page.locator('input:nth-child(3)')).toBeChecked()
await page.locator('input:nth-child(1)').check() //check one checkbox
await expect(page.locator('input:nth-child(1)')).toBeChecked()
await expect(page.locator('input:nth-child(3)')).toBeChecked()
await page.locator('input:nth-child(3)').uncheck() //uncheck one checkbox
await expect(page.locator('input:nth-child(1)')).toBeChecked()
await expect(page.locator('input:nth-child(3)')).not.toBeChecked()
await page.locator('input:nth-child(1)').check() //Check multiple checkboxes
await page.locator('input:nth-child(3)').check()
await expect(page.locator('input:nth-child(1)')).toBeChecked()
await expect(page.locator('input:nth-child(3)')).toBeChecked()
await page.locator('input:nth-child(1)').uncheck() //uncheck multiple checkboxes
await page.locator('input:nth-child(3)').uncheck()
await expect(page.locator('input:nth-child(1)')).not.toBeChecked()
await expect(page.locator('input:nth-child(3)')).not.toBeChecked()
await page.locator('input:nth-child(n)').first().check() //Checking first check box
await expect(page.locator('input:nth-child(n)').first()).toBeChecked()
await page.locator('input:nth-child(n)').last().check() //Checking last checkbox
await expect(page.locator('input:nth-child(n)').last()).toBeChecked()
await page.locator('input:nth-child(n)').nth(0).check() //Checking checkbox using index value
await expect(page.locator('input:nth-child(n)').nth(0)).toBeChecked()
await page.locator('input:nth-child(n)').nth(1).check()
await expect(page.locator('input:nth-child(n)').nth(1)).toBeChecked()


//Checking using array and for loop
await page.goto('https://the-internet.herokuapp.com/checkboxes')

const checkboxes = page.locator('input[type="checkbox"]');
    const count = await checkboxes.count(); // Get the number of checkboxes

    for (let i = 0; i < count; i++) {
        await checkboxes.nth(i).check(); // Check each checkbox
        await expect(checkboxes.nth(i)).toBeChecked(); // Verify it is checked
    }

    // Optional: Uncheck all checkboxes
    for (let i = 0; i < count; i++) {
        await checkboxes.nth(i).uncheck(); // Uncheck each checkbox
        await expect(checkboxes.nth(i)).not.toBeChecked(); // Verify it is unchecked
    }

    await page.close()

}

)