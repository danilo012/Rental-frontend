// Imported Required Files
import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
function SignUp() {
  // useNavigate to jump another route
  let navigate = useNavigate();

  // Write function to signup
  let handleSubmit = async (values) => {
    // use axios for post the data in database
    let res = await axios.post(
      "https://backuser.onrender.com/users/signup",
      values
    );
    // If statuscode is 200 then condition will be true and redirect to the login page
    if (res.data.statusCode === 200) {
      navigate("/login");
    }
  };

  // useFormik for validation
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastname: "",
      email: "",
      password: "",
      cpassword: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      lastname: Yup.string().required("Required"),
      email: Yup.string().email("Invalid Email").required("Required"),
      password: Yup.string()
        .min(8, "Password is too short")
        .matches(
          /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
          "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
        )
        .required("No Password Provided"),
      cpassword: Yup.string()
        .min(8, "Password is too short")
        .matches(
          /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
          "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
        )
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("No Password Provided"),
    }),
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  return (
    <div
      className="signup m-auto mt-5 pt-3 text-light"
      style={{
        width: "290px",
        boxShadow: "0px 0px 20px white",
        borderRadius: "15px",
      }}
    >
      <h1 className="text-center text-light mb-2">Sign Up</h1>
      <form
        onSubmit={formik.handleSubmit}
        style={{ width: "50%", paddingTop: "35px" }}
        className="m-auto"
      >
        <div className="form-group text-light">
          <label for="firstName">First Name</label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            className="form-control"
            placeholder="Enter First Name"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.firstName}
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <div style={{ color: "red" }}>{formik.errors.firstName}</div>
          ) : null}
        </div>

        <div className="form-group text-light">
          <label for="lastname">Last Name</label>
          <input
            id="lastname"
            name="lastname"
            type="text"
            className="form-control"
            placeholder="Enter Last Name"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.lastname}
          />
          {formik.touched.lastname && formik.errors.lastname ? (
            <div style={{ color: "red" }}>{formik.errors.lastname}</div>
          ) : null}
        </div>

        <div className="form-group text-light">
          <label for="email">Email</label>
          <input
            id="email"
            name="email"
            type="text"
            className="form-control"
            placeholder="Enter Email"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div style={{ color: "red" }}>{formik.errors.email}</div>
          ) : null}
        </div>

        <div className="form-group text-light">
          <label for="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            className="form-control"
            placeholder="Enter Password"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <div style={{ color: "red" }}>{formik.errors.password}</div>
          ) : null}
        </div>

        <div className="form-group text-light">
          <label for="cpassword">Confirm Password</label>
          <input
            id="cpassword"
            name="cpassword"
            type="password"
            className="form-control"
            placeholder="Enter Confirm Password"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.cpassword}
          />
          {formik.touched.cpassword && formik.errors.cpassword ? (
            <div style={{ color: "red" }}>{formik.errors.cpassword}</div>
          ) : null}
        </div>

        <div className="form-group mt-3 mb-2">
          <button
            className="btn d-flex justify-content-center text-light"
            type="submit"
            style={{ width: "100%", backgroundColor: "grey" }}
          >
            Sign Up
          </button>
        </div>
        <hr></hr>
        <div className="text-white text-center mt-3 pb-3">
          <p classname="text-light">
            Already Have an account ?&nbsp;
            <Link to="/login" className="text-decoration-none text-light">
              Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
