const mongoose = require("mongoose");
const Product = require('../models/Product'); 

let arrayItem = [
   
{
        title: "Black Kicks",
        img: "https://assets.adidas.com/images/w_450,f_auto,q_auto/5fe93efae8ee4fa7a285ae370134c365_9366/GV8743_00_plp_standard.jpg",
        categories: "Men",
        price: 25000,

},
{
    title: "Black tights",
    img: "https://www.adidas.com/ng/how-we-do-7%2F8-tights/FM7643.html",
    categories: "women",
    price: 20000,

},
{
    title: "Sweat Shorts",
    img: "https://assets.adidas.com/images/w_450,f_auto,q_auto/3439e0e380c943adb8f5ae8800eb08a4_9366/HM2872_21_model.jpg",
    categories:"Women",
    price: 27000,

},
{
    title: "Crop Top",
    img: "https://assets.adidas.com/images/w_450,f_auto,q_auto/0210e3d23d3347f585e8ae8800c7ec9c_9366/HG4366_000_plp_model.jpg",
    categories:"Women",
    price: 7000,
},
{
    title: "Cropped Hoodie",
        img: "https://assets.adidas.com/images/w_450,f_auto,q_auto/5063649719ce4de9b88aadf800a36ad2_9366/HE6885_000_plp_model.jpg",
        categories:"Women",
        price: 21000,

},
{
    title: "Black Tee",
    img: "https://assets.adidas.com/images/w_450,f_auto,q_auto/5505b833633241dfad0eae6100c0e4ba_9366/HD4803_HM1.jpg",
    categories: "Men",
    price: 20000,

},
{
    title: "Classic Hoodie",
    img: "https://assets.adidas.com/images/w_450,f_auto,q_auto/1d9f69696af5410ca65bae8900208c40_9366/HK7379_000_plp_model.jpg",
    categories: ["Men", "Latest"],
    price: 30000,
},
{
    title: "Black Kicks",
    img: "https://assets.adidas.com/images/w_450,f_auto,q_auto/828b7d729211473e8127ae8c010f4aa8_9366/HL2217_000_plp_model.jpg",
    categories: ["Men", "Latest"],
    price: 35000,
}
]


async function seeder(){

let itemLength = arrayItem.length - 1;

arrayItem.map(async (item, i)=>{

const newProduct = new Product(item);
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









