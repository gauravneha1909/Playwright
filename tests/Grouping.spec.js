import{test,expect} from '@playwright/test'

test.beforeAll(()=>{console.log('This is before All hook')})
test.afterAll(()=>{console.log('This is after All hook')})
test.beforeEach(()=>{console.log('This is before each hook')})
test.afterEach(()=>{console.log('This is after each hook')})

//Grouping test cases using describe block
test.describe('Group1',()=>
{
test('Test1',async({page})=>{console.log('This is test case 1')})
test('Test2',async({page})=>{console.log('This is test case 2')})
}
)

test.describe('Group2',()=>
{test('Test3',async({page})=>{console.log('This is test case 3')})
test('Test4',async({page})=>{console.log('This is test case 4')})
}
)
// .only and .skip will also work with test.describe for e.g. test.describe.skip, test.describe.only