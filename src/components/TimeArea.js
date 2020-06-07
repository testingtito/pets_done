import React, { useState, useEffect } from 'react'

const TimeArea = () => {
  const [time, setTime] = useState(new Date().toLocaleString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleString())
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <p>The curren time: {time}</p>
    </div>
  )
}

export default TimeArea

