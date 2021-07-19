import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import firebase from 'firebase';
import {db} from "../../config";

const User = () => {
  console.warn("helo user")
  const { id } = useParams();
  console.warn(id)
  const [user, setUser] = useState({
      id:"",
      firstname: "",
       lastname: "", 
       gender:"",
       city:"",
       state:"",
       country:"",
       zip:"",
       interest:"",
  });
  
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {    

      var docRef = db.collection("users").doc(id);
      console.warn("load",id)
      docRef.get().then((doc) => {
          if (doc.exists) {
              console.log("Document data:", doc.data());
              setUser
              (doc.data())   
          } else {
              // doc.data() will be undefined in this case
              console.log("No such document!");
          }
      }).catch((error) => {
          console.log("Error getting document:", error);
      });

   /* db.collection("users").doc(id==id)  
      .get()  
      .then(collectionData => {  
        
        console.log('data collection : ', collectionData);  
        setUser
        (collectionData.docs.map((doc)=>({
          id:doc.id,
          firstname:doc.data().firstname,
          lastname:doc.data().lastname,
          gender:doc.data().gender,
          city:doc.data().city,
          state:doc.data().state,
          country:doc.data().country,
          zip:doc.data().zip})))      
      }).catch(err => {  
        // Error or Exception occure  
        console.log('error', err.response);  
      });  */   
  };
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/">
        back to Home
      </Link>
      <h1 className="display-4">View Details of {user.firstname}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">first name: {user.firstname}</li>
        <li className="list-group-item">last name: {user.lastname}</li>
        <li className="list-group-item">gender: {user.gender}</li>
        <li className="list-group-item">city: {user.city}</li>       

        <li className="list-group-item">state: {user.state}</li>
        <li className="list-group-item">country: {user.country}</li>
       
        <li className="list-group-item">zip: {user.zip}</li>
        <li className="list-group-item">Interest: {user.interest}</li>
        <li className="list-group-item">Image: <img src={user.image} alt="" id="img" width="50 px" heightt="50 px"  className="img" /></li>
      </ul>
    </div>
  );
};

export default User;
