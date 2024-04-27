import React from 'react'
import './Login.css'
import { useNavigate } from "react-router-dom";

function Login(){
    // const [email , setEmail] = useState()
    // const [password , setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
            navigate('/NewUser')
    }
    const handleNewUser = (e) => {
        navigate('/register')
}
    return(
        <div>
            <div class="header-container">
                 <img src="videos\assets\logo_edited_edited.png" alt="Logo" class="logo" />
                 <h1>REFLECT</h1>
                 </div>
        
<div class="login-container">
    <h2>LOGIN</h2>
    <form>
    <input type="email" class="form-control" name = "email" placeholder="Email" 
             onChange={(e) => setEmail(e.target.value)}
             /><br />
     
     <div className="button-container" >
                <button onClick={handleNewUser}>New User?</button> 
              </div>
              <div className="button-container" >
                <button onClick={handleSubmit}>Login</button> 
              </div>
        
    </form>
</div>

</div>
    );
}
export default Login;