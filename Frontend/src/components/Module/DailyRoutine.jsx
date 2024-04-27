import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../Login/module.css'
const DailyRoutine = () => {
  const [tokenCount, setTokenCount] = useState(0);
  const [taskPoints, setTaskPoints] = useState({
    Brush: 0,
    Bath: 0,
    Eat: 0,
    Sleep: 0,
    Homework: 0,
    Movie: 0
  });

  // Function to handle earning tokens
  const earnToken = () => {
    setTokenCount(prevCount => prevCount + 1);
  };

  // Function to handle incrementing task points
  const incrementTask = (task) => {
    setTaskPoints(prevPoints => ({
      ...prevPoints,
      [task]: prevPoints[task] + 1
    }));
  };
  const navigate = useNavigate();

  const start1 = () => {
    navigate('/Module_home_page');
  };

  return (
    <div>

    <div className="container">
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>Your daily routine schedule</h1>
      <table className="schedule" style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            <th style={{ borderBottom: '2px solid #000', padding: '10px', textAlign: 'left' }}>Task</th>
            <th style={{ borderBottom: '2px solid #000', padding: '10px', textAlign: 'left' }}>Points Earned</th>
            <th style={{ borderBottom: '2px solid #000', padding: '10px', textAlign: 'left' }}>Increment</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(taskPoints).map((task, index) => (
            <tr key={index}>
              <td style={{ border: '1px solid #000', padding: '10px' }}>{task}</td>
              <td className="points" style={{ border: '1px solid #000', padding: '10px' }}>{taskPoints[task]}</td>
              <td style={{ border: '1px solid #000', padding: '10px'}}>
                <div className="button-container">
                <button  onClick={() => incrementTask(task)}>+</button>
                  </div></td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="button-container" style={{ marginTop: '20px' }}>
        <p style={{ fontSize: '1.2rem' }}>Tokens Earned: <span id="token-count">{tokenCount}</span></p>
      </div>
      
      <div className="button-container" >
      <button onClick={earnToken} style={{ marginTop: '20px', fontSize: '1.2rem', fontWeight: 'bold' }}>Earn Token</button><br></br>
               
              </div>
              <div className="button-container" >
      
                <button onClick={start1}>Start learning the modules!</button> {/* Removed curly braces around start1 */}
              </div>
    </div>
    </div>
  );
};

export default DailyRoutine;