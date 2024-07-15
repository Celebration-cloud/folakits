import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { ActionTypes } from "./store/actions";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../server/firebase/firebaseConfig";
// import Spinner from "./components/reuseable/spinner/Spinner";

// Lazy load all components
const AdminDashboard = lazy(() => import('./layout/AdminDashboard/AdminDashboard'))
const FolaKits = lazy(() => import("./layout/Homepage/Folakits"));
const Shop = lazy(() => import("./layout/Shop/Shop"));
const Contact = lazy(() => import("./layout/Contact/Contact"));
const About = lazy(() => import("./layout/About/About"));
const Log = lazy(() => import("./layout/Log/Log"));
const Cart = lazy(() => import("./layout/Cart/Cart"));
const Details = lazy(() => import("./components/details/Details"));
const Spinner = lazy(() => import("./components/reuseable/spinner/Spinner"));
import store from './st'
function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    const productCollectionRef = collection(db, "products");

    const unsubscribe = onSnapshot(productCollectionRef, (querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
      }));
      dispatch({ type: ActionTypes.GET_PRODUCTS, payload: newData });
    });

    return () => {
      // Cleanup function: Unsubscribe from the snapshot listener
      unsubscribe();
    };
  }, [dispatch])
  
  return (
    <BrowserRouter>
      <Suspense fallback={<Spinner />}>
        {" "}
        {/* Provide a fallback while components are loading */}
        <Routes>
          <Route path="/admin" element={<AdminDashboard/>}/>
          <Route path="/" element={<FolaKits />} />
          <Route path="/log" element={<Log />} />
          <Route path="/:name" element={<Shop />} />
          <Route path="/shop/:name" element={<Details/>} />

          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          {/* Corrected the path for Cart */}
          <Route path="/log/wishlist" element={<Log name="wishlist" />} />
          <Route path="/log/orders" element={<Log name="orders" />} />
          <Route path="/log/settings" element={<Log name="settings" />} />
          <Route path="/log/address" element={<Log name="address" />} />
          {/* Corrected the path for WishList */}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
