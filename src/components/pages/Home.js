import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import firebase from 'firebase';
import {db} from "../../config";

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  
  function deleteUser(id){
    db.collection("users").doc(id).delete();
  }

  function loadUsers() { 

   const details = []
    db.collection('users').get()
        .then(snapshot => {
            snapshot.docs.forEach(doc => {
                let currentID = doc.id
                let appObj = { ...doc.data(), ['id']: currentID }
                details.push(appObj)            
        }) 
        setUsers(details);
        console.warn("users",users)
      }
        )  

    }  


  return (
    <div className="container">
      <div className="py-4">
        <h1>Home Page</h1>
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
              <th>Action</th>
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
               
                <td>
                  <Link class="btn btn-primary mr-2" to={`/users/${user.id}`}>
                    View
                  </Link>
                  <Link
                    class="btn btn-outline-primary mr-2"
                    to={`/users/edit/${user.id}`}
                  >
                    Edit
                  </Link>
                  <button  class="btn btn-danger"  onClick={()=>deleteUser(user.id)} >delete</button>              
                  
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
