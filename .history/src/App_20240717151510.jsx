import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense, useCallback, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { ActionTypes } from "./store/actions";
import { auth, db } from "../server/firebase/firebaseConfig";
import NotFound from "./components/reuseable/notFound/NotFound";
import Spinner from "./components/reuseable/spinner/Spinner";
import { toaster } from "evergreen-ui";
import { collection, onSnapshot, query, where } from "firebase/firestore";
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

function App() {
  const {session} = useSelector(state => state.user)
  const dispatch = useDispatch()
  const fet = useCallback(
    () => {
      
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          dispatch({ type: ActionTypes.GET_SESSION, payload: user });
          toaster.success("Logged in Successfully");
        } else {
          // User is signed out
          // ...

          dispatch({ type: ActionTypes.GET_SESSION, payload: null });
          dispatch({ type: ActionTypes.GET_USERS, payload: null });
        }
      });
      
        const userCollectionRef = query(
          collection(db, "users"),
          where("email", "==", session && session?.email)
        );
        const sub = onSnapshot(userCollectionRef, (querySnapshot) => {
          const newData = querySnapshot.docs.map((doc) => ({
            ...doc.data(),
          }));
          console.log(newData?.WishList);
          dispatch({ type: ActionTypes.GET_USERS, payload: newData });
          dispatch({
            type: ActionTypes.GET_CART,
            payload: newData?.cart ? newData?.cart : [],
          });
          dispatch({
            type: ActionTypes.GET_WISHLIST,
            payload: newData?.WishList ? newData?.WishList : [],
          });
          dispatch({
            type: ActionTypes.GET_ADDRESS,
            payload: newData?.address ? newData?.address : [],
          });
          dispatch({
            type: ActionTypes.GET_ORDERS,
            payload: newData?.orders ? newData?.orders : [],
          });
        });
      
      return () => {
        unsubscribe();
        sub()
      };
    },
    [dispatch, session],
  )
  
  useEffect(() => {
     fet()
     return ()=> {
      fet()
     }
  }, [fet])

  
  
 
  console.log(session)
  return (
    <BrowserRouter>
      <Suspense fallback={<Spinner />}>
        {" "}
        {/* Provide a fallback while components are loading */}
        <Routes>
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/" element={<FolaKits />} />
          <Route path="/log" element={<Log />} />
          <Route path="/:name" element={<Shop />} />
          <Route path="/Shop/:name" element={<Details />} />

          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          {/* Corrected the path for Cart */}
          {session && (
            <>
              <Route path="/log/wishlist" element={<Log name="wishlist" />} />
              <Route path="/log/orders" element={<Log name="orders" />} />
              <Route path="/log/settings" element={<Log name="settings" />} />
              <Route path="/log/address" element={<Log name="address" />} />
            </>
          )}

          {/* Corrected the path for WishList */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
