import React, {useEffect} from "react";
import './App.css';
import HomeScreen from "./screens/HomeScreen";
import "./screens/HomeScreen.css";
import Nav from "./Nav";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import LoginScreen from "./screens/LoginScreen.js";
import firebase, { auth } from './firebase.js';
import { login, logout ,selectUser} from "./userSlice";
import { useSelector, useDispatch } from 'react-redux'
import ProfileScreen from "./screens/ProfileScreen.js";
import EditProfile from "./EditProfile";
import Screen_6 from "./Screen_6";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch()
 
   
   useEffect(()=>{

    const unsubscribe =auth.onAuthStateChanged((userAuth)=>{
      if(userAuth)
      {
        
       dispatch(
         login({
           uid: userAuth.uid,
           email:userAuth.email,
         })
         );
        
      }
      else {
        //loggedout
        dispatch(logout());
 
      }
    });

    return unsubscribe;
   }, [dispatch]);

  return (
    <div className="app">

      <Router >
        {!user ? 

           <LoginScreen/>
        
         : 
          <Switch> 

           <Route path="/profile" >
           <Nav/>
           <ProfileScreen></ProfileScreen>

           </Route>
           <Route exact path="/">
           <Nav/>

           <HomeScreen/>
           

          </Route>
          
          <Route exact path="/editProfile">

        <EditProfile></EditProfile>           

          </Route>

        </Switch>
        
      }
      
      
    </Router>
      
      
    </div>
  );
}

export default App;
