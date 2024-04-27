import alanBtn from '@alan-ai/alan-sdk-web';
import React,{useEffect} from 'react';

function ChatBot() {
  useEffect(() => {
    alanBtn({
        key: '684291ad8355ecb7df7a0628d63153462e956eca572e1d8b807a3e2338fdd0dc/stage',
        onCommand: (commandData) => {
          if (commandData.command === 'go:back') {
            // Call the client code that will react to the received command
          }
        }
    });
  }, []);

  return (
    <>
    <div>
    </div>
    </>
  )
}

export default ChatBot
