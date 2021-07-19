import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";
import firebase from 'firebase';
import {db} from "../../config";

function AddUser() {
  const [fname,setFName]=useState("");
  const [lname,setLName]=useState("");
  const [gender,setGender]=useState("");
  const [city,setCity]=useState("");
  const [mystate,setMystate]=useState("");
  const [country,setCountry]=useState("");
  const [zip,setZip]=useState("");
  const [tnc,setTnc]=useState(false);
  const [interest,setInterest]=useState("");
  const [photo,setPhoto]=useState(
      {
    file: '',
    imagePreview_Url: ''
    }
);
  


function handleImageChange(e) {
  const reader = new FileReader();
  reader.onload = () =>{
    if(reader.readyState === 2){
      setPhoto({file: reader.result})
    }
  }
  reader.readAsDataURL(e.target.files[0])
}





  function getFormData(e)
  {
    console.warn(fname,lname,gender,city,mystate,country,zip,tnc,interest)
    e.preventDefault()
   
    let user = {
        firstname: fname,
       lastname: lname, 
       gender:gender,
       city:city,
       state:mystate,
       country:country,
       zip:zip,
       interest:interest,
      
      };
      
      console.warn(user)
    //await axios.post("http://localhost:3004/users", user);
    //history.push("/");
    db.collection("users")    
      .doc('3Pq6VJx5p8K0DAyYx')    
      .set(user)    
      .then(function () {    
           
        console.log('Student details successfully added!');    
      })    
      .catch(function (error) {    
           
        console.error("Error writing document: ", error);    
      });   
    

  }
  return (
    <div className="App">
     <h1>Add User</h1>
     <form onSubmit={getFormData}>
       
       <input type="text" placeholder="enter first name" value={fname} onChange={(e)=>setFName(e.target.value)} /> <br /><br />
       
       <input type="text" placeholder="enter last name" value={lname} onChange={(e)=>setLName(e.target.value)} /> <br /><br />
       
       <div onChange={(e)=>setGender(e.target.value)}>
        <input type="radio" value="Male" name="gender" /> Male
        <input type="radio" value="Female" name="gender" /> Female
        <input type="radio" value="Other" name="gender" /> Other
      </div>
       
      <input type="text" placeholder="enter city" value={city} onChange={(e)=>setCity(e.target.value)} /> <br /><br />

       <select onChange={(e)=>setMystate(e.target.value)}>
         <option>Select Options</option>
         <option>S1</option>
         <option>S2</option>
       </select> <br /><br />

       <select onChange={(e)=>setCountry(e.target.value)}>
         <option>Select Options</option>
         <option>C1</option>
         <option>C2</option>
       </select> <br /><br />

       <input type="text" placeholder="enter Zip" value={zip} onChange={(e)=>setZip(e.target.value)} /> <br /><br />
      
       
       
       <select onChange={(e)=>setInterest(e.target.value)}>
         <option>Select your Interest</option>
         <option>I1</option>
         <option>I2</option>
       </select> <br /><br /> 


       
                                  
        
        <div className="img-holder">
						<img src={photo.file} alt="" id="img" width="50 px" heightt="50 px"  className="img" />
					</div>
					<input type="file" accept="image/*" name="image-upload" id="input" onChange={handleImageChange} />
					<div className="label">
          <label className="image-upload" htmlFor="input">					
						Choose your Photo
					</label>
          </div> 
       
       <button type="submit">Submit</button>
       

     </form>
    </div>
  );
}
export default AddUser;








