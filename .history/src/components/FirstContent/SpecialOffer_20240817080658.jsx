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
    <div className=" p-8 rounded-lg shadow-lg text-center max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-2">Special offer</h2>
      {offer && (
        <>
          <p className="text-muted-foreground mb-4">{offer?.product}</p>
          <div className="mx-auto mb-4">
            <img
              src={offer?.img[0]}
              alt="Baby slippers"
              className="w-full h-2/3"
            />
          </div>

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
            <Button
              onClick={() => navigate(`/Shop/${offer?.product}`)}
              name="Buy now"
            />
          </div>
        </>
      )}
      {!offer && <p className="text-lg">No special offer available</p>}
    </div>
  );
}

export default SpecialOffer;
