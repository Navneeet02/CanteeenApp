import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link, useHistory} from "react-router-dom"


const Home = () => {
let history = useHistory()
const [employee, setEmployee]=useState([]);

useEffect(()=>{
loadEmployee();
},[]);

const loadEmployee=async()=>{
const result = await axios.get("http://localhost:800/api");
console.log(result);
setEmployee(result.data);

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
                    <h1>Home Pages</h1>
                    <table class="table">
  <thead>
    <tr>
      <th scope="col">SR NO</th>
      <th scope="col">PERSONID</th>
      <th scope="col">FIRSTNAME</th>
      <th scope="col">COSTOFITEM</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
  
   {
       employee.map((value, index)=>(
<tr key={value.personID}>
       <th scope="row">{index+1}</th>
       <td> {value.personID}</td>
       <td> {value.firstName}</td>
       <td> {value.costOfItem}</td>
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

export default Home;

