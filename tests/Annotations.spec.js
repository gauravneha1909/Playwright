import {test,expect} from '@playwright/test'

//Annotations
//only
test.only('test1',async({page})=>{console.log('This is test 1')})
//skip
test.skip('test2',async({page})=>{console.log('This is test 2')})
//skip based on value
test('test3',async({page,browserName})=>
    {console.log('This is test 3')
        if (browserName==='Chromium') {test.skip()}
    }
)
//Fixme- Will be used to skip test cases with known issues. Similar to above but it will always skip Fixme is part of test block tag is there
test('test4',async({page})=>{
    test.fixme()
    console.log('This is test 4')
})
//Fail- when you expect a test case to fail. test case will fail if assertion in test case block is passing. will only pass if assertions fail
test('test5',async({page})=>{
    test.fail()
    console.log('This is test 5')
    expect(1).toBe(1)
})
//Fail-Conditional. This will only consider test fail expectation when the conditions are met. Otherwise, test will skip this fail expectation and will work as is
test('test6',async({page,browserName})=>{
    if (browserName==='chromium')
    {test.fail()}
    console.log('This is test 6')
    expect(1).toBe(1)
})
//Slow- to increase the default test time for a specific test case by 3X. Default is 30 secs for all test cases
test.slow('test7',async({page})=>{
    console.log('This is test 7')
    await page.goto('https://www.demoblaze.com/index.html')
})