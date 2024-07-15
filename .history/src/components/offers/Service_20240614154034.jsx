import styles from "./Service.module.css"
function Service() {
  return (
    <section style={{display: "inline-flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
      <h2>
        <strong style={{}}>
          FolaKits offers you convenient shopping experience at any scale
        </strong>
      </h2>
      <article style={styles.render}>
        <section>
          <img />
          <h6>Quick order</h6>
          <p>
            Vitae adipiscing tu enean ligula nibhmolestie id viverra dapilo
            eleifend
          </p>
        </section>
        <section>
          <img />
          <h6>Free delivery</h6>
          <p>
            Vitae adipiscing tu enean ligula nibhmolestie id viverra dapilo
            eleifend
          </p>
        </section>
        <section>
          <img />
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
