import{test,expect} from '@playwright/test'

test.skip('HandlingTable',async({page})=>
    
    {
    await page.goto('https://testautomationpractice.blogspot.com/')
    const table= await page.locator('#productTable')
    const columns= await table.locator('thead tr th')
    console.log(await columns.count())
    await expect(await columns.count()).toBe(4)

    const rows= await table.locator('tbody tr')
    console.log(await rows.count())
    await expect(await rows.count()).toBe(5)

    //Seelct checkbox for product4 using .filter()
    const matchedrow= rows.filter({
        has: page.locator('td'),
        hasText: 'Product 4'
    })
    await matchedrow.locator('input').check()

    //Select multiple products by reusable function in JS. assertion is also written as part of function

    await selectproduct(rows,page,'Product 3')
    await selectproduct(rows,page,'Product 2')

    await page.waitForTimeout(5000)
    }
)

test('Pagination',async({page})=>
    
    {
        //print all prod details
    await page.goto('https://testautomationpractice.blogspot.com/')
    const table= await page.locator('#productTable')
    const columns= await table.locator('thead tr th')
    const rows= await table.locator('tbody tr')

        //print data from first page
    for (let i=0;i<await rows.count();i++)

        {
            const currentrow=rows.nth(i)
            const cells=rows.locator('td')

            for (let j=0;j<await cells.count()-1;j++)

                {
                    console.log(await cells.nth(j).textContent())

                }

        }

        //print data from all pages- pagination
        
        const pages= await page.locator('.pagination li a')
        const pagecount=await pages.count()
        console.log(pagecount)

        for (let p=0; p<pagecount;p++)

            {
                if (p>0)
                {
                    await pages.nth(p).click()

                }

                for (let i=0;i<await rows.count();i++)

        {
            const currentrow=rows.nth(i)
            const cells=rows.locator('td')

            for (let j=0;j<await cells.count()-1;j++)

                {
                    console.log(await cells.nth(j).textContent())

                }

        }

         await page.waitForTimeout(3000)

            }

    

    await page.waitForTimeout(5000)
    }
)

//Reusable function
async function selectproduct(rows,page,name)
{
const matchedrow= rows.filter({
        has: page.locator('td'),
        hasText: name
    })
await matchedrow.locator('input').check()
await expect(matchedrow.locator('input')).toBeChecked()
}