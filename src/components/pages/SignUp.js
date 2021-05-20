import React, { useState } from "react";
import "../Home.css";
// import Heading from "../Heading"
import axios from "axios";
import { Link } from "react-router-dom";

function SignUp() {

  const [user, setUser] = useState({
    fullname: "",
    username: "",
    email: "",
    password: ""
  });

  function SignUpNewUser(event) {
    const {value,name} = event.target
    console.log(event.target);

    setUser((prevValue) => {
      if (name === "fullName") {
        return {
          fullname: event.target.value,
          username: prevValue.username,
          email: prevValue.email,
          password: prevValue.password
        };
      } else if (name === "userName") {
        return {
          fullname: prevValue.fullname,
          username: event.target.value,
          email: prevValue.email,
          password: prevValue.password
        };
      }else if (name === "email") {
        return {
          fullname: prevValue.fullname,
          username: prevValue.username,
          email: event.target.value,
          password: prevValue.password
        };
      }else if (name === "password") {
        return {
          fullname: prevValue.fullname,
          username: prevValue.username,
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
      const URL = "http://localhost:8080/users/signup";

      axios(URL, {
        method: "POST",
        headers: {
          'content-type': 'application/json',
        },
        data: newSubmitedUser,
      })
        .then(response => response.data)
        .catch(error => {
          throw error;
        });
        
  setUser({
    fullname: "" ,
    username: "",
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
          value={user.fullname}
        />
        <input
          onChange={SignUpNewUser}
          name="userName"
          placeholder="Username"
          value={user.username}
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
       
        <button type="submit" onClick= {submitUser}>Go</button>
       
      </form>
    </div>
    
   
    
      
    </div>
  );
}

export default SignUp;
