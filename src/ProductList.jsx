import Product from "./product";



const ProductList = () =>{

const products =[
{
image:"",
title:"Black hoodie",
description:"Plain black Hoodie",
price:16,
quantity:25,
category:"Men",
discounted: "14",
},
{
    image:"",
    title:"Rainbow Shorts",
    description:"Shorts that come in a rainnow pattern",
    price:30,
    quantity:55,
    category:"Women",
},
{
    image:"",
    title:"crocs",
    description:"All new crocs",
    price:42,
    quantity:20,
    category:"Kids",
},
{
    image:"",
    title:"Blue Jeans",
    description:"Plain Blue Jeans",
    price:86,
    quantity:64,
    category:"Women",
    discounted:"50",
},
{
    image:"",
    title:"Hoodie with Roses",
    description:"Hoodie with Roses",
    price:15,
    quantity:5,
    category:"Men",
},
{
    image:"",
    title:"Red high heels",
    description:"Fancy high heels",
    price:65,
    quantity:86,
    category:"Women",
},

];
const mappedProducts = products.map(item =>{
    return <Product image={item.image} title={item.title} description={item.description} price={item.price} quantity={item.quantity} category={item.category}/>
});

const productsFilter = products.filter(filter => quantity >= 30);



return(
    <div>
        <h1></h1>
        <p></p>
        <p></p>
        {discounted && <p>PRICE IS DISCOUNTED</p>}
    </div>
);




};

    return(
<>

{mappedProducts}
{/* <Product title="1" />
<Product title="2"/>
<Product title="3"/>
<Product title="4"/>
<Product title="5"/>
<Product title="6"/> */}


</>
    );





export default ProductList