import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import '../../App.css'; // Import the CSS file

function Assessment() {
  const navigate = useNavigate();

  const start1 = () => {
    navigate('/SocialInteraction');
  };

  const start2 = () => {
    navigate('/Hearing');
  };

  const start3 = () => {
    navigate('/Report');
  };
  return (
    <div>
      <div class="header-container">
             <img src="videos\assets\logo_edited_edited.png" alt="Logo" class="logo" />
             <h1>REFLECT</h1>
             </div>
      <div className="justify-content-center">
        <div>
          <div className="heading">
            <h1 className="question-title">
              Take your Assessment
            </h1>
          </div>
          <div className="card">
            <>
              <h2 className="question-title">1. Social Interaction Analysis</h2>
              <div className="button-container" >
                <button onClick={start1}>Click here to start!</button> {/* Removed curly braces around start1 */}
              </div>
            </>
          </div>
          <div className="card">
            <>
              <h2 className="question-title">2. Hearing Analysis</h2>
              <div className="button-container" >
                <button onClick={start2}>Click here to start!</button> {/* Removed curly braces around start2 */}
              </div>
            </>
          </div>
          <div className="card">
            <>
              <h2 className="question-title">Score Report Generation</h2>
              <div className="button-container" >
                <button onClick={start3}>Generate Report</button> {/* Removed curly braces around start2 */}
              </div>
            </>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Assessment;
