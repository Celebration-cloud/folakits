import Button from "../reuseable/button/Button";
// import styles from './SpecialOffer.module.css'
import { useCountdown } from "../reuseable/countdown/useCountdown";
import { useOffer } from "../reuseable/offer/useOffer";
import { useNavigate } from "react-router-dom";

function SpecialOffer() {
  const {offer} = useOffer()
  const navigate = useNavigate()
  // Calculate the time left until the target date
  const {timeLeft} = useCountdown(offer?.offer_expire.toDate())
  return (
    <div className="bg-[var(--background)] text-[var(--foreground)] p-8 rounded-lg shadow-lg text-center max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-2">Special offer</h2>
      {offer && (
        <>
        </>
      )}
      {!offer && (
        <p className="text-lg">No special offer available</p>
      )}
      
    </div>
  );
}

export default SpecialOffer;
