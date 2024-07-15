import Button from '../reuseable/button/Button';
import styles from './SpecialOffer.module.css'
import img1 from "/public/red dress.png";
function SpecialOffer() {
  return (
    <div className="bg-[var(--background)] text-[var(--foreground)] p-8 rounded-lg shadow-lg text-center max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-2">Special offer</h2>
      <p className="text-muted-foreground mb-4">Baby slippers</p>
      <img
        src="https://placehold.co/150x150"
        alt="Baby slippers"
        className="mx-auto mb-4"
      />
      <div className="flex justify-center space-x-4 mb-6">
        <div>
          <p className="text-3xl font-bold">00</p>
          <p className="text-muted-foreground">days</p>
        </div>
        <div>
          <p className="text-3xl font-bold">00</p>
          <p className="text-muted-foreground">hours</p>
        </div>
        <div>
          <p className="text-3xl font-bold">00</p>
          <p className="text-muted-foreground">minutes</p>
        </div>
        <div>
          <p className="text-3xl font-bold">00</p>
          <p className="text-muted-foreground">seconds</p>
        </div>
      </div>
      <button className="bg-secondary text-secondary-foreground hover:bg-secondary/80 px-4 py-2 rounded-lg border border-[var(--border)]">
        Buy now <span aria-hidden="true">→</span>
      </button>
    </div>
  );
}

export default SpecialOffer
