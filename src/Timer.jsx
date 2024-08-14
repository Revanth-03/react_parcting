import React, { useState, useEffect } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    console.log("Component mounted");

    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
      console.log("Interval running:", seconds);
    }, 1000);

    // Cleanup function runs when the component is unmounted
    return () => {
      console.log("Component unmounted");
      clearInterval(interval); // Cleanup on unmount
    };
  }, []); // Empty dependency array means this effect runs once on mount

  return <div>Seconds: {seconds}</div>;
}

export default Timer;
