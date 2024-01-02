// Imported Required Files
import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

function Login() {
  // Create navigate to jump another routes
  let navigate = useNavigate();

  // Write function to login
  let handleSubmit = async (values) => {
    // use axios to post the data
    let res = await axios.post(
      "https://backuser.onrender.com/users/login",
      values
    );

    // If statusCode is 200 then condition wii be true and set token and name in sessionStorage and navigate to dashboard
    if (res.data.statusCode === 200) {
      sessionStorage.setItem("token", res.data.token);
      sessionStorage.setItem("firstName", res.data.firstName);
      navigate("/dashboard");
    }
  };

  // useFormik for validation
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid Email").required("Required"),
      password: Yup.string()
        .min(8, "Password is too short")
        .matches(
          /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
          "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
        )
        .required("No Password Provided"),
    }),
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  return (
    <div
      className="login m-auto"
      style={{
        width: "250px",
        height: "550px",
        color: "white",
        boxShadow: "0px 0px 20px white",
        borderRadius: "15px",
      }}
    >
      <h1
        className=" text-light text-center pt-3"
        style={{ marginTop: "190px" }}
      >
        Login
      </h1>
      <form
        onSubmit={formik.handleSubmit}
        style={{ width: "100%", paddingTop: "35px" }}
        className="m-auto"
      >
        <div className="form-group text-light input-icons">
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

        <div className="form-group mt-5 mb-3">
          <button
            className="btn d-flex justify-content-center text-light"
            type="submit"
            style={{ width: "100%", backgroundColor: "grey" }}
          >
            Login
          </button>
        </div>
        <hr></hr>
        <div className="text-white text-center mt-3 ">
          <p classname="text-light">
            Not registered yet ?&nbsp;
            <Link to="/signup" className="text-decoration-none text-light">
              Create an Account
            </Link>
          </p>
        </div>
        <div className="text-center">
          <h5 style={{ color: "lightgreen" }}>Demo Credentials</h5>
          <span style={{ color: "yellow" }}>Email: user@gmail.com</span>
          <br></br>
          <span style={{ color: "yellow" }}>Password: user@123</span>
        </div>
      </form>
    </div>
  );
}

export default Login;
