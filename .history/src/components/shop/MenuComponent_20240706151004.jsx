import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import { ListSubheader } from "@mui/material";
import styles from './MenuComponent.module.css'
export default function MenuComponent() {
  const [open, setOpen] = React.useState(true);
  const [open1, setOpen1] = React.useState(true);
  const [open2, setOpen2] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  const handleClick1 = () => {
    setOpen1(!open1);
  };
  const handleClick2 = () => {
    setOpen2(!open2);
  };

  return (
    <div class="p-4">
      <h2 class="text-xl font-semibold mb-4">Categories</h2>
      <ul class="space-y-2 mb-6">
        <li class="flex items-center space-x-2 p-2 bg-secondary rounded-md">
          <img
            src="https://openui.fly.dev/openui/24x24?text=👗.svg"
            alt="dresses-and-suits"
            class="w-6 h-6"
          />
          <span class="text-secondary-foreground">Dresses and suits</span>
        </li>
        <li class="flex items-center space-x-2 p-2 bg-secondary rounded-md">
          <img
            src="https://openui.fly.dev/openui/24x24?text=👕.svg"
            alt="blouses-and-tshirts"
            class="w-6 h-6"
          />
          <span class="text-secondary-foreground">Blouses & t-shirts</span>
        </li>
        <li class="flex items-center space-x-2 p-2 bg-secondary rounded-md">
          <img
            src="https://openui.fly.dev/openui/24x24?text=👶.svg"
            alt="baby-body"
            class="w-6 h-6"
          />
          <span class="text-secondary-foreground">Baby body</span>
        </li>
        <li class="flex items-center space-x-2 p-2 bg-secondary rounded-md">
          <img
            src="https://openui.fly.dev/openui/24x24?text=🧥.svg"
            alt="jackets-and-coats"
            class="w-6 h-6"
          />
          <span class="text-secondary-foreground">Jackets & Coats</span>
        </li>
        <li class="flex items-center space-x-2 p-2 bg-secondary rounded-md">
          <img
            src="https://openui.fly.dev/openui/24x24?text=🧦.svg"
            alt="shoes-and-socks"
            class="w-6 h-6"
          />
          <span class="text-secondary-foreground">Shoes & socks</span>
        </li>
        <li class="flex items-center space-x-2 p-2 bg-secondary rounded-md">
          <img
            src="https://openui.fly.dev/openui/24x24?text=🥔.svg"
            alt="spuds"
            class="w-6 h-6"
          />
          <span class="text-secondary-foreground">Spuds</span>
        </li>
        <li class="flex items-center space-x-2 p-2 bg-secondary rounded-md">
          <img
            src="https://openui.fly.dev/openui/24x24?text=👜.svg"
            alt="caps-and-accessories"
            class="w-6 h-6"
          />
          <span class="text-secondary-foreground">Caps & Accessories</span>
        </li>
      </ul>
      <hr class="border-muted mb-6" />
      <div class="p-4 bg-accent rounded-md mb-6">
        <img
          src="https://placehold.co/100x100"
          alt="sleeveless-cardigan"
          class="w-full h-auto mb-4"
        />
        <h3 class="text-lg font-semibold mb-2">Sleeveless Cardigan</h3>
        <button class="w-full p-2 border border-input rounded-md flex items-center justify-center space-x-2">
          <span>Show details</span>
          <img
            src="https://openui.fly.dev/openui/24x24?text=➡️.svg"
            alt="arrow-right"
            class="w-4 h-4"
          />
        </button>
      </div>
      <div class="flex items-center space-x-2">
        <img
          src="https://openui.fly.dev/openui/24x24?text=📞.svg"
          alt="phone-icon"
          class="w-6 h-6"
        />
        <span class="text-muted-foreground">+61 (0) 3 8376 6284</span>
      </div>
    </div>
  );
}
