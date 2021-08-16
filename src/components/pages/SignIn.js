import React,{useState} from "react";
import "../SignIn.css"
import "../Home.css";
import { useHistory } from "react-router-dom";

// import Heading from "../Heading"
import axios from "axios";

function SignIn (){
  const history = useHistory();


    const [logedUser, setLogedUser] = useState({
        email: "",
        password: "",
        Message: ""
      });
    
      function SignInUser(event) {
        const {value,name} = event.target
        
    
        setLogedUser((prevValue)=>({
          ...prevValue,
          [name]: value}));
      }
    
        function logUser(event){
          event.preventDefault()
          const newLogedUser = logedUser;
          console.log(newLogedUser);
        
          const URL = "http://localhost:8080/users/signin";

      axios(URL, {
        method: "POST",
        headers: {
          'content-type': 'application/json',
        },
        data: newLogedUser,
      })
        .then((res) => {
            setLogedUser({Message: res.status})
                 history.push("/services")})
        .catch(error => {
            setLogedUser({Message: error.response.data.message})
        });


          
    
      setLogedUser({
        email: "" , 
        password: "" 
        })
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
          <p>{logedUser.Message}</p>
        </div>
        
       
        
          
        </div>
      );
}


export default SignIn;