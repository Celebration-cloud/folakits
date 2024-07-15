import img1 from '/public/Screenshot 2024-06-14 155235.png'
import img2 from '/public/Screenshot 2024-06-14 155333.png'
import img3 from '/public/Screenshot 2024-06-14 155435.png'
function Service() {
  const {width} = useWid
  let services;
  if( > 800 ){
    services = {
      display: "inline-flex",
      justifyContent: "space-around",
      alignItems: "center",
      flexWrap: 'wrap',
    };
  }else{
    services = {
      display: "inline-flex",
      justifyContent: "space-around",
      alignItems: "center",
    };
  }
  return (
    <section
      style={{
        display: "inline-flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "30px",
        width: "100%",
        alignItems: "center",
        padding: "0px 50px 0px 50px",
      }}
    >
      <h2 style={{ textAlign: "center" }}>
        FolaKits offers you convenient shopping <br /> experience at any scale
      </h2>
      <article
        style={services}
      >
        <section
          style={{
            display: "inline-flex",
            flexDirection: "column",
            gap: "10px",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <img src={img1} width={150} alt="" />
          <h6>Quick order</h6>
          <p>
            Vitae adipiscing tu enean ligula nibhmolestie id viverra dapilo
            eleifend
          </p>
        </section>
        <section
          style={{
            display: "inline-flex",
            flexDirection: "column",
            gap: "10px",
            textAlign: "center",
            alignItems: "center",
          }}
        >
          <img src={img2} width={180} alt="" />
          <h6>Free delivery</h6>
          <p>
            Vitae adipiscing tu enean ligula nibhmolestie id viverra dapilo
            eleifend
          </p>
        </section>
        <section
          style={{
            display: "inline-flex",
            flexDirection: "column",
            gap: "10px",
            textAlign: "center",
            alignItems: "center",
          }}
        >
          <img src={img3} width={170} alt="" />
          <h6>50 day return</h6>
          <p>
            Vitae adipiscing tu enean ligula nibhmolestie id viverra dapilo
            eleifend
          </p>
        </section>
      </article>
    </section>
  );
}

export default Service
