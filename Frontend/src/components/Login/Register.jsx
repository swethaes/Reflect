import { useState } from "react";
import './Register.css'
import { Link } from 'react-router-dom';
import axios from 'axios'
import { useNavigate } from "react-router-dom";

function Signup(){
    const [Cname , setCName] = useState()
    const [Cage , setCage] = useState()
    const [Cgender , setCgender] = useState()
    const [Pname , setPname] = useState()
    const [Pemail , setPemail] = useState()
    const navigate = useNavigate()


    const handleSubmit = (e) => {
        navigate('/login')
    }


    return(
        <div>
            
        <div class="header-container">
             <img src="videos\assets\logo_edited_edited.png" alt="Logo" class="logo" />
             <h1>REFLECT</h1>
             </div>
    
<div class="login-container">
<h2>REGISTER</h2>
<form onSubmit = {handleSubmit} >
<input type="C-Name" class="form-control" name = "Cname" placeholder="Child Name" 
         onChange={(e) => setCname(e.target.value)}
         /><br />
<input type="C-Age" class="form-control" name = "Cage" placeholder="Child Age" 
         onChange={(e) => setCage(e.target.value)}
         /><br />
<input type="C-Gender" class="form-control" name = "Cgender" placeholder="Child Gender" 
         onChange={(e) => setCgender(e.target.value)}
         /><br />
<input type="P-Name" class="form-control" name = "Pname" placeholder="Parent Name" 
         onChange={(e) => setPname(e.target.value)}
         /><br />
<input type="P-email" class="form-control" name = "Pemail" placeholder="Parent Email" 
         onChange={(e) => setPemail(e.target.value)}
         /><br />

 <Link class = "login-link" to ='/login'>Existing User?</Link><br></br>
    <div className="button-container" >
                <button onClick={handleSubmit}>Create Account</button> 
              </div>
</form>
</div>

</div>

    );
}
export default Signup;