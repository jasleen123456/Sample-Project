import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import firebase from 'firebase';
import {db} from "../../config";

function Signup() {

    let history = useHistory();
    
    const [user,setUser]=useState("");
    const [password,setPassword]=useState("");
    const [confirmpassword,setconfirmPassword]=useState("");

    const [userErr,setUserErr]=useState(false);
    const [passErr,setPassErr]=useState(false);
    const [confirmpassErr,setconfirmPassErr]=useState(false);

  function signupHandle(e)
    {
        
    if(password=== confirmpassword ) 
    {
        firebase.auth().createUserWithEmailAndPassword(user, password)
                .then((userCredential) => {
                    // Signed in 
                    var user = userCredential.user;
                    // ...
                    alert("You are successfully signed up") 
                    history.push("/Login");
                })
                .catch((error) => {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    alert(errorMessage)
                   // history.push("/Signup");
                });
    }
      

     e.preventDefault()
    }

  
    return (
        <div>
            <div className="col-sm-6 offset-sm-3">
            <h1>SignUp</h1>
           <form onSubmit={signupHandle}>
           
           <input type="email" className="form-control" placeholder="Enter Email Id" 
           onChange={(e)=>setUser(e.target.value)} />
            <br /> <br />


            <input type="password" className="form-control" placeholder="Enter User Password" 
            onChange={(e)=>setPassword(e.target.value)}/>{password.length<6?<span>Password must be more than 8 character</span>:""}
            <br /> <br />

            <input type="password" className="form-control" placeholder="Confirm Password"
             onChange={(e)=>setconfirmPassword(e.target.value)}/>{password===confirmpassword?"":<span>Password Not Matching</span>}

            <br /> <br />
            <button type="submit"  >SignUp</button>

            <br /> <br />
            
           </form>
           </div>
        </div>
    )
}

export default Signup;