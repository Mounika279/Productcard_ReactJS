import React from "react"
import logo from "./logo.jpg"

function Card(){
  

 const products=[
    {
      image:"https://cdn.quicksell.co/-NBHQDEfrlCb18licQF_/products_400/-NWljjzZzgwuIkrddhIV.jpg",
      title:"DIAMONDS",
      price:"₹6,39,900"
    },
    {
      image:"https://cdn.quicksell.co/-NBHQDEfrlCb18licQF_/products_400/-NWljjzZzgwuIkrddhIi.jpg",
      title:"DIAMONDS",
      price:"₹6,83,466",    
    },
    {
      image:"https://cdn.quicksell.co/-NBHQDEfrlCb18licQF_/products_400/-NWljjzZzgwuIkrddhIr.jpg",
      title:"DIAMONDS",
      price:"₹6,02,378",
    },
    {
      image:"https://cdn.quicksell.co/-NBHQDEfrlCb18licQF_/products_400/-NWljjzZzgwuIkrddhJ9.jpg",
      title:"DIAMONDS",
      price:"₹6,03,743",
    },
    {
      image:"https://cdn.quicksell.co/-NBHQDEfrlCb18licQF_/products_400/-NWljjzZzgwuIkrddhJP.jpg",
      title:"DIAMONDS",
      price:"₹2,31,350",
    },
    {
      image:"https://cdn.quicksell.co/-NBHQDEfrlCb18licQF_/products_400/-NWljjzZzgwuIkrddhJi.jpg",
      title:"DIAMONDS",
      price:"₹11,42,491",
    },
    {
      image:"https://cdn.quicksell.co/-NBHQDEfrlCb18licQF_/products_400/-NWljjzZzgwuIkrddhJZ.jpg",
      title:"DIAMONDS",
      price:"₹10,82,881",
    },
    {
      image:"https://cdn.quicksell.co/-NBHQDEfrlCb18licQF_/products_400/-NWljjzZzgwuIkrddhJT.jpg",
      title:"DIAMONDS",
      price:"₹7,84,152",
    },
    {
      image:"https://cdn.quicksell.co/-NBHQDEfrlCb18licQF_/products_400/-NWljjzZzgwuIkrddhJV.jpg",
      title:"DIAMONDS",
      price:"₹8,76,778",
    },
    {
      image:"https://cdn.quicksell.co/-NBHQDEfrlCb18licQF_/products_400/-NWljjzZzgwuIkrddhJM.jpg",
      title:"DIAMONDS",
      price:"₹1,91,456",
    },
    {
      image:"https://cdn.quicksell.co/-NBHQDEfrlCb18licQF_/products_400/-NWljjzZzgwuIkrddhJG.jpg",
      title:"DIAMONDS",
      price:"₹2,90,681",
    },
    {
      image:"https://cdn.quicksell.co/-NBHQDEfrlCb18licQF_/products_400/-NWljjzZzgwuIkrddhJB.jpg",
      title:"DIAMONDS",
      price:"₹3,05,931",
    },
    {
      image:"https://cdn.quicksell.co/-NBHQDEfrlCb18licQF_/products_400/-NWljjzZzgwuIkrddhJ8.jpg",
      title:"DIAMONDS",
      price:"₹6,34,440",
    },
    {
      image:"https://cdn.quicksell.co/-NBHQDEfrlCb18licQF_/products_400/-NWljjzZzgwuIkrddhJ-.jpg",
      title:"DIAMONDS",
      price:"₹13,19,228",
    },
    {
      image:"https://cdn.quicksell.co/-NBHQDEfrlCb18licQF_/products_400/-NWljjzZzgwuIkrddhI_.jpg",
      title:"DIAMONDS",
      price:"₹17,82,996",
    },
  ];

  const [aa,pp]=products



const info=products.map((val,ind)=>{
  return(
    
   <span className="product">
   
<img src={val.image} alt={aa+ind}width="300" height="300"></img>
<h3>{val.title}</h3>
<h2>{val.price}</h2>
<h4>ADD TO CART</h4>
</span>   
  
  );
});
//jsx
return(
  <span>
    
        {info}
       
        <img src={logo} alt="Logo" className="logo" />
        <h5>Manepally Jewellers</h5>
  </span>
)
}
export default Card