function NewsLetter() {
  return (
    <div style={{display: "inline-flex", flexDirection: "column", gap: "40px",width: "100%", padding: "20px", alignItems: "center"}}>
        <img src="" alt=""/>
      <h2 style={{textAlign: "center"}}>
        Join our newsletter. <br/> Receive info about promotions, <br/> tutorials and new
        pre-built website <br/> releases.
      </h2>
      <form style={{display: "inline-flex", flexDirection: "column", gap: "30px"}}>
        <section style={{display: "inline-flex", gap: "20px"}}>
          <div className="">
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Name"
            />
          </div>
          <div>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Email address"
            />
          </div>
        </section>
        <div>
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
        </div>
        
        <button>Subscribe now</button>
      </form>
    </div>
  );
}

export default NewsLetter
