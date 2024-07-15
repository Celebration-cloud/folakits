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
      <input cla="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
  <label cla="form-check-label" for="flexCheckChecked">
    Checked checkbox
  </label>
      </form>
     

    </div>
  );
}

export default NewsLetter
