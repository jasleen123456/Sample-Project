import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import firebase from 'firebase';
import {db} from "../../config";
import userEvent from "@testing-library/user-event";
import { useHistory } from "react-router-dom";
const EditUser = () => {
  let history = useHistory();

  const { id } = useParams();

const [fname,setFName]=useState("");
const [lname,setLName]=useState("");
const [gender,setGender]=useState("");
const [city,setCity]=useState("");
const [mystate,setMystate]=useState("");
const [country,setCountry]=useState("");
const [zip,setZip]=useState("");
const [interest,setInterest]=useState("");
const [Err,setErr]=useState(false);

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




function validation()
{
  if (fname.length<2 || lname.length<2)
  {
    alert("First Name & Last name should be more than 2 ch")
    setErr(true)
  }
  if (gender.length===0 )
  {
    alert("Please mark your gender")
    setErr(true)
  }
  if (city.length<2  )
  {
    alert("Please mention your city")
    setErr(true)
  }
  if (mystate.length===0  || country.length===0)
  {
    alert("Please mention your State & Country")
    setErr(true)
  }
  if (interest.length===0 )
  {
    alert("Please mention interest")
    setErr(true)
  }

       

    var pattern = new RegExp(/^[0-9\b]+$/);
  
    if (!pattern.test(zip)) {
  
      setErr(true);    
      alert("Please enter only number.")
  
    }
  
    if (photo.file.length==0) {
  
      setErr(true);    
      alert("Please enter your Profile image")
  
    }
  
}



function editUser()
{
  validation();
  if(!Err){
  console.warn(fname,lname,gender,city,mystate,country,zip,interest)
  
  
  let user = {
    firstname: fname,
     lastname: lname, 
     gender:gender,
     city:city,
     state:mystate,
     country:country,
     zip:zip,
     interest:interest,
     image:photo.file      
    };
    
    console.warn(user)
  //await axios.post("http://localhost:3004/users", user);
  //history.push("/");
 db.collection("users").doc(id). set({
   firstname: fname,
  lastname: lname, 
  gender:gender,
  city:city,
  state:mystate,
  country:country,
  zip:zip,
  interest:interest,
  image:photo.file}
   ) 

 alert("Update Succcess") 
 history.push("/")  
  }
}

function handleform(e)
{
  e.preventDefault()
}
/*useEffect(() => {
  loadUser();
}, []);

const loadUser = async () => {    

  var docRef = db.collection("users").doc(id);
  console.warn("load",id)
  docRef.get().then((doc) => {
      if (doc.exists) {
          console.log("Document data:", doc.data());
          setUser(doc.data())   
      } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
      }
  }).catch((error) => {
      console.log("Error getting document:", error);
  });

}*/

  return (
    <div className="App">
     <h1>Edit User Id: {id}</h1>
     <form onSubmit={(e)=>handleform}>
       
       <input type="text" 
       onChange={(e)=>setFName(e.target.value)} /> <br /><br />
       
       <input type="text" 
        onChange={(e)=>setLName(e.target.value)} /> <br /><br />
       
       <div  onChange={(e)=>setGender(e.target.value)}>
        <input type="radio" value="Male" name="gender" /> Male
        <input type="radio" value="Female" name="gender" /> Female
        <input type="radio" value="Other" name="gender" /> Other
      </div>
       
      <input type="text"  placeholder="enter city"  onChange={(e)=>setCity(e.target.value)} /> <br /><br />

       <select onChange={(e)=>setMystate(e.target.value)}>
         <option>Select Option</option>
         <option>S1</option>
         <option>S2</option>
       </select> <br /><br />

       <select onChange={(e)=>setCountry(e.target.value)}>
         <option>select option</option>
         <option>C1</option>
         <option>C2</option>
       </select> <br /><br />

       <input type="text"  placeholder="enter Zip"  onChange={(e)=>setZip(e.target.value)} /> <br /><br />
            
       
       <select onChange={(e)=>setInterest(e.target.value)}>
         <option>select option</option>
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
                                
           
       
       <button type="submit" onClick={editUser}>Edit</button>
       
       </form>
    </div>
  );
};

export default EditUser;
