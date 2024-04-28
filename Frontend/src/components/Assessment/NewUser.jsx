import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import '../../App.css'; 

function NewUser() {
  const navigate = useNavigate();

  const start1 = () => {
    navigate('/Assessment');
  };

  const start2 = () => {
    navigate('/Module_home_page');
  };

  return (
 

      <div className="justify-content-center">
                    <div className="header-container">
                <img src="videos\assets\logo_edited_edited.png" alt="Logo" className="logo" />
                <h1>REFLECT</h1>
            </div>
        <div>
          <div className="heading"><br></br><br></br>
            <h1 className="question-title">
              Take your Assessment
            </h1>
          </div>
          <div className="card">
            <>
              <h2 className="question-title">Are you a new user?</h2>
              <div className="button-container" >
                <button onClick={start1}>Click here to start your analysis!</button> {/* Removed curly braces around start1 */}
              </div>
            </>
          </div>
          <div className="card">
            <>
              <h2 className="question-title">Already taken the test?</h2>
              <div className="button-container" >
                <button onClick={start2}>Start learning!</button> {/* Removed curly braces around start2 */}
              </div>
            </>
          </div>
        </div>
      </div>
  
  );
}

export default NewUser;
