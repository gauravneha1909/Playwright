import {test,expect} from '@playwright/test'
import exp from 'constants'

test('dropdown1', async({page})=>
    
    {
//bootstap dropdown by label

await page.goto('https://testautomationpractice.blogspot.com/')
await page.locator('#country').selectOption({label:'India'})
await expect(page.locator('#country')).toHaveValue('india')

//bootstap dropdown by visible text

await page.goto('https://testautomationpractice.blogspot.com/')
await page.locator('#country').selectOption('India')
await expect(page.locator('#country')).toHaveValue('india')

//bootstap dropdown by dropdown value code
await page.locator('#country').selectOption({value:'uk'})
const country=await page.locator('#country').locator('option:checked').textContent()
await expect (country).toBe('United Kingdom')

//bootstap dropdown by index
await page.locator('#country').selectOption({index:1})
await expect(page.locator('#country')).toHaveValue('canada')

//bootstap dropdown without locator
await page.selectOption('#country',{index:1})
await expect(page.locator('#country')).toHaveValue('canada')

//Assert number of options in dropdown

const options =await page.locator('#country option') //Concatenating option will track list of options
expect(options).toHaveCount(10)

//Checking presence of an option

const content=await page.locator('#country').textContent()
await expect(content.includes('India')).toBeTruthy()


    // Checking presence of an option using loop
    const content2 = await page.$$('#country option'); // Get all option elements
    let status = false;
    for (const option of content2) {
        const optionText = await option.textContent(); // Get the text of each option
        if (optionText.includes('France')) {
            status = true; // Set status to true if 'France' is found
            break; // Exit loop if found
        }
    }
    expect(status).toBeTruthy(); // Assert that status is true

        // Selecting with for loop
        const content3 = await page.$$('#country option'); // Get all option elements
        for (const option of content3) 
            
            {
            const optionText1 = await option.textContent(); // Get the text of each option
            if (optionText1.includes('France')) 
                
            {   
                await page.selectOption('#country',optionText1)

                break; // Exit loop if found
            }
        }

        await expect(page.locator('#country')).toHaveValue('france')



}


)