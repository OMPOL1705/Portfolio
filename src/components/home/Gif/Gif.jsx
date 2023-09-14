import React from 'react';
import '../Gif/gif.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Mynav from '../mynav/Mynav';
import Ape from '../../ape/Ape';

const Gif = () => {
  return (
    <div className='gif'>
      <div className="gif2">
      <Router> 
        <Routes>
          <Route exact path="/" element={<Ape text={"Home"} name={"home"}/> }
          />
          <Route exact path="/about" element={<Ape text={"About"} name={"So who am I??"}/> }
          /> 
          <Route exact path="/projects" element={<Ape text={"Projects"} name={"Projects I have worked on"}/>}
          /> 
          <Route exact path="/experience" element={<Ape text={"Experience"} name={"Companies I have worked with"}/>}
          /> 
        </Routes>
        <Mynav />
      </Router>
      </div>
    </div>
  )
}

export default Gif
