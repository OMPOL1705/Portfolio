import React, { useState, useEffect } from 'react';
import '../ape/ape.css';
import Draggable from 'react-draggable';
import Navfunc from './navfunc/Navfunc';

const Ape = (props) => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  const handleFullScreenClick = () => {
    setIsFullScreen(!isFullScreen);
  };
  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  useEffect(() => {
    if (isMinimized) {
      const timeoutId = setTimeout(() => {
        window.location.href = '/';
      }, 1500);
      return () => clearTimeout(timeoutId);
    }
  }, [isMinimized]);

  const { text, name } = props;

  const outerBoxBounds = {
    left: -240,
    top: -50,
    right: 200, 
    bottom: 80, 
  };

  return (
    <Draggable bounds={outerBoxBounds}>
      <div className={`main2 ${isFullScreen ? 'fullscreen' : ''} ${isMinimized ? 'minimize' : ''}`} style={{ visibility: name === 'home' ? 'hidden' : 'visible' }}>
        <Navfunc onFullScreenClick={handleFullScreenClick} ontoggleMinimize={toggleMinimize} name={name}/>
        {text}
      </div>
    </Draggable>
  );
};

export default Ape;
