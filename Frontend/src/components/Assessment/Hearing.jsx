import React, { useState, useRef } from 'react';
import '../../App.css'; // Import the CSS file
import { useNavigate } from 'react-router-dom'; 
function Hearing() {
  const [selectedOption1, setSelectedOption1] = useState(null);
  const [selectedOption2, setSelectedOption2] = useState(null);
  const videoRefs = {
    option1: useRef(null),
    option2: useRef(null),
    option2_1: useRef(null),
    option2_2: useRef(null),
  };

  const togglePlayPause = (videoRef) => {
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };
  
  const handleOptionSelect = (option, question) => {
    if (question === 1) {
      setSelectedOption1(option);
    } else if (question === 2) {
      setSelectedOption2(option);
    }
  };

  const handleDocumentClick = (event) => {
    // Pause all videos if clicked outside any video element
    if (!Object.values(videoRefs).some(ref => ref.current.contains(event.target))) {
      Object.values(videoRefs).forEach(ref => {
        if (ref.current) ref.current.pause();
      });
    }
  };

  React.useEffect(() => {
    document.addEventListener('click', handleDocumentClick);
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  const renderVideos = (question) => {
    switch (question) {
      case 1:
        switch (selectedOption1) {
          case 'option1':
            return (
              <div className="custom-video-player-1">
                <video ref={videoRefs.option1} width="720" height="740" autoPlay>
                  <source src="/videos/h1a.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            );
          case 'option2':
            return (
              <div className="custom-video-player-1">
                <video ref={videoRefs.option2} width="720" height="740" autoPlay>
                  <source src="/videos/h1b.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            );
          default:
            return null;
        }
      case 2:
        switch (selectedOption2) {
          case 'option2_1':
            return (
              <div className="custom-video-player-2">
                <video ref={videoRefs.option2_1} width="720" height="740" autoPlay>
                  <source src="/videos/h2a.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            );
          case 'option2_2':
            return (
              <div className="custom-video-player-2">
                <video ref={videoRefs.option2_2} width="720" height="740" autoPlay>
                  <source src="/videos/h2b.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            );
          default:
            return null;
        }
      default:
        return null;
    }
  };
  const navigate = useNavigate();
  const start1 = () => {
    navigate('/Assessment');
  };
  const start2 = () => {
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
              Hearing Analysis
            </h1>
          </div>
          {/* Question video and option buttons */}
          <div className="card">
            {!selectedOption1 && (
              <>
                <h2 className="question-title">1. Hearing a word in the crowd</h2>
                <div className="custom-video-player-1">
                  <video ref={videoRefs.option1} width="720" height="740" >
                    <source src="/videos/h1.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="button-container" >
                    <button onClick={() => togglePlayPause(videoRefs.option1)}>Play/Pause</button>
                  </div>
                <div className="button-container">
                  <button onClick={() => handleOptionSelect('option1', 1)}>A</button>
                  <button onClick={() => handleOptionSelect('option2', 1)}>B</button>
                </div>
              </>
            )}
            {/* Render selected option videos */}
            {selectedOption1 && renderVideos(1)}
          </div>
          <div className="card">
            {!selectedOption2 && (
              <>
                <h2 className="question-title">2. Identifying an animal sound</h2>
                <div className="custom-video-player-2">
                  <video ref={videoRefs.option2_2} width="720" height="740" >
                    <source src="/videos/h2.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="button-container" >
                    <button onClick={() => togglePlayPause(videoRefs.option2_2)}>Play/Pause
                    </button>
                  </div>
                <div className="button-container">
                  <button onClick={() => handleOptionSelect('option2_2', 2)}> A</button>
                  <button onClick={() => handleOptionSelect('option2_1', 2)}> B</button>
                </div>
              </>
            )}
            {/* Render selected option videos */}
            {selectedOption2 && renderVideos(2)}
          </div>
          <div className="card">
                <h2 className="question-title">End of the analysis test</h2>
                <div className="button-container">
                  <button onClick={() => start1()}>Complete and exit</button>
                  <button onClick={() => start2()}>Generate report</button>
                </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hearing;
