import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import firebase from 'firebase';
import {db} from "../../config";

const Details = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);
  
 
  function loadUsers() { 

    const details = []
    db.collection('users').get()
        .then(snapshot => {
            snapshot.docs.forEach(doc => {
                let currentID = doc.id
                let appObj = { ...doc.data(), ['id']: currentID }
                details.push(appObj)

                details.push(doc.data())
        })
        setUsers(details);
        console.warn("users",users)
   
      })
    }
        





  /*  
    db.collection("Users")  
      .get()  
      .then(collectionData => {     

        
       
        console.log('data collection : ', collectionData);  
        setUsers(
        collectionData.docs.map((doc)=>({
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
      });*/ 


  /* db.collection('Users').onSnapshot(
     (querry)=>{       
        setUsers
        (querry.docs.map((doc)=>({
          firstname:doc.data().firstname,
          lastname:doc.data().lastname,
          gender:doc.data().gender,
          city:doc.data().city,
          state:doc.data().state,
          country:doc.data().country,
          zip:doc.data().zip
      })
      )
       ) 
        
   })*/   
   
  
 

  return (
    <div className="container">
      <div className="py-4">
        <h1>Registration Details</h1>
        <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">FirstName</th>
              <th scope="col">LastName</th>
              <th scope="col">Gender</th>
              <th scope="col">City</th>
              <th scope="col">State</th>
              <th scope="col">Country</th>
              <th scope="col">Zip</th>
              <th scope="col">Interest</th>
              <th scope="col">Image</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.firstname}</td>
                <td>{user.lastname}</td>
                <td>{user.gender}</td>
                <td>{user.city}</td>
                <td>{user.state}</td>
                <td>{user.country}</td>
                <td>{user.zip}</td>
                <td>{user.interest}</td>
                <td><img src={user.image} alt="" id="img" width="20 px" heightt="20 px"  className="img" />
					</td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Details;
