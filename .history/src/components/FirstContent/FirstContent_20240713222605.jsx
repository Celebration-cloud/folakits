import styles from './FirstContent.module.css'
import Carousel from './Carousel';
import SpecialOffer from './SpecialOffer';
import Button from '../reuseable/button/Button';
import img1 from '/public/red dress.png';
import img2 from '/public/t-shirt.png'
import img3 from '/public/gown.png'
import { useNavigate } from 'react-router-dom';
function FirstContent() {
  const navigate = useNavigate()
  const categories = [
    {
      id: 1,
      name: `Men's Clothes`,
      describe: `Suspendisse consequat sed velit amet commodo`,
      img: img1,
      path: "Men's clothes",
    },
    {
      id: 2,
      name: `Women's clothes`,
      describe: `Suspendisse consequat sed velit amet commodo`,
      img: img2,
      path: "Women's clothes",
    },
    {
      id: 3,
      name: "Jewelries",
      describe: `Suspendisse consequat sed velit amet commodo`,
      img: img3,
      path: "Jewelry",
    },
    {
      id: 4,
      name: "Shoes",
      describe: `Suspendisse consequat sed velit amet commodo`,
      img: img3,
      path: "Shoes",
    },
  ];
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
        {categories.map((item) => (
          <section
            key={item.id}
            className="bg-card p-4 rounded-lg shadow-md flex items-center space-x-4"
          >
            <div className="flex-1">
              <h2 className="text-xl font-bold text-card-foreground">
                {item.name}
              </h2>
              <p className="text-muted-foreground mt-2">{item.describe}</p>
              <a
                onClick={() => {
                  navigate(`/${itm}`);
                }}
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
              src={item.img}
              width={50}
              height={50}
              alt="T-shirt with 'I ♥ New York' print"
              className="rounded-lg"
            />
          </section>
        ))}
      </article>
    </div>
  );
}

export default FirstContent
