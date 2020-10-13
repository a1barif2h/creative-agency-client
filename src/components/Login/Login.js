import React from "react";
import logo from "../../images/logos/logo.png";
import google from "../../images/icons/google.png";

const Login = () => {
  return (
    <section className="mt-5 pt-5 text-center">
      <div>
        <img style={{ width: "150px" }} src={logo} alt="" />
      </div>
      <div
        style={{
          border: "2px solid #ABABAB",
          width: "570px",
          margin: "50px auto",
          height: "450px",
          backgroundColor: "#ffffff",
          borderRadius: "5px",
        }}
      >
        <div style={{ width: "450px", height: "148px", margin: "170px auto" }}>
          <h2>Login With</h2>
          <button
            style={{
              width: "100%",
              outline: "none",
              borderRadius: "25px",
              fontWeight: "bold",
              padding: "10px",
              border: "1px solid #ABABAB",
              background: "transparent",
              position: "relative",
            }}
          >
            {" "}
            <img
              style={{
                width: "35px",
                position: "absolute",
                left: "5px",
                top: "5px",
              }}
              src={google}
              alt=""
            />{" "}
            Continue with Google
          </button>
          <p className="mt-3 font-weight-bold">
            Don’t have an account?{" "}
            <span style={{ color: "#3F90FC", cursor: "pointer" }}>
              Create an account
            </span>{" "}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
