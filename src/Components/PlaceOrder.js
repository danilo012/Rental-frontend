// Imported Required Files
import React, { useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { rentContext } from "../App";
import Payment from "../Components/Payment";
function PlaceOrder() {
  // Declare variable to store context data
  let context = useContext(rentContext);

  // useNavigate to jump to another route
  let navigate = useNavigate();

  let handleSubmit = async (values) => {
    // use axios to post the data into database
    let res = await axios.post(
      "https://backuser.onrender.com/users/orderdetails",
      values
    );
    // if res is present then condition will be true
    if (res) {
      // store order id inside the context
      context.orderID = res.data.small_id;
      navigate("/success/" + context.orderID);
    }
  };

  // UseFormik for validation
  const formik = useFormik({
    initialValues: {
      name: "",
      mobile: "",
      pincode: "",
      locality: "",
      address: "",
      city: "",
      state: "",
      landmark: "",
      alternatePhone: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      mobile: Yup.number().required("Required"),
      pincode: Yup.number().required("Required"),
      locality: Yup.string().required("Required"),
      address: Yup.string().required("Required"),
      city: Yup.string().required("Required"),
      state: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  return (
    <div>
      <h3 className="text-center mt-5">FillUp All Required Items</h3>
      <form
        className="m-auto mt-4"
        style={{ height: "500px", width: "500px" }}
        onSubmit={formik.handleSubmit}
      >
        <h4>1.Enter Details</h4>
        <div className="m-auto mt-3">
          <div
            className=" d-flex"
            style={{ justifyContent: "space-between", flexDirection: "row" }}
          >
            <div>
              <label for="name">Name</label>
              <input
                id="name"
                name="name"
                className="form-control"
                type="text"
                placeholder="Enter Your Name"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.name}
              />
              {formik.touched.name && formik.errors.name ? (
                <div style={{ color: "red" }}>{formik.errors.name}</div>
              ) : null}
            </div>
            <div>
              <label for="mobile">Mobile Number</label>
              <input
                className="form-control"
                id="mobile"
                name="mobile"
                type="text"
                placeholder="10-digit Number"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.mobile}
              />
              {formik.touched.mobile && formik.errors.mobile ? (
                <div style={{ color: "red" }}>{formik.errors.mobile}</div>
              ) : null}
            </div>
          </div>
        </div>

        <div className="m-auto mt-2">
          <div
            className=" d-flex"
            style={{ justifyContent: "space-between", flexDirection: "row" }}
          >
            <div>
              <label for="pincode">Pincode</label>
              <input
                className="form-control"
                id="pincode"
                name="pincode"
                type="text"
                placeholder="Enter Your Pincode"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.pincode}
              />
              {formik.touched.pincode && formik.errors.pincode ? (
                <div style={{ color: "red" }}>{formik.errors.pincode}</div>
              ) : null}
            </div>
            <div>
              <label for="locality">Locality</label>
              <input
                className="form-control"
                id="locality"
                name="locality"
                type="text"
                placeholder="Enter Your Locality"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.locality}
              />
              {formik.touched.locality && formik.errors.locality ? (
                <div style={{ color: "red" }}>{formik.errors.locality}</div>
              ) : null}
            </div>
          </div>
        </div>

        <div className="m-auto mt-2">
          <div
            className=" d-flex"
            style={{ justifyContent: "space-between", flexDirection: "column" }}
          >
            <label for="address">Address</label>
            <textarea
              className="form-control"
              id="address"
              name="address"
              placeholder="Enter Your Address"
              style={{ width: "100%", resize: "none" }}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.address}
            />
            {formik.touched.address && formik.errors.address ? (
              <div style={{ color: "red" }}>{formik.errors.address}</div>
            ) : null}
          </div>
        </div>

        <div className="m-auto mt-2">
          <div
            className=" d-flex"
            style={{ justifyContent: "space-between", flexDirection: "row" }}
          >
            <div>
              <label for="city">City</label>
              <input
                className="form-control"
                id="city"
                name="city"
                type="text"
                placeholder="Enter Your City"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.city}
              />
              {formik.touched.city && formik.errors.city ? (
                <div style={{ color: "red" }}>{formik.errors.city}</div>
              ) : null}
            </div>
            <div>
              <label for="state">State</label>
              <input
                className="form-control"
                id="state"
                name="state"
                type="text"
                placeholder="Enter Your State"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.state}
              />
              {formik.touched.state && formik.errors.state ? (
                <div style={{ color: "red" }}>{formik.errors.state}</div>
              ) : null}
            </div>
          </div>
        </div>

        <div className="m-auto mt-2">
          <div
            className=" d-flex"
            style={{ justifyContent: "space-between", flexDirection: "row" }}
          >
            <div>
              <label for="landmark">Landmark(Optional)</label>
              <input
                className="form-control"
                id="landmark"
                name="landmark"
                type="text"
                placeholder="Landmark"
              />
            </div>
            <div>
              <label for="alternatePhone"> Alternate Phone(Optional)</label>
              <input
                className="form-control"
                id="alternatePhone"
                name="alternatePhone"
                type="text"
                placeholder="Alternate Phone"
              />
            </div>
          </div>
        </div>

        <h4 className="mt-4">2.Payment Option</h4>
        <div className="mt-2">
          <Payment />
          <button className="btn btn-warning mt-4">Submit Order</button>
        </div>
      </form>
    </div>
  );
}

export default PlaceOrder;
