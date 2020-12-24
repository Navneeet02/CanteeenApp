// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import {Link, useHistory, useParams} from "react-router-dom"

// const About = () => {

// const [values, setValues]=useState([

//     // search:"",
//     // username:""
// ])

// const {search,username} = values

// const Inputchange=(e)=>{
//     //  console.log(e.target.value)
// setValues({...values,[e.target.name]: e.target.value})

//   }


//   const searchEmployee=async(e)=>{
//      e.preventDefault();
//      const result = await axios.get(`http://localhost:800/getEmployee/${username}`,{search,username});
//      console.log(result);
//    setValues(result)
//  }

//     return (
//         <>
           

// <div id="searchbar" className="container">

// <form class="form-inline my-2 my-ly-0" >
//       <input class="form-control mr-sm-2" 
//       type="search" 
//       placeholder="Search" 
//       name="search"
//       value={search}
//       onChange={e=> Inputchange(e)}
//       aria-label="Search"/>
      
//       <button id ="search" 
//       onClick={()=>{searchEmployee()}}
//       className="btn btn-outline-success " 
      
//       type="submit">Search</button>
//     </form>
// </div>

// <div className="container">
//                 <div className="py-4">
//                     <h1>Staff Employee</h1>
//                     <table class="table">


// <thead>
//     <tr>
    
//       <th scope="col">SR NO</th>
//       <th scope="col">ID</th>
//       <th scope="col">UserName</th>
//       <th scope="col">email</th>
//       <th scope="col">Action</th>

//     </tr>
//   </thead>

//   <tbody>
  
//    {
//    values.map((value, index)=>(
// <tr key={value.id}>
//        <th scope="row">{index+1}</th>
//        <td> {value.id}</td>
//        <td> {value.username}</td>
//        <td> {value.email}</td>
//        <td>
//            <Link id="view" className="btn btn-primary mr-2">View</Link>
          
//            <Link id="update" 
//            className="btn btn-warning mr-2" 
//             to={`/user/update/${value.personID}`}>Update</Link>
          
//        </td>
// </tr>


//        ))
//    }
//   </tbody>
// </table>
// </div>
// </div>
//         </>
//     )
// }

// export default About;