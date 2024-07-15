import * as React from "react";
import img1 from '/public/Checkered Sweat Shirt Men 3D Mockup (AI style).png'
import img2 from '/public/Necklace 3D Icon Model.png'
import img3 from '/public/Sport Shoes.png'
import img4 from '/public/Women Short Sleeve Tshirt 3D Mockup.png'
import styles from './MenuComponent.module.css'
export default function MenuComponent() {

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Categories</h2>
      <ul className="">
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
      <div className="p-4 bg-accent rounded-md mb-6">
        <img
          src="https://placehold.co/100x100"
          alt="sleeveless-cardigan"
          className="w-full h-auto mb-4"
        />
        <h3 className="text-lg font-semibold mb-2">Sleeveless Cardigan</h3>
        <
      </div>
      <div className="flex items-center space-x-2">
        <img
          src="https://openui.fly.dev/openui/24x24?text=📞.svg"
          alt="phone-icon"
          className="w-6 h-6"
        />
        <span className="text-muted-foreground">+61 (0) 3 8376 6284</span>
      </div>
    </div>
  );
}
