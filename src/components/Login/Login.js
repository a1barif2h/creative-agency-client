import React, { useContext } from "react";
import logo from "../../images/logos/logo.png";
import google from "../../images/icons/google.png";
import { Link, useHistory } from "react-router-dom";
import { LocalContext } from "../../App";
import * as firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from "./firebase.config";

firebase.initializeApp(firebaseConfig);
const Login = () => {
  document.title = "Creative Agency | Login";
  const history = useHistory();
  const [loggedInUser, setLoggedInUser] = useContext(LocalContext);
  const handelGoogleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        setLoggedInUser({
          ...loggedInUser,
          user: {
            name: result.user.displayName,
            email: result.user.email,
            img: result.user.photoURL,
          },
        });
        firebase.auth().currentUser.getIdToken(true);
      })
      .then((token) => {
        sessionStorage.setItem("token", JSON.stringify(token));
        history.replace(history.location.location?.pathname || "/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };
  return (
    <section className="mt-5 pt-5 text-center">
      <Link to="/home">
        <div>
          <img style={{ width: "150px" }} src={logo} alt="" />
        </div>
      </Link>

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
            onClick={handelGoogleSignIn}
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
            <span
              onClick={handelGoogleSignIn}
              style={{ color: "#3F90FC", cursor: "pointer" }}
            >
              Create an account
            </span>{" "}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
