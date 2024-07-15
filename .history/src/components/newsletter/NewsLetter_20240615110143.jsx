
import Input from '../reuseable/input/Input';
import styles from './NewsLetter.module.css'
function NewsLetter() {
  return (
    <div style={{display: "inline-flex", flexDirection: "column", }}>
      <h3>
        Join our newsletter. Receive info about promotions, tutorials and new
        pre-built website releases.
      </h3>
      <form>
        <section>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Name"
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Email address"
            />
          </div>
        </section>
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckChecked"
          checked
        />
        <label className="form-check-label" htmlFor="flexCheckChecked">
          I can confirm that I have read and accept the{" "}
          <a href="#"> Terms and Conditions.</a>
        </label>
        <button>Subscribe now</button>
      </form>
    </div>
  );
}

export default NewsLetter
