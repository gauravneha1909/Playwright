import {test,expect} from '@playwright/test'

test('Singlefileupload',async({page})=>

{
await page.goto('https://cgi-lib.berkeley.edu/ex/fup.html')
await page.waitForSelector('[name="upfile"]')
await page.locator('[name="upfile"]').setInputFiles('tests/UploadFiles/test1.pdf')
await page.locator('[name="note"]').fill('The file to be uploaded')
await page.locator('[type="submit"]').click()//This step will fail as click is navigating to a diff page.
await page.waitForTimeout(5000)
}
)

test.only('Multiplefileupload',async({page})=>

    {
    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php')
    await page.locator('#filesToUpload').setInputFiles(['tests/UploadFiles/test1.pdf','tests/UploadFiles/test2.pdf'])
    await page.waitForTimeout(3000)
    expect(await page.locator('#fileList li:nth-child(1)')).toHaveText('test1.pdf')
    expect(await page.locator('#fileList li:nth-child(2)')).toHaveText('test2.pdf')
    await page.waitForTimeout(3000)

    //removing the files
    await page.locator('#filesToUpload').setInputFiles([])
    expect(await page.locator('#fileList li:nth-child(1)')).toHaveText('No Files Selected')
    await page.waitForTimeout(3000)
    }
    )