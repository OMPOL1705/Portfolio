import React, { useState, useEffect } from 'react';
import '../navbar/navbar.css';
import BatteryStatus from '../battery/BatteryStatus';

const datearr = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

const formatAMPM = (date) => {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12; // Convert 0 to 12 for AM and keep 12 for PM
  minutes = minutes < 10 ? "0" + minutes : minutes; // Add leading zero for single-digit minutes
  return `${hours}:${minutes} ${ampm}`;
};

const Navbar = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 10); // Update every minute (60,000 milliseconds)

    return () => {
      clearInterval(intervalId); // Clear the interval when the component unmounts
    };
  }, []);

  const formattedTime = formatAMPM(currentTime);

  return (
    <div>
      <div className="homenavbar">
      <div className="tab-icons">
        <div className="circle" style={{backgroundColor: "rgb(241, 55, 55)"}}></div>
        <div className="circle" style={{backgroundColor: "rgb(228, 225, 59)"}}></div>
        <div className="circle" style={{backgroundColor: "rgb(19, 173, 19)"}}></div>
      </div>
        <div className="date">
          <p>{datearr[currentTime.getMonth()] + "    " + currentTime.getDate() + "    " + formattedTime}</p>
        </div>
        <div className="battery">
          <BatteryStatus />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
