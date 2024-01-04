import React, { useContext } from "react";
import { rentContext } from "../App";
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

function R2E-800 RENTAL WEBSITE() {
  let data = [
    {
      img: "https://cs1.socpanel.com/cs1/project_images/KuS0V0SI8euhIGOUiUgXgrNLokhKPAl80sWr9Ldw.jpg",
      name: "R2E-800 RENTAL WEBSITE ",
      price: "800",
    },
  ];

  let context = useContext(rentContext);

  
  return (
    <div>
      <div  style={{display: "grid",gridTemplateColumns:" 2fr 2fr 2fr 2fr",gridTemplateColumns: "repeat(auto-fill, 475px)"}}>
        {data.map((e, i) => {
          return (
            <div className="text-center m-5 bg-white p-3 rounded" key={i}>
              <img  src={e.img} alt={e.name} style={{height:"250px",width:"350px"}}></img>
              <br />
              <br />
              <span className="blockquote" style={{ fontSize: "18px"}}>
                {e.name}
              </span>
              <hr />
              <div className="d-flex flex-direction-row">
                <p className="pt-2" style={{color:"black",fontSize:"20px"}}>&#x20B9;{e.price} / day</p>
                <button
                  className="btn btn-outline-success ml-auto mt-2"
                  style={{
                    marginRight: "15px",
                    width: "110px",
                    height: "40px",
                  }}
                  onClick={() => {
                    let print = context.cart.findIndex(
                      (c) => c.name === e.name
                    );
                    if (print === -1) {
                      e["quality"] = 1;
                      context.cart.push(e);
                      context.setCartValue(context.cart.length);
                    } else {
                      context.cart[print]["quality"] += 1;
                    }
                  }}
                >
                  <ShoppingCartCheckoutIcon/>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default R2E-800 RENTAL WEBSITE;
