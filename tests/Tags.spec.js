import {test,expect} from '@playwright/test'

//Tags
test('test1@Sanity',async({page})=>{console.log('This is test 1')})
test('test2@Sanity',async({page})=>{console.log('This is test 2')})
test('test3@Reg',async({page})=>{console.log('This is test 3')})
test('test4@Reg',async({page})=>{console.log('This is test 4')})
test('test5@Sanity@Reg',async({page})=>{console.log('This is test 5')})