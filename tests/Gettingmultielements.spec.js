import { test, expect } from '@playwright/test';

test('LocateMultipleElements', async ({ page }) => {
    // Navigate to the demo website
    await page.goto('https://www.demoblaze.com/index.html');

    // Find all anchor elements on the page
    const links = await page.$$('a');

    // Output the number of links found
    console.log('Number of links:', links.length);

    //get text from all the links 
    for(const link of links)

        {const linktext=await link.textContent()
            console.log(linktext)
        }

        const products = await page.$$("//div[@id='tbodyid']//div/h4/a");

    // Output the number of products found
    console.log('Number of products:', products.length);

    //get text from all the products 
    for(const product of products)

        {const productname=await product.textContent()
            console.log(productname)
        }
    // Close the page after the test completes
    await page.close();
});
