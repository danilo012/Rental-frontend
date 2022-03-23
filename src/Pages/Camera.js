import React, { useContext } from "react";
import { rentContext } from "../App";
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

function Camera() {
  let data = [
    {
      img: "https://m.media-amazon.com/images/I/914hFeTU2-L._SL1500_.jpg",
      name: "Canon EOS 1500D 24.1 Digital SLR Camera (Black) with EF S18-55 is II Lens",
      price: "500",
    },
    {
      img: "https://m.media-amazon.com/images/I/81cEKnH692L._SL1500_.jpg",
      name: "Canon EOS 200D II 24.1MP Digital SLR Camera + EF-S 18-55mm f4",
      price: "1000",
    },
    {
      img: "https://www.reliancedigital.in/medias/Nikon-D3500-DSLR-Camera-491431009-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w1NDYwMnxpbWFnZS9qcGVnfGltYWdlcy9oODcvaGFmLzkwNzAzNTYwNzA0MzAuanBnfDk1ODVmYTQ0NzY3Yzg5NTAyNzhkNjllMDNmYTE1MWM5MzNlMTRlNDQxNTUyZDI2YWMxMWYzYTlmNjNjNDc3ZjQ",
      name: "Nikon D3500 DSLR Camera with AF-P 18-55 mm + AF-P 70-300 mm VR Kit",
      price: "650",
    },
    {
      img: "https://mozelo.s3.ap-south-1.amazonaws.com/wp-content/uploads/2019/10/05194253/Nikon-D3400-2.jpg",
      name: "Nikon D3400 DSLR Camera with Single Lens NIKKOR 18-55 mm 16 GB SD Card",
      price: "500",
    },
    {
      img: "https://www.bhphotovideo.com/cdn-cgi/image/format=auto,fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/canon_eos_5d_mark_iv_1561852319_1274706.jpg",
      name: "Canon EOS 5D Mark IV DSLR Camera with 24-105mm f/4L II Lens",
      price: "2000",
    },
    {
      img: "https://rukminim2.flixcart.com/image/416/416/jfbfde80/camera/n/r/n/canon-eos-eos-3000d-dslr-original-imaf3t5h9yuyc5zu.jpeg?q=70",
      name: "Canon EOS 3000D DSLR Camera 1 Camera Body, 18 - 55 mm Lens (Black)",
      price: "400",
    },
    {
      img: "https://www.bhphotovideo.com/cdn-cgi/image/format=auto,fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/nikon_d5600_dslr_camera_with_1484050840_1308819.jpg",
      name: "Nikon D5600 DSLR Camera with 18-55mm Lens",
      price: "600",
    },
    {
      img: "https://image.shopmoment.com/resizer?quality=75&width=1320&fit=cover&gravityX=0.5&gravityY=0.5&height=1320&image=https://image.shopmoment.com/general/Moment-Sony-ILCE7M3K_B-Alpha-a7-III-Mirrorless-Digital-Camera-with-FE-28-70mm-OSS-lens-01.jpg?mtime=20210128121544&focal=none",
      name: "Sony Alpha a7 III Full Frame Mirrorless Camera Body",
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

export default Camera;
