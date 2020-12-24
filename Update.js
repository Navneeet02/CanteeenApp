import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";


const Update = () => {
    
const  {id}= useParams()

    
   
let history = useHistory();

const [result, setResult] = useState([])
const [employee ,setEmployee]= useState({

        personID:"",
        firstName:"",
        costOfItem:""

    })

 
    
   //  const {personID,firstName,costOfItem}=employee;
//this is use to fill the value 
    const Inputchange=(e)=>{
       console.log(e.target.value)
setEmployee({...employee,[e.target.name]: e.target.value})

    }


const submitForm= async(e)=>{
e.preventDefault();
await axios.put(`http://localhost:800/api/updateEmployee/${id}`,employee)
history.push('/');
}

useEffect(()=>{
loadUser();
},[])


const loadUser= async()=>{
  await axios.get(`http://localhost:800/abc/${id}`).then((response)=>{
  console.log(response)
 setEmployee(response.data[0])
 //setResult(response.data[0])

  })

}

    return (
        <>
 <div className="container">
  <h2>Update Employee</h2>
  <form className="form-horizontal"   onSubmit={(e)=>submitForm(e)} >
    <div className="form-group">
      <label className="control-label col-sm-2" 
      >Employee ID</label>

      <div className="col-sm-10">
        <input type="text" 
        className="form-control" 
         id="personID"
         placeholder="Enter Employee ID" 
         name="personID"
         value={employee.personID}    
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
         value={employee.firstName}    
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
       value={employee.costOfItem}
       onChange={e=> Inputchange(e)}

       />
      </div>
    </div>

    {/* submit button */}
    <div className="form-group">        
      <div className="col-sm-offset-2 col-sm-10">
        <button className="btn btn-primary mt-4"
    //   onClick={submitForm}
        >Update Employee</button>
      </div>
    </div>
  </form>
</div>

        </>

    )

}

export default Update;