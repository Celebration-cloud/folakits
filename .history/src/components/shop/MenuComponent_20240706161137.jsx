import * as React from "react";
import img1 from 
import img2
import img3
import img4
import styles from './MenuComponent.module.css'
export default function MenuComponent() {

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Categories</h2>
      <ul className="space-y-2 mb-6">
        <li className="flex items-center space-x-2 p-2 bg-secondary rounded-md">
          <img
            src="https://openui.fly.dev/openui/24x24?text=👗.svg"
            alt="dresses-and-suits"
            className="w-6 h-6"
          />
          <span className="text-secondary-foreground">Dresses and suits</span>
        </li>
        <li className="flex items-center space-x-2 p-2 bg-secondary rounded-md">
          <img
            src="https://openui.fly.dev/openui/24x24?text=👕.svg"
            alt="blouses-and-tshirts"
            className="w-6 h-6"
          />
          <span className="text-secondary-foreground">Blouses & t-shirts</span>
        </li>
        <li className="flex items-center space-x-2 p-2 bg-secondary rounded-md">
          <img
            src="https://openui.fly.dev/openui/24x24?text=👶.svg"
            alt="baby-body"
            className="w-6 h-6"
          />
          <span className="text-secondary-foreground">Baby body</span>
        </li>
        <li className="flex items-center space-x-2 p-2 bg-secondary rounded-md">
          <img
            src="https://openui.fly.dev/openui/24x24?text=🧥.svg"
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
        <button className="w-full p-2 border border-input rounded-md flex items-center justify-center space-x-2">
          <span>Show details</span>
          <img
            src="https://openui.fly.dev/openui/24x24?text=➡️.svg"
            alt="arrow-right"
            className="w-4 h-4"
          />
        </button>
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
