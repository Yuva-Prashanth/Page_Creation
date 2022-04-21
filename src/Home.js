import React,{useState} from 'react';
import {Redirect} from "react-router";
 
const Home = () => {

  const [auth,setAuth] = useState(flase);
  if(auth){
    return<Redirect to="/dashboard"/>
  }
  return (
    <div>
        <center>
            <h4>Welcome to Homepage</h4>
            <button onClick={()=>setAuth(true)}>Login</button>
        </center>
    </div>
  )
}

export default Home;
