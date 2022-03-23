import React, { useContext } from "react";
import { rentContext } from "../App";
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

function Tripad() {
  let data = [
    {
      img: "https://www.bhphotovideo.com/cdn-cgi/image/format=auto,fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/atomos_atomshg701_shogun_7_hdr_monitor_1576603286_1471710.jpg",
      name: "Atomos Shogun 7 HDR Pro/Cinema Monitor-Recorder-Switcher",
      price: "500",
    },
    {
      img: "https://m.media-amazon.com/images/I/81NSLhUd2LL._SL1500_.jpg",
      name: "Atomos Ninja V Atomos Ninja V 4Kp60 10bit HDR Daylight Viewable 1000nit Portable",
      price: "1000",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/1034/1611/products/atomos_atomshg701_shogun_7_hdr_monitor_1554367509_1471710_700x.jpg?v=1576016546",
      name: "Atomos Shogun 7 HDR Pro Monitor/Recorder",
      price: "800",
    },
    {
      img: "https://www.bhphotovideo.com/cdn-cgi/image/format=auto,fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/atomos_atomnjav01_ninja_v_5_4k_1523294422_1401565.jpg",
      name: "Atomos Ninja V 5 4K HDMI Recording Monitor",
      price: "1200",
    },
    {
      img: "https://www.bhphotovideo.com/cdn-cgi/image/format=auto,fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/8sinn_8_anv_c_cage_for_atomos_ninja_1557229596_1474713.jpg",
      name: "8Sinn Cage for Atomos Ninja V Monitor",
      price: "1400",
    },
    {
      img: "https://www.bhphotovideo.com/cdn-cgi/image/format=auto,fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/atomos_atomshstu2_dual_recorder_dual_monitor_rack_1570124873_1506750.jpg",
      name: "Atomos Shogun Studio II Rackmount 4K Dual Recorder & Monitor (3RU)",
      price: "2000",
    },
    {
      img: "https://www.bhphotovideo.com/cdn-cgi/image/format=auto,fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/atomos_atomshbh01_shinobi_5_2_4k_hdmi_1630933597_1456145.jpg",
      name: "Atomos Shinobi 5.2 4K HDMI Monitor",
      price: "1500",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0486/4137/6411/products/32_a9577e80-6b9b-4478-9784-e85957d1358e_590x.jpg?v=1632725455",
      name: "Atomos Shogun 7 Hdr Pro Cinema Monitor Recorder",
      price: "1800",
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

export default Tripad;
