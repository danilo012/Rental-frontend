import React, { useContext } from "react";
import { rentContext } from "../App";
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

function Evbike() {
  let data = [
    {
      img: "https://media.zigcdn.com/media/model/2020/Jun/tvs-iqube_360x240.jpg",
      name: "TVS Iqube Electric",
      price: "1000",
    },
    {
      img: "https://media.zigcdn.com/media/model/2021/Apr/ather-450x-asdd_360x240.jpg",
      name: "Ather 450x",
      price: "750",
    },
    {
      img: "https://media.zigcdn.com/media/model/2020/Feb/bajaj-chetak-right-side-view_360x240.jpg",
      name: "Bajaj Chetak",
      price: "500",
    },
    {
      img: "https://media.zigcdn.com/media/model/2021/Sep/simple-one-po-right-side-view_360x240.jpg",
      name: "Simple Energy One",
      price: "1000",
    },
    {
      img: "https://media.zigcdn.com/media/model/2021/Dec/infinity_360x240.jpg",
      name: "Bounce Infinity E1",
      price: "800",
    },
    {
      img: "https://media.zigcdn.com/media/model/2021/Aug/ola-electric-scoo-right-side-view_360x240.jpg",
      name: "Ola s1",
      price: "400",
    },
    {
      img: "https://media.zigcdn.com/media/model/2022/Jan/tork-kratos-right-side-view_360x240.jpg",
      name: "Tork Kartos",
      price: "600",
    },
    {
      img: "https://media.zigcdn.com/media/model/2019/Oct/e-plus-right-side-view_360x240.jpg",
      name: "Avon E Plus",
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

export default Evbike;
