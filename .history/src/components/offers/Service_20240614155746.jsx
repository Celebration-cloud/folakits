import styles from "./Service.module.css"
import img1 from '/public/Screenshot 2024-06-14 155235.png'
import img2 from '/public/Screenshot 2024-06-14 155333.png'
import img3 from '/public/Screenshot 2024-06-14 155435.png'
function Service() {
  return (
    <section
      style={{
        display: "inline-flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "100%",
        alignItems: "center",
        padding: "0px 50px 0px 50px",
      }}
    >
      <h2 style={{ textAlign: "center" }}>
        FolaKits offers you convenient shopping experience <br /> at any scale
      </h2>
      <article
        style={{
          display: "inline-flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <section
          style={{
            display: "inline-flex",
            flexDirection: "column",
            gap: "10px",
            textAlign: "center",
          }}
        >
          <img src={img1} alt="" />
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
          }}
        >
          <img src={img2} alt="" />
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
          }}
        >
          <img src={img3} alt="" />
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
