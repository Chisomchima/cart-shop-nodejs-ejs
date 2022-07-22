const mongoose = require("mongoose");
const Category = require('../models/Category'); 

let arrayItem = [
   
{
        title: "Men",
        param: "Men",
        img: 'https://assets.adidas.com/images/w_450,f_auto,q_auto/04953589eefe4d4fb3c7ae9901266891_9366/HT2099_000_plp_model.jpg'
},      
{
    title: "Women",
    param: "Women",
    img: 'https://assets.adidas.com/images/w_450,f_auto,q_auto/9c17db035f2d4ec09976ae8800ca615e_9366/HM2900_21_model.jpg'
},
{
    title: "Latest",
    param: "Latest",
    img: 'https://assets.adidas.com/images/w_450,f_auto,q_auto/5fe93efae8ee4fa7a285ae370134c365_9366/GV8743_00_plp_standard.jpg'
},

]


async function seeder(){

let itemLength = arrayItem.length - 1;

arrayItem.map(async (item, i)=>{

const newProduct = new Category(item);
await newProduct.save();
console.log(`done inserting ${itemLength} ${i}`)

    if (itemLength == i){
        console.log(`done inserting ${itemLength} ${i}`)
        process.exit();
    }
})
   
}



mongoose
.connect('mongodb://localhost:27017/cart-shop', 
{
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(async() => {
await seeder();
})
.catch((err) => {
console.log(err);
});









