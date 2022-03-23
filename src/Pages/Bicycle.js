import React, { useContext } from "react";
import { rentContext } from "../App";
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

function Bicycle() {
  let data = [
    {
      img: "https://cdn.shopify.com/s/files/1/0592/9438/4290/products/B09FGJMC6D.MAIN_2048x2048.jpg?v=1640768773",
      name: "MOUNTAIN BIKE - UT5000S27.5",
      price: "250",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0592/9438/4290/products/UT6000A29_d9578906-1612-42cf-8067-e6cd0515ba22_2048x2048.jpg?v=1643118188",
      name: "MOUNTAIN BIKE - UT6000A29",
      price: "250",
    },
    {
      img: "https://i0.wp.com/oneninemall.com/wp-content/uploads/2021/12/7-69-1.png?fit=1000%2C1000&ssl=1",
      name: "Electric Bike 250W Motor Powered",
      price: "500",
    },
    {
      img: "https://d2f9uwgpmber13.cloudfront.net/public/uploads/mobile/f6c43fc22fdc36b911e475970a21b12d",
      name: "TOPGUN 26T - WHITE",
      price: "200",
    },
    {
      img: "https://i0.wp.com/oneninemall.com/wp-content/uploads/2021/12/812jJjvz-QS._SL1500.jpg?fit=1500%2C1500&ssl=1",
      name: "NINETY ONE Leopard 27.5T 21 Speed Hybrid Bike",
      price: "350",
    },
    {
      img: "https://i0.wp.com/oneninemall.com/wp-content/uploads/2021/12/6-70-1-1.png?fit=1000%2C1000&ssl=1",
      name: "Road Bike 700C Wheels 21 Speed Disc Brake Mens or Womens Bicycle Cycling",
      price: "300",
    },
    {
      img: "https://www.walkontek.com/image/cache/catalog/1cycle/GT524ABLACKBLUE/FRONT-compressed-1000x1000.jpg",
      name: "Siyibo GT-524 Macwheel MTB Cycle 26T Shimano Gears 21 Speed Dual Disc Brakes",
      price: "400",
    },
    {
      img: "https://m.media-amazon.com/images/I/71S5CrAHymS._SL1280_.jpg",
      name: "Geekay Hashtag 27.5t 29t",
      price: "500",
    },
  ];

  let context = useContext(rentContext);

  return (
    <div>
      <div style={{display: "grid",gridTemplateColumns:" 2fr 2fr 2fr 2fr",gridTemplateColumns: "repeat(auto-fill, 475px)"}}>
        {data.map((e, i) => {
          return (
            <div className="text-center m-5 bg-white p-3 rounded" key={i}>
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

export default Bicycle;
