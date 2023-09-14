import React from 'react';
import '../ape/ape.css';
import Draggable from 'react-draggable';
import Navfunc from './navfunc/Navfunc';

const Ape = (props) => {
  const { text, name } = props;

  const outerBoxBounds = {
    left: -240,
    top: -50,
    right: 200, 
    bottom: 80, 
  };

  return (
    <Draggable bounds={outerBoxBounds}>
      <div className='main2' style={{ visibility: name === 'home' ? 'hidden' : 'visible' }}>
        <Navfunc name={name}/>
        {text}
      </div>
    </Draggable>
  );
};

export default Ape;
