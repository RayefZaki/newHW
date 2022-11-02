import './App.css';
import {  useEffect, useState } from 'react';
import axios from 'axios';
import Create from './componemts/Create';
import GitCreate from './componemts/GitCreate';
import Nav from './componemts/Nav';
import { Router } from 'react-router-dom';
import Router1 from './componemts/Router';

function App() {

  return (
    <>
    <Nav/>
    <Router1/>
{/* <Create></Create>
<GitCreate></GitCreate> */}


</>
  );
}

export default App;
