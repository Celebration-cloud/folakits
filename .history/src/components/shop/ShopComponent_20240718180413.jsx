/* eslint-disable react/prop-types */
import CardComponent from "../reuseable/card/CardComponent";
import BreadLink from "../reuseable/breadlink/BreadLink";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import styles from './ShopComponent.module.css'
import { FormControl, InputLabel, MenuItem, Pagination, Select } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryItems, getItemOrders, getItems } from "../../store/actions/quoteActions";
import { useParams } from "react-router-dom";
import PriceRangeFilter from "./PriceRangeFilter";
function ShopComponent() {
  const { products } = useSelector((state) => state.product);
  const { userData } = useSelector((state) => state.user);
  const productRef = useRef();
  const wishlistRef = useRef();
  const dispatch = useDispatch();
  const { name } = useParams();
  const [sortType, setSortType] = useState("latest");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  productRef.current = products;
  wishlistRef.current = userData ? userData[0]?.wishlist;

  console.log( products, wishlistRef.current, userData), 
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [dispatch]);

  const fet = useCallback(() => {
    if (name === "Shop" || name === "") {
      dispatch(getItems(name));
    }

    dispatch(getItemOrders(sortType));
    if (["Men's clothes", "Women's clothes", "Jewelry"].includes(name)) {
      dispatch(getCategoryItems(name));
    }
  }, [dispatch, name, sortType]);
  
  useEffect(() => {
    // setWishlist(wishes);
    return fet
    
  }, [fet]);

  const sortProducts = useCallback((type) => {
    setSortType(type);
  }, []);

  const totalPages = Math.ceil(productRef.current?.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentItems = productRef.current?.slice(startIndex, endIndex);

  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className={styles.container}>
      <BreadLink name={name}>Shop</BreadLink>
      <span style={{ marginLeft: "20px", padding: "10px" }}>
        Showing all {productRef.current?.length} results
      </span>
      <div className={styles.sortingSection}>
        <div className={styles.sort}>
          <FormControl>
            <InputLabel id="demo-simple-select-label">Sort by</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Default"
              value={sortType}
              onChange={(e) => sortProducts(e.target.value)}
            >
              <MenuItem value="latest">Latest</MenuItem>
              <MenuItem value="lowToHigh">Price: Low to High</MenuItem>
              <MenuItem value="highToLow">Price: High to Low</MenuItem>
            </Select>
          </FormControl>
        </div>

        <span
          style={{ cursor: "pointer" }}
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasWithBothOptions"
          aria-controls="offcanvasWithBothOptions"
        >
          <i className="fa-solid fa-filter"></i>Filters
        </span>
      </div>

      <div className={styles.productGrid}>
        {currentItems?.map((product, index) => (
          <CardComponent
            key={index}
            product={product}
            wishlistRef={wishlistRef}
          />
        ))}
        {currentItems?.length === 0 && (
          <div className={styles.noProducts}>No products found</div>
        )}
      </div>
      <div className={styles.paginate}>
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
        />
      </div>

      <div
        className="offcanvas offcanvas-start"
        data-bs-scroll="true"
        tabIndex="-1"
        id="offcanvasWithBothOptions"
        aria-labelledby="offcanvasWithBothOptionsLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">
            Folakits
          </h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <PriceRangeFilter />
        </div>
      </div>
    </div>
  );
}

export default ShopComponent;
