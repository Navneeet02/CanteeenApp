import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";


const Add = () => {
let history = useHistory();
    const [employee ,setEmployee]= useState({
        personID:"",
        firstName:"",
        costOfItem:""

    })

    const {personID,firstName,costOfItem} = employee;

    const Inputchange=(e)=>{
      //  console.log(e.target.value)
setEmployee({...employee,[e.target.name]: e.target.value})

    }



const submitForm= async(e)=>{
e.preventDefault();
let result= await axios.post("http://localhost:800/api/addEmployee",employee)
setEmployee(result);
history.push('/');
}

    return (
        <>
 <div className="container">
  <h2>Add Employee</h2>
  <form className="form-horizontal" onSubmit={(e)=>submitForm(e)} >
    <div className="form-group">
      <label className="control-label col-sm-2" 
      >Employee ID</label>

      <div className="col-sm-10">
        <input type="text" 
        className="form-control" 
         id="email"
         placeholder="Enter Employee ID" 
         name="personID"
         value={personID}    
         onChange={e=> Inputchange(e)}
         />
      </div>
    </div>


    <div className="form-group">
      <label className="control-label col-sm-2" >FirstName</label>
      <div className="col-sm-10">          
        <input type="text" 
        className="form-control" 
         placeholder="Enter FirstName" 
         name="firstName"
         value={firstName}    
         onChange={e=> Inputchange(e)}

         />
      </div>
    </div>
 

    <div className="form-group">      
    <label className="control-label col-sm-2 ">costOfItem</label> 
      <div className="col-sm-offset-2 col-sm-10 mt-2">
      <input type="text"
       className="form-control"
       placeholder="Enter cost of Item" 
       name="costOfItem"
       value={costOfItem}
       onChange={e=> Inputchange(e)}

       />
      </div>
    </div>

    {/* submit button */}
    <div className="form-group">        
      <div className="col-sm-offset-2 col-sm-10">
        <button type="submit" className="btn btn-primary mt-4">Submit</button>
      </div>
    </div>
  </form>
</div>

        </>

    )

}

export default Add;