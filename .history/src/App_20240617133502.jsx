import { BrowserRouter, Route, Routes, Suspense } from "react-router-dom";
import { lazy } from "react";
import Spinner from "./components/reuseable/spinner/Spinner";

// Lazy load all components
const FolaKits = lazy(() => import("./layout/Homepage/Folakits"));
const Shop = lazy(() => import("./layout/Shop/Shop"));
const Contact = lazy(() => import("./layout/Contact/Contact"));
const About = lazy(() => import("./layout/About/About"));
const Log = lazy(() => import("./layout/Log/Log"));
const Cart = lazy(() => import("./layout/Cart/Cart"));
const WishList = lazy(() => import("./layout/WishList/WishList"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Spinner}>
        {" "}
        {/* Provide a fallback while components are loading */}
        <Routes>
          <Route path="/" element={<FolaKits />} />
          <Route path="/log" element={<Log />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />{" "}
          {/* Corrected the path for Cart */}
          <Route path="/wishlist" element={<WishList />} />{" "}
          {/* Corrected the path for WishList */}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
