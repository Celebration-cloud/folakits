import * as React from "react";
import img1 from '/public/Checkered Sweat Shirt Men 3D Mockup (AI style).png'
import img2 from '/public/Necklace 3D Icon Model.png'
import img3 from '/public/Sport Shoes.png'
import img4 from '/public/Women Short Sleeve Tshirt 3D Mockup.png'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import styles from './MenuComponent.module.css'
import { useDispatch } from "react-redux";
import { getCategoryItems } from "../../store/actions/quoteActions";
import { useNavigate } from "react-router-dom";
export default function MenuComponent() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  return (
    <div className={styles.menu}>
      <h4 className="text-xl font-semibold mb-4">Categories</h4>
      <ul className={styles.categories}>
        <li className={styles.category}>
          <img
            src={img1}
            width={40}
            alt="dresses-and-suits"
            className="w-6 h-6"
          />
          <span
            data-bs-dismiss="offcanvas"
            onClick={() => {
              dispatch(getCategoryItems("Men's Clothes")),
                navigate(`/${"Men's Clothes"}`);
            }}
            className="text-secondary-foreground "
          >
            Men Clothes
          </span>
        </li>
        <li className={styles.category}>
          <img
            src={img2}
            width={40}
            alt="blouses-and-tshirts"
            className="w-6 h-6"
          />
          <span
            data-bs-dismiss="offcanvas"
            onClick={() => {
              dispatch(getCategoryItems("Jewelry")),
                navigate(`/${"Jewelry"}`);
            }}
            className="text-secondary-foreground"
          >
            Jewelry
          </span>
        </li>
        <li className={styles.category}>
          <img src={img3} width={40} alt="baby-body" className="w-6 h-6" />
          <span
            data-bs-dismiss="offcanvas"
            onClick={() => {
              dispatch(getCategoryItems("Shoes")),
                navigate(`/${"Shoes"}`);
            }}
            className="text-secondary-foreground"
          >
            Shoes
          </span>
        </li>
        <li className={styles.category}>
          <img
            src={img4}
            width={40}
            alt="jackets-and-coats"
            className="w-6 h-6"
          />
          <span
            data-bs-dismiss="offcanvas"
            onClick={() => {
              dispatch(getCategoryItems("Women's clothes")),
                navigate(`/${"Women's clothes"}`);
            }}
            className="text-secondary-foreground"
          >
            Women Clothes
          </span>
        </li>
      </ul>
      <hr className="border-muted mb-6" />
      <div className={styles.advert}>
        <img
          src={img1}
          style={{ width: "50%", height: "100%" }}
          alt="sleeveless-cardigan"
        />
        <h5 className="">Sleeveless Cardigan</h5>
        <button className={styles.cart}>
          <span>Show details</span>
          <ArrowForwardIosIcon />
        </button>
      </div>
      <div className="flex items-center space-x-2">
        <SupportAgentIcon />
        <span className="text-muted-foreground">+61 (0) 3 8376 6284</span>
      </div>
    </div>
  );
}
