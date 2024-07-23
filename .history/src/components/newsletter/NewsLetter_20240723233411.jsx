import useWidthSize from "../reuseable/width/useWidthSize";
import img1 from "/public/";
let sections = {
      display: "inline-flex",
      flexDirection: "column",
      width: "100%",
      alignItems: "center",
      backgroundImage: `url(${img1})`,
      color: "white",
      marginTop: "0px",
      backgroundRepeat: "no-repeat",
      backgroundSize: "100%",
    };
let inputs;
let content = {
  display: "inline-flex",
  flexDirection: "column",
  gap: "40px",
  padding: "50px",
};
function NewsLetter() {
  const {width} = useWidthSize()
  if(width < 780){
    inputs = { display: "inline-flex", gap: "20px", flexWrap: "wrap" };
    sections = {
      ...sections,
      backgroundSize: "cover",
    };
  }else{
    inputs = { display: "inline-flex", gap: "20px" };
    sections 
  }
  if(width < 465){
    content = {...content, padding: "20px"}
  }
  return (
    <div
      style={sections}
    >
      <section
        style={content}
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
          <section style={inputs}>
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
            />
            <label className="form-check-label" htmlFor="flexCheckChecked">
              I can confirm that I have read and accept the{" "}
              <a href="#"> Terms and Conditions.</a>
            </label>
          </div>

          <button style={{backgroundColor: "black", padding: "10px", borderRadius: "5px"}}>Subscribe now</button>
        </form>
      </section>
      <img src="" alt="" />
    </div>
  );
}

export default NewsLetter
