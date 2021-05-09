import React, { useState } from "react";
import "../Home.css";
// import Heading from "../Heading"
import axios from "axios";
import { Link } from "react-router-dom";

function SignUp() {

  const [user, setUser] = useState({
    fullName: "",
    userName: "",
    email: "",
    password: ""
  });

  function SignUpNewUser(event) {
    const {value,name} = event.target
    console.log(event.target);

    setUser((prevValue) => {
      if (name === "fullName") {
        return {
          fullName: event.target.value,
          userName: prevValue.userName,
          email: prevValue.email,
          password: prevValue.password
        };
      } else if (name === "userName") {
        return {
          fullName: prevValue.fullName,
          userName: event.target.value,
          email: prevValue.email,
          password: prevValue.password
        };
      }else if (name === "email") {
        return {
          fullName: prevValue.fullName,
          userName: prevValue.userName,
          email: event.target.value,
          password: prevValue.password
        };
      }else if (name === "password") {
        return {
          fullName: prevValue.fullName,
          userName: prevValue.userName,
          email: prevValue.email,
          password: event.target.value
        };
      }
    });
  }

    function submitUser(event){
      event.preventDefault()
      const newSubmitedUser = user;
      console.log(newSubmitedUser);

      axios.post("http://localhost:4000/app/signup", newSubmitedUser)
    .then(res => console.log(res.data))

  setUser({
    fullName: "" ,
    userName: "",
    email: "" , 
    password: "" 
    })
    window.location.href ="http://localhost:3000/sign-in"
    }

    

  return (
    <div className="container-fluid">
   
    <div className="container-signIn">
    <h1>
        SIGN UP
      </h1>
      <form >
        <input
          onChange={SignUpNewUser}
          name="fullName"
          placeholder="Full Name"
          value={user.fullName}
        />
        <input
          onChange={SignUpNewUser}
          name="userName"
          placeholder="Username"
          value={user.userName}
        />
        <input
          onChange={SignUpNewUser}
          name="email"
          placeholder="E-Mail"
          value={user.email}
        />
        <input
          type ="password"
          onChange={SignUpNewUser}
          name="password"
          placeholder="Password"
          value={user.password}
        />
        <Link to="/sign-in">
        <button type="submit" onClick= {submitUser}>Go</button>
        </Link>
      </form>
    </div>
    
   
    
      
    </div>
  );
}

export default SignUp;
