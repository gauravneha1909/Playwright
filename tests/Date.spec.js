import{test,expect} from '@playwright/test'

//date picker by text
test('DatePickerbytext',async({page})=>
    
    {
        await page.goto('https://testautomationpractice.blogspot.com/')
        await page.locator('#datepicker').fill('06/09/2023')
        await expect(page.locator('#datepicker')).toHaveValue('06/09/2023')


        await page.waitForTimeout(5000)
    }
)

//date picker by looping to year/month/date
test('DatePickerusingselect', async ({ page }) => {
    const targetYear = '2022';
    const targetMonth = 'August';
    const targetDate = '21';
    
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.click('#datepicker');
    while (true) {
        const currentYear = await page.locator('.ui-datepicker-year').textContent();
        const currentMonth = await page.locator('.ui-datepicker-month').textContent();
        // Check if we have reached the correct year and month
        if (currentYear === targetYear && currentMonth === targetMonth) {
            const dates = await page.$$('.ui-state-default');
            for (const dt of dates) {
                if (await dt.textContent() === targetDate) {
                    await dt.click();  // Select the date
                    break;
                }
            }
            break; // Exit the loop after selecting the date
        }

        // Determine whether to go to the next or previous month
        const currentDate = new Date();
        const currentYearNum = parseInt(currentYear);
        const currentMonthNum = new Date(Date.parse(currentMonth + " 1, " + currentYearNum)).getMonth() + 1; // Months are 0-based in JS
        const targetYearNum = parseInt(targetYear);
        const targetMonthNum = new Date(Date.parse(targetMonth + " 1, " + targetYearNum)).getMonth() + 1; // Months are 0-based in JS
        if (currentYearNum > targetYearNum || (currentYearNum === targetYearNum && currentMonthNum > targetMonthNum)) {
            // If the current date is later than the target date, go to the previous month
            await page.locator('[title="Prev"]').click();
        } else {
            // If the current date is earlier than the target date, go to the next month
            await page.locator('[title="Next"]').click();
        }
    }
    await page.waitForTimeout(5000); // Wait for 5 seconds (for demonstration)
});

//date picker by selecting date
test.only('DatePickerbylocatingdate', async ({ page }) => {

    const date='24'
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.click('#datepicker');
    await page.click(`//a[@class='ui-state-default'][text()='${date}']`);//mind the quote is done using till sign usually below escape button
    await page.waitForTimeout(5000); // Wait for 5 seconds (for demonstration)
});

