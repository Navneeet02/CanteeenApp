import React from "react";
import {Link,NavLink, useHistory} from 'react-router-dom'

const Navbar=()=>{


return(
<div>
<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <div class="container">
    <NavLink className="navbar-brand" 
    exact to="/">
    
    Home</NavLink>
    
   
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">


          <NavLink className="nav-link "
           aria-current="page" 
            exact to="/about">
           
           About</NavLink>
        </li>


        <li className="nav-item">
          <NavLink className="nav-link" exact to="/contact">Contact</NavLink>
        </li>
      </ul>
    
    </div>


    <Link  id="add" className="btn btn-outline-light "   to="/user/add">ADD</Link>
    <Link id="login" className="btn btn-outline-light"  to="/user/auth">Signup</Link>
  <Link id="signin" className="btn btn-warning" to="/user/login">Signin</Link>
  <Link id="search" className="btn btn-warning" to="/search/:username">Search</Link>

</nav>


</div>

    
)


}

export default Navbar