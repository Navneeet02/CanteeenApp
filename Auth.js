import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory,Link } from "react-router-dom";


const Auth = () => {
let history = useHistory();
const [loginstatus, setLoginStatus] = useState()

    const [employee ,setEmployee]= useState({
        id:"",
        username:"",
        email:"",
        password:""

    })

    const {id,username,email,password} = employee;

const Inputchange=(e)=>{
      //  console.log(e.target.value)
setEmployee({...employee,[e.target.name]: e.target.value})

    }


axios.defaults.withCredentials=true;

const submitForm= async(e)=>{
e.preventDefault();
  await axios.post("http://localhost:800/api/signup",employee).then((response)=>{
      console.log(response)
    if(response){
        setLoginStatus(response.data.message,{response})
    }else
    {
        setLoginStatus(response.data.message)
    }
})
// console.log(result);
// setEmployee(result)

}   



    return (
        <>
 <div className="container">
  <h2>Login Employee</h2>
  <form className="form-horizontal" onSubmit={(e)=>submitForm(e)} >
    <div className="form-group">
      <label className="control-label col-sm-2" 
      >Employee ID</label>

      <div className="col-sm-10">
        <input type="text" 
        className="form-control" 
         id="id"
         placeholder="Enter Employee ID" 
         name="id"
         value={id}    
         onChange={e=> Inputchange(e)}
         />
      </div>
    </div>


    <div className="form-group">
      <label className="control-label col-sm-2" >UserName</label>
      <div className="col-sm-10">          
        <input type="text" 
        className="form-control" 
         placeholder="Enter username" 
         name="username"
         value={username}    
         onChange={e=> Inputchange(e)}

         />
      </div>
    </div>
 

    <div className="form-group">      
    <label className="control-label col-sm-2 ">email</label> 
      <div className="col-sm-offset-2 col-sm-10 mt-2">
      <input type="text"
       className="form-control"
       placeholder="Enter email" 
       name="email"
       value={email}
       onChange={e=> Inputchange(e)}

       />
      </div>
    </div>

    <div className="form-group">      
    <label className="control-label col-sm-2 ">password</label> 
      <div className="col-sm-offset-2 col-sm-10 mt-2">
      <input type="password"
       className="form-control"
       placeholder="Enter password" 
       name="password"
       value={password}
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
    
    <h3>{loginstatus}</h3>
  </form>
</div>

        </>

    )

}

export default Auth;