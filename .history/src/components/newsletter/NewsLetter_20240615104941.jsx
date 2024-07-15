import React from 'react'
import Input from '../reuseable/input/Input';

function NewsLetter() {
  return (
    <div>
      <h1>
        Join our newsletter. Receive info about promotions, tutorials and new
        pre-built website releases.
      </h1>
      <form>
        <section>
          <Input>Name</Input>
          <Input>Email Address</Input>
        </section>
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckChecked"
          checked
        />
        <label className="form-check-label" htmlFor="flexCheckChecked">
          I can confirm that I have read and accept the <a href=''> </a>Terms and Conditions.
        </label>
      </form>
    </div>
  );
}

export default NewsLetter
