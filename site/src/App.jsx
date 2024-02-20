
import './App.css'
// import Login from './components/login/Login'
// import Signup from './components/signup/Signup'
import React, { useState } from 'react';
import Dashboard from './components/dashboard/Dashboard';
import Nav from './components/navigation/Nav';



function App() {
 

  return (
    <>
     
      {/* <Login/>
      <Signup/> */}   
      <Nav/>
      <Dashboard/>

       
    </>
  )
}

export default App
