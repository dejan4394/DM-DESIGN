import React, { useState } from "react";
import "../Home.css";
import axios from "axios";
import { useHistory } from "react-router-dom";


function SignUp() {
  const history = useHistory();

  const [user, setUser] = useState({
    fullname: "",
    username: "",
    email: "",
    password: "",
    Message: "",
  });

  function SignUpNewUser(event) {
    const {value,name} = event.target

    setUser((prevValue)=> ({
      ...prevValue,
      [name]: value
    }));
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
      .then((res) => {
        setUser({Message: res.status},
          ()=> console.log(user.Message.message))
        history.push("/services")})
      .catch(err => {
        setUser({Message: err.status},
          ()=> console.log(user.Message.message))
      });

        
      setUser({
        fullname: "" ,
        username: "",
        email: "" , 
        password: "" 
        })
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
          name="fullname"
          placeholder="Full Name"
          value={user.fullname}
        />
        <input
          onChange={SignUpNewUser}
          name="username"
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
      <p>{user.Message}</p>

    </div>
    
   
    
      
    </div>
  );
}

export default SignUp;
