import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import firebase from 'firebase';
import {db} from "../../config";

function Reset() {

    let history = useHistory();
    
    const [user,setUser]=useState("");
    const [password,setPassword]=useState("");
    const [confirmpassword,setconfirmPassword]=useState("");

    const [userErr,setUserErr]=useState(false);
    const [passErr,setPassErr]=useState(false);
    const [confirmpassErr,setconfirmPassErr]=useState(false);

  function resetHandle(e)
    {    
            e.preventDefault();       
            
        
            firebase.auth()
              .sendPasswordResetEmail(user)
              .then(function () {
                alert("Reset Email Sent 🚀");
              })
              .catch(function (error) {
                alert(error.message);
              });
     };   
        
    

    function formHandle(e){
        
        e.preventDefault()
    }

    return (
        <div>
            <div className="col-sm-6 offset-sm-3">
            <h1>Reset</h1>
           <form onSubmit={formHandle}>

           <input type="email" className="form-control" placeholder="Enter Email Id" 
           onChange={(e)=>setUser(e.target.value)} />
            <br /> <br />


            <button type="submit"  onClick={resetHandle}>Reset</button>

            <br /> <br />
            
            
           </form>
           </div>
        </div>
    )
}

export default Reset;