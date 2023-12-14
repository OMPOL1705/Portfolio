import React from 'react';
import {
  Link
} from "react-router-dom";
import '../navfunc/navfunc.css';

const Navfunc = (props) => {
    const {name, onFullScreenClick, ontoggleMinimize} = props;
  return (
    <div>
      <div className="homenavbar1">
        <div className="tab-icons1">
          <Link aria-current="page" to="/">
              <div className="circle1" style={{backgroundColor: "rgb(241, 55, 55)"}}></div>
          </Link>
          <div className="circle1" onClick={ontoggleMinimize} style={{backgroundColor: "rgb(228, 225, 59)"}}></div>
          <div className="circle1" onClick={onFullScreenClick} style={{backgroundColor: "rgb(19, 173, 19)"}}></div>
        </div>
        <div className="tapname">
            <p>{name}</p>
        </div>
      <div>
          
        </div>
      </div>
    </div>
  )
}

export default Navfunc
