import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link, useHistory} from "react-router-dom"
//import { search } from "../../../../BACKEND1/auth/authentication";


const Contact = () => {
let history = useHistory()
const [officeemployee, setofficeemploye]=useState([
    // id:"",
    // username:"",
    // email:"",
    // search:""
]);

const {id,username,email,search} = officeemployee;

const Inputchange=(e)=>{
    //  console.log(e.target.value)
setofficeemploye({...officeemployee,[e.target.name]: e.target.value})

  }

useEffect(()=>{
loadEmployee();
},[]);

const loadEmployee=async(e)=>{
   // e.preventDefault();
const result = await axios.get("http://localhost:800/getSignupDetail");
console.log(result);
setofficeemploye(result.data);

}



const deleteUser= async(id)=>{
   // e.preventDefault();
    await axios.delete(`http://localhost:800/api/deleteEmployee/${id}`)
    loadEmployee()
    //history.push('/');
    }


    
    return (
        <>


            <div className="container">
                <div className="py-4">
                    <h1>Staff Employee</h1>
                    <table class="table">
  <thead>
    <tr>
    
      <th scope="col">SR NO</th>
      <th scope="col">ID</th>
      <th scope="col">UserName</th>
      <th scope="col">email</th>
      <th scope="col">Action</th>

    </tr>
  </thead>
  <tbody>
  
   {
    officeemployee.map((value, index)=>(

        
<tr key={value.id}>
       <th scope="row">{index+1}</th>
       <td> {value.id}</td>
       <td> {value.username}</td>
       <td> {value.email}</td>
       <td>
           <Link id="view" className="btn btn-primary mr-2">View</Link>
           <Link id="update" 
           className="btn btn-warning mr-2" 
            to={`/user/update/${value.personID}`}>Update</Link>
           <Link id="delete" className="btn btn-danger " 
           onClick={()=>{deleteUser(value.personID)}}
           >Delete</Link>

       </td>
</tr>


       ))
   }
  </tbody>
</table>

                </div>
            </div>
        </>
    )
}

export default Contact;

