import * as React from "react";
import img1 from '/public/Checkered Sweat Shirt Men 3D Mockup (AI style).png'
import img2 from '/public/Necklace 3D Icon Model.png'
import img3 from '/public/Sport Shoes.png'
import img4 from '/public/Women Short Sleeve Tshirt 3D Mockup.png'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import styles from './MenuComponent.module.css'
export default function MenuComponent() {

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Categories</h2>
      <ul className={styles.cater}>
        <li className="">
          <img
            src={img1}
            width={40}
            alt="dresses-and-suits"
            className="w-6 h-6"
          />
          <span className="text-secondary-foreground">Dresses and suits</span>
        </li>
        <li className="">
          <img
            src={img2}
            width={40}
            alt="blouses-and-tshirts"
            className="w-6 h-6"
          />
          <span className="text-secondary-foreground">Blouses & t-shirts</span>
        </li>
        <li className="">
          <img src={img3} width={40} alt="baby-body" className="w-6 h-6" />
          <span className="text-secondary-foreground">Baby body</span>
        </li>
        <li className="">
          <img
            src={img4}
            width={40}
            alt="jackets-and-coats"
            className="w-6 h-6"
          />
          <span className="text-secondary-foreground">Jackets & Coats</span>
        </li>
      </ul>
      <hr className="border-muted mb-6" />
      <div className="">
        <img
          src={img1}
          style={{width: "100%"}}
          alt="sleeveless-cardigan"
          className="w-full h-auto mb-4"
        />
        <h5 className="">Sleeveless Cardigan</h5>
        <button className="w-full p-2 border border-input rounded-md flex items-center justify-center space-x-2">
          <span>Show details</span>
          <ArrowForwardIosIcon/>
        </button>
      </div>
      <div className="flex items-center space-x-2">
        <SupportAgentIcon/>
        <span className="text-muted-foreground">+61 (0) 3 8376 6284</span>
      </div>
    </div>
  );
}
