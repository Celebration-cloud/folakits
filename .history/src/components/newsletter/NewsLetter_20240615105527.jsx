
import Input from '../reuseable/input/Input';

function NewsLetter() {
  return (
    <div>
      <h3>
        Join our newsletter. Receive info about promotions, tutorials and new
        pre-built website releases.
      </h3>
      <form>
        <section>
            <div class="mb-3">
  <label htmlfor="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
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
          I can confirm that I have read and accept the <a href='#'> Terms and Conditions.</a>
        </label>
        <button></button>
      </form>
    </div>
  );
}

export default NewsLetter
