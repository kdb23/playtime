import React, { useState, useEffect } from "react";

const SECOND = 1_000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

function CountdownComponent() {
  // Countdown function
  function Countdown(deadline, interval = SECOND) {
    const [timespan, setTimespan] = useState(new Date(deadline) - Date.now());

    useEffect(() => {
      const intervalId = setInterval(() => {
        setTimespan(new Date(deadline) - Date.now());
      }, interval);

      return () => {
        clearInterval(intervalId);
      };
    }, [deadline, interval]);

    return {
      days: Math.floor(timespan / DAY),
      hours: Math.floor((timespan / HOUR) % 24),
      minutes: Math.floor((timespan / MINUTE) % 60),
      seconds: Math.floor((timespan / SECOND) % 60)
    };
  }

  const countdown = Countdown("2023-10-31T18:30:00");

  return (
    <div>
        <h1>Countdown to Tricking or Treat</h1>
            <div className="timer">
            <div>{countdown.days} days,{countdown.hours} hours, {countdown.minutes} minutes, {countdown.seconds} seconds</div>
            </div>
    </div>
  );
}

export default CountdownComponent;