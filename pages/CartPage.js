exports.CartPage=class CartPage{
constructor(page)
{
this.page=page
this.noOfProducts='//tbody[@id="tbodyid"]/tr/td[2]'
}
async checkProductIncart(productName)
{
const productsInCart=await this.page.$$(this.noOfProducts)
for (const product of productsInCart)
{
console.log(await product.textContent())
if (productName===await product.textContent())
    {return true
     break   
    }
}
}
}