import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link, useHistory, useParams} from "react-router-dom"



const Search=()=>{
const {username}= useParams();
const [result, setResult] = useState([])
const [values, setValues]=useState({
    search:"",
    
})

const {search} = values;

const Inputchange=(e)=>{
      console.log(e.target.value)
setValues({...values,[e.target.name]: e.target.value})

}   
const searchEmployee=async(e)=>{
    console.log()
    e.preventDefault();
      await axios.get(`http://localhost:800/getEmployee/${search}`)

    .then((response)=>{
        console.log ( response.data[0].username + " " + response.data[0].email )
        // setValues(response)
        if(response){
          setResult(response.data)
        }else{
          setResult("")
        }
    })
   //console.log(result);

}

return(
<>

<div id="searchbar" className="container">

<form className="form-inline my-2 my-ly-0"   onSubmit={searchEmployee}>
      <input className="form-control mr-sm-2" 
      type="search" 
      placeholder="Search" 
      name="search"
      value={search}
      onChange={e=> Inputchange(e)}
      aria-label="Search"/>
      
      <button id ="search" 
     
      className="btn btn-outline-success " 
      
      type="submit">Search</button>
    </form>
</div>

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
    result.map((value, index)=>(
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

           <Link id="update" 
           className="btn btn-warning mr-2" 
            to={`/search/${value.personID}`}>Update</Link> 
          

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

export default Search;
