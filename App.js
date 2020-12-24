import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact'
import Navbar from './Pages/Navbar';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import NotFound from './Pages/NotFound';
import Add from './Pages/User/Add';
import Update from './Pages/User/Update';
import Auth from './Pages/User/Auth';
import Login from './Pages/User/Login'
import Search from './Pages/User/Search';
import Logout from './Pages/User/Logout';



function App() {
  return (
    <Router>
    <div className="App">
  
    <Navbar/>
    <Switch>
     <Route exact path="/" component={Home} />
     <Route exact path="/about" component={About}/>
     <Route exact path="/contact/" component={Contact} />
     <Route exact path="/user/add" component={Add} />
     <Route exact path="/user/update/:id" component={Update} />
     <Route exact path="/user/auth" component={Auth} />
     <Route exact path="/user/login" component={Login} />
     <Route exact path="/search/:username" component={Search} />
     <Route exact path="/Logout"      component={Logout} />





     
     <Route exact  component={NotFound} />



    </Switch>
    
      </div>
    </Router>
    
      
    
  );
}

export default App;
