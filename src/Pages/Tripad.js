import React, { useContext } from "react";
import { rentContext } from "../App";
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

function Tripad() {
  let data = [
    {
      img: "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1618402358/Croma%20Assets/Imaging/Camera%20Accessories/Images/217285_2_ul8wai.png/mxw_2048,f_auto",
      name: "National Geographic Photo Tripod (NGPH001, Black)",
      price: "200",
    },
    {
      img: "https://m.media-amazon.com/images/I/71RxTP5GWoL._SL1500_.jpg",
      name: "Digitek DTR 550 LW (67 Inch) Tripod For DSLR, Camera",
      price: "150",
    },
    {
      img: "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1605184396/Croma%20Assets/Imaging/Camera%20Accessories/Images/8985574473758.png/mxw_2048,f_auto",
      name: "Go Pro El Grande 38 Inch Extension Monopod (Black)",
      price: "250",
    },
    {
      img: "https://m.simsim.in/data/products/2802851_image1_97fd256d-4425-43e2-8968-028645751bbd.jpeg",
      name: "Nory Gorilla Tripod/Mini Tripod 13 inch for Mobile Phone with Holder for Mobile",
      price: "100",
    },
    {
      img: "https://m.media-amazon.com/images/I/31vkwhQ17uL.jpg",
      name: "Rewy Portable 105cm Long",
      price: "200",
    },
    {
      img: "https://cdn.moglix.com/p/1ux8cc9dAx5I0-xxlarge.jpg",
      name: "Bosch BT 150 Compact Tripod",
      price: "150",
    },
    {
      img: "https://www.digitek.net.in/media/product/product_detail_image/527097_1.jpg",
      name: "Digitak (DRL-18H C) Professional 46Cm",
      price: "250",
    },
    {
      img: "https://www.digitek.net.in/media/product/product_detail_image/807617_1.jpg",
      name: "Camera Light Stand",
      price: "100",
    },
  ];

  let context = useContext(rentContext);

  return (
    <div>
      <div  style={{display: "grid",gridTemplateColumns:" 2fr 2fr 2fr 2fr",gridTemplateColumns: "repeat(auto-fill, 475px)"}}>
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
              <div className="d-flex flex-direction-row" >
                <p className="lead pt-2" style={{color:"black"}}>&#x20B9;{e.price} / day</p>
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

export default Tripad;
