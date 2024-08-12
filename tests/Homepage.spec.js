const {test, expect}= require ('@playwright/test') 

test('Homepage',async({page})=> 
    
    {
       await page.goto("https://www.demoblaze.com/index.html")

       const pagetitle= await page.title()

       console.log('Page title is', pagetitle)

       await expect(page).toHaveTitle('STORE')

       await expect(page).toHaveURL("https://www.demoblaze.com/index.html")
        
       await page.close()



    }


)


//async-await is to handle the async behavior of JS and to make sure that test execution happens in designated order or to handle JS promise. page.goto will wait until the page is loaded
//{test,exopect} are imported modules required for test implementation
//page is a fixture that contains functions that are required for interacting with a webpage