import {test,expect} from '@playwright/test'
import {LoginPage} from '../pages/LoginPage.js'
import {HomePage} from '../pages/HomePage.js'
import { CartPage } from '../pages/CartPage.js'


test('WithPOM',async({page})=>
    {
    //Login Page elements and methods will be referenced from login page class
    const Login= new LoginPage(page)
    await Login.gotoLoginpage()
    await Login.login('pavanol','test@123')
    await page.waitForTimeout(5000)
    //Home Page elements and methods will be referenced from Home page class
    const home= new HomePage(page)
    await home.addProductToCart('HTC One M9')
    await page.waitForTimeout(5000)
    await home.gotocart()
    //Cart Page elements and methods will be referenced from Cart page class
    const cart=new CartPage(page)
    await page.waitForTimeout(3000)
    const prodstatus=await cart.checkProductIncart('HTC One M9')
    expect(await prodstatus).toBe(true)
    }
    )