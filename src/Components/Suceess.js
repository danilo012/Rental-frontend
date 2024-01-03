// Imported Required Files
import React, { useContext,useState } from "react";
import { rentContext } from "../App";
import { Link } from "react-router-dom";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

function Cart() {

  // Store context inside the context variable
  let context = useContext(rentContext);

  // Decalre State for Cart Qty value
  let [value, setValue] = useState(context.cart);
  let [anothervalue, anothersetValue] = useState([]);
  
  // Declare variable for set the cartPrice
  let cartPrice = 0;

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
                  <div
                    className=" text-center m-5 bg-white p-3"
                    key={i}
                  >
                    <img  style={{height:"250px",width:"350px"}} src={e.img} alt={e.name}></img>
                    <br />
                    <br />
                    <span className="blockquote" style={{ fontSize: "18px" }}>
                      {e.name}
                    </span>
                    <hr />
                    <div className="d-flex flex-direction-row">
                      <p className="lead pt-2">&#x20B9;{e.price} / day</p>
                      <button
                        className="btn btn-outline-danger ml-auto mt-2"
                        style={{
                          marginRight: "15px",
                          width: "170px",
                          height: "40px",
                        }}
                        onClick={() => {
                          handleRemove(e);
                        }}
                      >
                        Remove from Cart
                      </button>
                    </div>
                    <br />
                    <div>
                      <br></br>
                      <button
                        className="btn btn-outline-danger mr-2"
                        onClick={() => {
                          handleMinus(e);
                        }}
                      >
                        <RemoveIcon />
                      </button>
                      Qty : {e.quality}
                      <button
                        className="btn btn-outline-success ml-2"
                        onClick={() => {
                          handlePlus(e);
                        }}
                      >
                        <AddIcon />
                      </button>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
          </div>
          <div className="mt-5">
            <div className="text-center" style={{fontSize:"20px"}}>Total Pay : {cartPrice}</div>
            <Link to="/placeorder" style={{textDecoration:"none"}}>
              <button
                className="glow-on-hover text-light d-flex m-auto mt-3 justify-content-center pt-2"
                onClick={() => {
                  context.setCart([]);
                  context.setCartValue(0);
                }}
              >
                Place Order
              </button>
            </Link>
          </div>
        </>
      ) : (
        <>
        
          <h4 className="text-center mt-5">Cart Is Empty!</h4>
          <Link to="/dashboard" className="d-flex mt-3" style={{justifyContent:"center"}}>
            <button className="btn btn-primary">Choose For a Rent</button>
          </Link>
        </>
      )}
    </div>
  );
}

export default Cart;
