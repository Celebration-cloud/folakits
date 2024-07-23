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
import { getCategoryItems, getItems, receiveItem } from "./store/actions/quoteActions";

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
  const { session } = useSelector((state) => state.user);
  const dispatch = useDispatch();
useEffect(() => {
  const handleAuthStateChange = (user) => {
    if (user) {
      // User is signed in
      dispatch({ type: ActionTypes.GET_SESSION, payload: user });
      toaster.success("L")
    } else {
      // User is signed out
      dispatch({ type: ActionTypes.GET_SESSION, payload: null });
      dispatch({ type: ActionTypes.GET_USERS, payload: null });
    }
  };

  // Listen for authentication state changes
  const unsubscribe = onAuthStateChanged(auth, handleAuthStateChange);

  return () => {
    // Cleanup: Unsubscribe from authentication state changes
    unsubscribe();
  };
}, [dispatch, session]);
const fetchUserData = useCallback(
  async() => {
    try {
      const userCollectionRef = query(
        collection(db, "users"),
        where("email", "==", session && session?.email)
      );
      const unsubscribe = onSnapshot(userCollectionRef, (querySnapshot) => {
        const newData = querySnapshot.docs.map((doc) => doc.data());
        
        if (window.location.pathname === "/Shop") {
          dispatch(getItems());
        }
        if (window.location.pathname === "/") {
          dispatch(receiveItem());
        }
        if (
          window.location.pathname === "/Men's clothes" ||
          window.location.pathname === "/Women's clothes" ||
          window.location.pathname === "/Jewelry"
        ) {
          dispatch(getCategoryItems(window.location.pathname?.slice(1)));
        }
        // Dispatch actions
        dispatch({ type: ActionTypes.GET_USERS, payload: newData });
      });

      return () => {
        unsubscribe(); // Cleanup: Unsubscribe from Firestore snapshot
      };
    } catch (error) {
      console.error("Error fetching user data:", error.message);
      // Handle the error (dispatch an action or show a notification)
    }
  },
  [dispatch, session],
)


useEffect(() => {
  

  fetchUserData();
}, [fetchUserData]);


  console.log(session);
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
