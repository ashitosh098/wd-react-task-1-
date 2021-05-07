import './App.css'; 
import Card from './card'; // importing Card component from card.js file

function App() {
  // creating array to store information of card that is to be displayed
  let pricedata =[
//object of free plan
    {
      plan:"Free",
    currency:"$",
    price:0,
    period:"month",
    offers:[
      {
        name:"Single User",
        isEnabled:true
      },
      {
        name:"5GB Storage",
        isEnabled:true
      },
      {
        name:"Unlimited Public Projects",
        isEnabled:true
      },
      {
        name:"Community Access",
        isEnabled:true
      },
      {
        name:"Unlimited Private Projects",
        isEnabled:false
      },
      {
        name:"Dedicated Phone Support",
        isEnabled:false
      },
      {
        name:"Free Subdomain",
        isEnabled:false
      },
      {
        name:"Monthly Status Reports",
        isEnabled:false
      }
    ]

    },
    //object of plus plan
    {
      plan:"Plus",
    currency:"$",
    price:9,
    period:"month",
    offers:[
      {
        name:"5 Users",
        isEnabled:true
      },
      {
        name:"50GB Storage",
        isEnabled:true
      },
      {
        name:"Unlimited Public Projects",
        isEnabled:true
      },
      {
        name:"Community Access",
        isEnabled:true
      },
      {
        name:"Unlimited Private Projects",
        isEnabled:true
      },
      {
        name:"Dedicated Phone Support",
        isEnabled:true
      },
      {
        name:"Free Subdomain",
        isEnabled:true
      },
      {
        name:"Monthly Status Reports",
        isEnabled:false
      }
    ]

    },
// object of pro plan
    {
      plan:"Pro",
    currency:"$",
    price:49,
    period:"month",
    offers:[
      {
        name:"Unlimited User",
        isEnabled:true
      },
      {
        name:"150GB Storage",
        isEnabled:true
      },
      {
        name:"Unlimited Public Projects",
        isEnabled:true
      },
      {
        name:"Community Access",
        isEnabled:true
      },
      {
        name:"Unlimited Private Projects",
        isEnabled:true
      },
      {
        name:"Dedicated Phone Support",
        isEnabled:true
      },
      {
        name:"Unlimited Free Subdomain",
        isEnabled:true

      },
      {
        name:"Monthly Status Reports",
        isEnabled:true
      }
    ]

    }
    
  ]

  return (
    //price cart page
    <>
<section class="pricing py-5">
<div class="container">
<div class="row">
  { 
  //applying map method on pricedata array 
  pricedata.map((obj)=>
   {
     return (
       // using card tag for present object of pricedata array
     <Card data={obj}></Card> 
     )
   }
   )
  }

  </div>
  </div>
</section>
</>
  );
}

export default App;
