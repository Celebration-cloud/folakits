import styles from './FirstContent.module.css'
import Carousel from './Carousel';
import SpecialOffer from './SpecialOffer';
import Button from '../reuseable/button/Button';
import img1 from '/public/red dress.png';
import img2 from '/public/t-shirt.png'
import img3 from '/public/gown.png'
function FirstContent() {
  const categories = [
    { id: 1, name: 'Men's ', img: img1 },
    { id: 2, name: 'T-shirts', img: img2 },
    { id: 3, name: 'Gowns', img: img3 },
    { id: 4, name: 'Gowns', img: img3 },
  ]
  return (
    <div className={styles["first-content"]}>
      <article className={styles["specials"]}>
        <section className={styles["image"]}>
          <Carousel />
        </section>
        <section className={styles["offers"]}>
          <SpecialOffer />
        </section>
      </article>
      <article className={styles["collection"]}>
        <section className="bg-card p-4 rounded-lg shadow-md flex items-center space-x-4">
          <div className="flex-1">
            <h2 className="text-xl font-bold text-card-foreground">
              Caps & Accessories
            </h2>
            <p className="text-muted-foreground mt-2">
              Suspendisse consequat sed velit amet commodo
            </p>
            <a
              href="#"
              className="text-primary mt-4 inline-flex items-center font-semibold hover:underline"
            >
              {" "}
              Buy now{" "}
              <span aria-hidden="true" className="ml-1">
                →
              </span>{" "}
            </a>
          </div>
          <img
            src="https://placehold.co/100x100"
            alt="T-shirt with 'I ♥ New York' print"
            className="rounded-lg"
          />
        </section>
        <div class="bg-card p-4 rounded-lg shadow-md flex items-center space-x-4">
          <div class="flex-1">
            <h2 class="text-xl font-bold text-card-foreground">
              Caps & Accessories
            </h2>
            <p class="text-muted-foreground mt-2">
              Suspendisse consequat sed velit amet commodo
            </p>
            <a
              href="#"
              class="text-primary mt-4 inline-flex items-center font-semibold hover:underline"
            >
              {" "}
              Buy now{" "}
              <span aria-hidden="true" class="ml-1">
                →
              </span>{" "}
            </a>
          </div>
          <img
            src="https://placehold.co/100x100"
            alt="T-shirt with 'I ♥ New York' print"
            class="rounded-lg"
          />
        </div>
        <section>
          <div>
            <h3>
              <strong>Jackets & Coats</strong>
            </h3>
            <p>Suspendisse consequat sed velit amet commodo</p>
            <Button>Buy now</Button>
          </div>
          <div>
            <img src={img3} width={70} alt="" />
          </div>
        </section>
      </article>
    </div>
  );
}

export default FirstContent
