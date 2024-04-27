import React, { useState, useRef } from 'react';
import './Positive.css'

const Positive = () => {
  const [praiseMessage, setPraiseMessage] = useState('');
  const videoRef = useRef(null);

  // Function to handle positive behavior
  const acknowledgeBehavior = () => {
    // Generate a random praise message
    const messages = [
      "Great job!",
      "You're doing amazing!",
      "Keep up the good work!",
      "Fantastic effort!",
      "You're a superstar!",
      "Well done!",
      "You're making great progress!",
      "I'm proud of you!",
    ];
    const randomIndex = Math.floor(Math.random() * messages.length);
    const message = messages[randomIndex];

    // Set the praise message
    setPraiseMessage(message);
  };

  const togglePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };

  return (
    <div>
    <div class="header-container">
    <img src="videos\assets\logo_edited_edited.png" alt="Logo" class="logo" />
    <h1>REFLECT</h1>
    </div>
    <div className="container">
      <h1>Positive Reinforcement App</h1>
        <video ref={videoRef} width="720" height="740" autoPlay>
          <source src="/videos/modul1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

      <div className="button-container" >
                <button onClick={togglePlayPause}>Play/Pause</button> 
              </div>
              <div className="button-container" >
                <button onClick={acknowledgeBehavior}>Acknowledge Behavior</button> 
              </div>

      {praiseMessage && <p>{praiseMessage}</p>}
    </div>
    </div>
  );
};

export default Positive;
