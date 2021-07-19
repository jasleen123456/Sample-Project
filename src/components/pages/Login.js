import React, { useState } from 'react'
import Reset from "./Reset"
import { useHistory } from "react-router-dom";
import firebase from 'firebase';
import {db} from "../../config";

function Login() {
    let history = useHistory();
    
    const [user,setUser]=useState("");
    const [password,setPassword]=useState("");    

  function loginHandle()

    {
        
        firebase.auth().signInWithEmailAndPassword(user, password)
            .then((userCredential) => {
              // Signed in
              var user = userCredential.user;
              console.warn(user);
              alert("login successful")
              history.push("/");
              // ...
            })
            .catch((error) => {
              var errorCode = error.code;
              var errorMessage = error.message;
              alert(errorMessage)
            });    
        
       
    }


    function formHandle(e){
        
        e.preventDefault()
    }
   
    function reset(){
        
        history.push("/reset");
    }


    return (
        <div>
            <div className="col-sm-6 offset-sm-3">
            <h1>Login</h1>
            
           <form onSubmit={formHandle}>

           <input type="email" className="form-control" placeholder="Enter Email Id" 
           onChange={(e)=>setUser(e.target.value)} />
            <br /> <br />


            <input type="password" className="form-control" placeholder="Enter User Password" 
            onChange={(e)=>setPassword(e.target.value)}/>{password.length<6?<span>Password too should not be less than 6charact</span>:""}
            <br /> <br />

            <button type="submit" onClick={loginHandle} >Login </button>

            <br /> <br />

            <button type="Forget Password" onClick={reset}>Forget Password</button>
           </form>
           </div>
        </div>
    )
}

export default Login;