import { useEffect, useState } from 'react';
import Button from '../reuseable/button/Button';
import styles from './SpecialOffer.module.css'
import img1 from "/public/red dress.png";
function SpecialOffer() {
  const targetDate = '2023-12-31'
  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const targetTime = new Date(targetDate).getTime();
    const timeDifference = targetTime - now;

    if (timeDifference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

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
      <button className="bg-secondary text-secondary-foreground hover:bg-secondary/80 px-4 py-2 rounded-lg border border-[var(--border)]">
        <B
      </button>
    </div>
  );
}

export default SpecialOffer
