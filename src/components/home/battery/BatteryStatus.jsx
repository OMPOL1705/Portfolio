import React, { useEffect, useState } from 'react';
import '../battery/batteryStatus.css';

const BatteryStatus = () => {
  const [batteryInfo, setBatteryInfo] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if ('navigator' in window && 'getBattery' in navigator) {
      const updateBatteryInfo = async () => {
        try {
          const battery = await navigator.getBattery();
          setBatteryInfo({
            level: (battery.level * 100), // Convert to percentage
            charging: battery.charging,
          });
        } catch (error) {
          setError('Battery status retrieval failed.');
          console.error('Battery status retrieval failed:', error);
        }
      };

      // Initial update
      setInterval(() => {
        updateBatteryInfo();
      }, 10);
      

      // Listen for the 'levelchange' event to update on changes
      window.addEventListener('levelchange', updateBatteryInfo);

      return () => {
        window.removeEventListener('levelchange', updateBatteryInfo);
      };
    } else {
      setError('Battery Status API is not supported in this browser.');
    }
  }, []);

  return (
    <div>
      {error ? (
        <p>{error}</p>
      ) : batteryInfo ? (
        <div className='battery'>
          <p><img width="25px" height="25px" src={batteryInfo.charging ? '/icons8-battery-50.png' : '/icons8-battery-50 (1).png'} alt="" />{" "}</p> 
          <p>{batteryInfo.level}%</p>
        </div>
      ) : (
        <p>Loading battery information...</p>
      )}
    </div>
  );
};

export default BatteryStatus;
