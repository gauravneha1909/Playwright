import {test,expect} from '@playwright/test'

//we use request fixture for API testing

var userid
test('Get Users',async({request})=>
{
const response=await request.get('https://reqres.in/api/users?page=2')
console.log(await response.json())
expect(response.status()).toBe(200)

})
test('Create User',async({request})=>{
const response=await request.post('https://reqres.in/api/users',
    {
        headers:{"Accept":"application/json"},
        data:{"name":"Gaurav","job":"Learner"}
    }
)

console.log(await response.json())
expect(response.status()).toBe(201)
var res=await response.json()
userid=res.id
})
test('Update User',async({request})=>
    {
        const response=await request.put('https://reqres.in/api/users/'+userid,
            {
                headers:{"Accept":"application/json"},
                data:{"name":"Gaurav","job":"Learnerupdated"}
            }
        )
        
        console.log(await response.json())
        expect(response.status()).toBe(200)
    }
)
test('Delete Users',async({request})=>
{
    const response=await request.delete('https://reqres.in/api/users/'+userid)
    expect(response.status()).toBe(204)

})