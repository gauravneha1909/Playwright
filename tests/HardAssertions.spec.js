import {test, expect} from '@playwright/test'
import express from 'express'

test('Hard Assertions', async({page})=>
    
    {
        await page.goto('https://demo.nopcommerce.com/register')
        await expect (page).toHaveURL('https://demo.nopcommerce.com/register')
        await expect (page).toHaveTitle('nopCommerce demo store. Register')

        const logo = await page.locator('.header-logo')
        await expect (logo).toBeVisible()

        const searchbox = page.locator('#small-searchterms')
        await expect (searchbox).toBeEnabled()

        //similarly we can do toBeDisabled()

        const maleradiobutton =page.locator('#gender-male')
        await maleradiobutton.click()
        expect(maleradiobutton).toBeChecked()

        const Newsletter = await page.locator('#Newsletter')

        await expect(Newsletter).toBeChecked()

        const registerbutton = await page.locator('#register-button')

        await expect(registerbutton).toHaveAttribute('type','submit')

        const pagetitle= await page.locator('.page-title h1')

        await expect(pagetitle).toHaveText('Register')

        await expect(pagetitle).toContainText('iste')

        const email = await page.locator('#Email')

        await email.fill('textinput@test.com')
        await expect(email).toHaveValue('textinput@test.com')

        const months = await page.locator('select[name="DateOfBirthMonth"] option')
        await expect(months).toHaveCount(13)



    }



)