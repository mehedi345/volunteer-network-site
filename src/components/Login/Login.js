  
import React, { useContext } from "react";
import './Login.css'
import "firebase/auth";
import { Button } from "react-bootstrap";
import * as firebase from "firebase/app";
import Google from "../../logos/google.png";
import { useHistory, useLocation } from "react-router-dom";
import firebaseConfig from "./firebase.config";
import { UserContext } from "../../App";
import logo from '../../logos/Group 1329.png';

firebase.initializeApp(firebaseConfig);

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };


  //google auth code is
  const provider = new firebase.auth.GoogleAuthProvider();

  const handleGoogleSignIN= () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((res) => {
        const { displayName, photoURL, email } = res.user;
        const signedInUser = {
          isSignedIn: true,
          name: displayName,
          email: email,
          photo: photoURL,
        };
        setLoggedInUser(signedInUser);
        storeAuthToken();
        history.replace(from);
        console.log(displayName, email, photoURL);
      })
      .catch((err) => {
        console.log(err);
        console.log(err.message);
      });


  }
 
  const storeAuthToken = () => {
    firebase.auth().currentUser.getIdToken( true)
    .then( (idToken) => {
        sessionStorage.setItem('token', idToken)
      }).catch( (error) => {
        
        console.log(error)
      }); 
}
  return (
    <>
    <div>
        <img src={logo} alt="logo" className="img-log"/>
    </div>
    <div className="login-area">
      <h2 >Login With</h2>
      <Button
        style={{ borderRadius: "50px" }}
        onClick={handleGoogleSignIN}
        size="md"
        variant="white"
        block
      >
        <img height="40px" src={Google} alt="" />
        <span>Continue with Google</span>
      </Button>
      <p>
        Don't have an account? <a href="#">Create an account</a>{" "}
      </p>
    </div>
    </>
  );
};

export default Login;