/* eslint-disable no-unused-vars */
import { useCallback, useEffect, useState } from "react";

export function useCountdown(expireDate){
    const calculateTimeLeft = useCallback(() => {
      const targetDate = new Date(expireDate;
      const now = new Date();
      const timeDifference = targetDate - now;

      const totalSeconds = Math.floor(timeDifference / 1000); // Convert milliseconds to seconds

      const days = Math.floor(totalSeconds / (3600 * 24));
      const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = Math.floor(totalSeconds % 60);

      return { days, hours, minutes, seconds };
    }, []);

    // Initialize the state with the initial time left
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    // Update the countdown every second
    useEffect(() => {
      const timer = setInterval(() => {
        const newTimeLeft = calculateTimeLeft();
        setTimeLeft(newTimeLeft);

        // Stop the timer when the countdown reaches zero
        if (
          newTimeLeft.days === 0 &&
          newTimeLeft.hours === 0 &&
          newTimeLeft.minutes === 0 &&
          newTimeLeft.seconds === 0
        ) {
          clearInterval(timer);
        }
      }, 1000);

      // Clean up the interval when the component unmounts
      return () => clearInterval(timer);
    }, [calculateTimeLeft]);

    return {timeLeft}
}