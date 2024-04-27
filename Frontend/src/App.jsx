import { useState } from 'react'
import './App.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login/Login';
import Register from './components/Login/Register';
import { Button } from 'react-bootstrap';
import SocialInteraction from './components/Assessment/Sociallnteraction';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ChatBot from './components/Module/ChatBot';
import Hearing from './components/Assessment/Hearing';
import Assessment from './components/Assessment/Assessment';
import Report from './components/Assessment/Report';
import NewUser from './components/Assessment/NewUser';
import DailyRoutine from './components/Module/DailyRoutine';
import Module_home_page from './components/Module/Module_home_page';
import Positive from './components/Module/Positive';

function App() {
  return (
    <div>
      <ChatBot/>
    <BrowserRouter> 
    <Routes>
      <Route path = '/register' element={ <Register/> }></Route>
      <Route path = '/login' element={ <Login/> }> </Route>
      <Route path = '/SocialInteraction' element={ <SocialInteraction/>}> </Route>
      <Route path = '/Hearing' element={ <Hearing/>}> </Route>
      <Route path = '/Assessment' element={ <Assessment/>}> </Route>
      <Route path = '/Report' element={ <Report/>}> </Route>
      <Route path = '/NewUser' element={ <NewUser/>}> </Route>
      <Route path = '/DailyRoutine' element={ <DailyRoutine/>}> </Route>
      <Route path = '/Module_home_page' element={ <Module_home_page/>}> </Route>
      <Route path = '/Positive' element={ <Positive/>}> </Route>
    </Routes>
</BrowserRouter>
 </div>


  )
}

export default App;


