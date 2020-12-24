import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";


const Login = () => {
let history = useHistory();
const [loginstatus, setLoginStatus] = useState()
const[logoutstatus,setLogOutStatus]=useState()

    const [employee ,setEmployee]= useState({
        email:"",
        password:""

    })

    const {email,password} = employee;

    const Inputchange=(e)=>{
      //  console.log(e.target.value)
setEmployee({...employee,[e.target.name]: e.target.value})

    }

 
axios.defaults.withCredentials=true;

const submitForm= async(e)=>{
e.preventDefault();
 await axios.post("http://localhost:800/api/login",{email,password}).then((response)=>{
    // console.log(response.data[0].username);
if(response.data.message){
setLoginStatus(response.data.message)   
}else{
setLoginStatus(response.data[0].username)
}
})


}

// useEffect(()=>{
//  axios.get("http://localhost:800/api/logedin").then((response)=>{
//     console.log(response);
//     //setLoginStatus(response.data)
  
// })
// },[])

const logout=()=>{
axios.get("http://localhost:800/api/logout").then((response)=>{
  console.log(response)
  history.push('/Logout')
  // if(response.data.msg){
  //   setLoginStatus(response.data.msg)
  // }
    
  
})

}


    return (
        <>
 <div className="container">
  <h2>Login Employee</h2>
  <form className="form-horizontal" onSubmit={(e)=>submitForm(e)}  >

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

<h5 id="confirmlogin"> {loginstatus} </h5>


    {/* submit button */}
    <div className="form-group">        
      <div className="col-sm-offset-2 col-sm-10">
        <button  className="btn btn-primary mt-4">Submit</button>
      </div>
    </div>

    <div className="form-group">        
      <div className="col-sm-offset-2 col-sm-10">
        <button onClick={logout} className="btn btn-primary mt-4">Logout</button>
      </div>
    </div>
  </form>
</div>

        </>

    )

}

export default Login;