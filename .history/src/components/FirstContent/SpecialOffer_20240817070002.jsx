import Button from "../reuseable/button/Button";
// import styles from './SpecialOffer.module.css'
import img1 from "/public/red dress.png";
import { useSelector } from "react-redux";
import { useCountdown } from "../reuseable/countdown/useCountdown";

function SpecialOffer() {
  
  const offer = specialOffers.map
  // Calculate the time left until the target date
  const {timeLeft} = useCountdown()
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

export default SpecialOffer;
