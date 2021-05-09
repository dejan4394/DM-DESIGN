import React,{useState} from "react";
import "../SignIn.css"
import "../Home.css";
// import Heading from "../Heading"
import axios from "axios";

function SignIn (){
    const [logedUser, setLogedUser] = useState({
        email: "",
        password: ""
      });
    
      function SignInUser(event) {
        const {value,name} = event.target
        
    
        setLogedUser((prevValue) => {
          if (name === "email") {
            return {
              email: event.target.value,
              password: prevValue.password
            };
          }else if (name === "password") {
            return {
              email: prevValue.email,
              password: event.target.value
            };
          }
        });
      }
    
        function logUser(event){
        
          const newLogedUser = logedUser;
        
    
          axios.post("http://localhost:4000/app/signup", newLogedUser, )
        .then(res => console.log(res))
        .catch(err => console.log(err))

          event.preventDefault()
    
      setLogedUser({
        email: "" , 
        password: "" 
        })
        // window.location.href ="http://localhost:3000/sign-in"
        }
    
        
    
      return (
        <div className="container-fluid">
       
        <div className="container-signIn">
        <h1>
            SIGN IN
          </h1>
          <form >
          
            <input
              onChange={SignInUser}
              name="email"
              placeholder="E-Mail"
              value={logedUser.email}
            />
            <input
              type ="password"
              onChange={SignInUser}
              name="password"
              placeholder="Password"
              value={logedUser.password}
            />
            
            <button type="submit" onClick= {logUser}>Go</button>
           
          </form>
        </div>
        
       
        
          
        </div>
      );
}


export default SignIn;