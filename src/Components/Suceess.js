// Imported Required Files
import React,{useContext}  from 'react';
import {Link,useParams} from 'react-router-dom'
import {rentContext} from '../App';
function Success(){
    // useParams for get id from url
    let {id} = useParams();

    return <>
    <div>
            <h2 className='text-center mt-5' style={{color:"green"}}>Thanks! Your Order Is Confirm</h2>
            <p className='blockquote text-center mt-3' style={{fontWeight:"bold"}}>Order ID : {id}</p>
    
            <Link to="/Help" className='mt-4 d-flex justify-content-center  text-decoration-none'>
            <button className='btn btn-outline-success text-light'>Continue For Renting</button>
            </Link>
        </div>
</>
}, 
function Success(){
  // Store context inside the context variable
  let context = useContext(rentContext);

  // Decalre State for Cart Qty value
  let [value, setValue] = useState(context.cart);
  let [anothervalue, anothersetValue] = useState([]);
  
  // Declare variable for set the cartPrice
  let cartPrice = 0;

  // Write a function to remove product from cart
  let handleRemove = (e) => {
    context.cart.splice(context.cart.indexOf(e), 1);
    context.setCartValue(context.cart.length);
  };

  // Write a function to decrease the qty 
  let handleMinus = (e) => {
    let index = context.cart.findIndex((c) => c.name === e.name);
    let result = (value[index].quality -= 1)
    if (result < 1) {
      alert("Minimum Qty Is 1");
      value[index].quality = 1;
    }
    anothersetValue(result)
  };

  // Write a function to increase the qty
  let handlePlus = (e) => {
    let index = context.cart.findIndex((c) => c.name === e.name);
    let result = (value[index].quality += 1)
    if(result > 5){
      alert("Maximum Qty is 5");
      value[index].quality = 5;
    }
    anothersetValue(result);
  };


  return (
    <div className="px-3">
      {/* If Cart length is 0 than Condition will be true */}
      {context.cart.length > 0 ? (
        <>
        <div className="d-flex" style={{display: 'grid',gridTemplateColumns:"2fr 2fr 2fr 2fr",justifyContent:"center"}}>
          {/* Write event loop to get all cart item */}
          {context.cart.map((e, i) => {

            // Set the Total price
            cartPrice = cartPrice + Number(e.price * e.quality);
            return (
              <>
                <div>
</>
}
export default Success;
