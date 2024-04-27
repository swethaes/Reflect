import { useState } from 'react'
import './App.css'
import Register from './components/Login/Register'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login/Login';
import { Button } from 'react-bootstrap';
import SocialIntraction from './components/Assessment/Sociallnteraction copy';
import Hearing from './components/Assessment/Hearing';

function App() {
  return (
    <>
      <SocialIntraction/>
      <Hearing/>
    </>
  )
}

export default App
