import { useCallback, useEffect, useState } from 'react';
import Button from '../reuseable/button/Button';
// import styles from './SpecialOffer.module.css'
import img1 from "/public/red dress.png";
function SpecialOffer() {
  
  // Calculate the time left until the target date
  const calculateTimeLeft =  useCallback(
    () => {
      const targetDate = new Date("2024-08-15T19:50:06");
      const now = new Date();
      const timeDifference = targetDate - now;

      const totalSeconds = Math.floor(timeDifference / 1000); // Convert milliseconds to seconds

      const days = Math.floor(totalSeconds / (3600 * 24));
      const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = Math.floor(totalSeconds % 60);

      return { days, hours, minutes, seconds };
    },
    [],
  )
  
  // Initialize the state with the initial time left
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  // Update the countdown every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
      if (
        timeLeft.days === 0 &&
        timeLeft.hours === 0 &&
        timeLeft.minutes === 0 &&
        timeLeft.seconds === 0
      ) {
        clearInterval(timer);
      }
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(timer);
  }, [calculateTimeLeft, timeLeft]);

  return (
    <div className="bg-[var(--background)] text-[var(--foreground)] p-8 rounded-lg shadow-lg text-center max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-2">Special offer</h2>
      <p className="text-muted-foreground mb-4">Baby slippers</p>
      <img
        src={img1}
        width={100}
        height={100}
        alt="Baby slippers"
        className="mx-auto mb-4"
      />
      <div className="flex justify-center space-x-4 mb-6">
        <div>
          <p className="text-3xl font-bold">{timeLeft.days}</p>
          <p className="text-muted-foreground">days</p>
        </div>
        <div>
          <p className="text-3xl font-bold">{timeLeft.hours}</p>
          <p className="text-muted-foreground">hours</p>
        </div>
        <div>
          <p className="text-3xl font-bold">{timeLeft.minutes}</p>
          <p className="text-muted-foreground">minutes</p>
        </div>
        <div>
          <p className="text-3xl font-bold">{timeLeft.seconds}</p>
          <p className="text-muted-foreground">seconds</p>
        </div>
      </div>
      <div className="flex justify-center space-x-4 mb-6">
        <Button name="Buy now" />
      </div>
    </div>
  );
}

export default SpecialOffer
