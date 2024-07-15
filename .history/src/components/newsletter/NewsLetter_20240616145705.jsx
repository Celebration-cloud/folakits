import useWidthSize from "../reuseable/width/useWidthSize";
let sections;
let inputs;
function NewsLetter() {
  const {width} = useWidthSize()
  if(width < 580){
    inputs = { display: "inline-flex", gap: "20px" };
  }else{
    i
  }
  return (
    <div
      style={{
        display: "inline-flex",
        flexDirection: "column",
        width: "100%",
        alignItems: "center",
        backgroundImage: `url('/public/R.jpeg')`,
        color: "white",
        marginTop: "40px",
        backgroundRepeat: "no-repeat",
        backgroundSize: '100%',
      }}
    >
      <section
        style={{
          display: "inline-flex",
          flexDirection: "column",
          gap: "40px",
          padding: "50px",
        }}
      >
        <h2 style={{ textAlign: "center", fontSize: "140%" }}>
          Join our newsletter. <br /> Receive info about promotions, <br />{" "}
          tutorials and new pre-built website <br /> releases.
        </h2>
        <form
          style={{
            display: "inline-flex",
            flexDirection: "column",
            gap: "30px",
          }}
        >
          <section style={{ display: "inline-flex", gap: "20px" }}>
            <div style={{ width: "100%" }}>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Name"
              />
            </div>
            <div style={{ width: "100%" }}>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Email address"
              />
            </div>
          </section>
          <div
            style={{ display: "inline-flex", gap: "10px", marginLeft: "10px" }}
          >
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
      </section>
      <img src="" alt="" />
    </div>
  );
}

export default NewsLetter
