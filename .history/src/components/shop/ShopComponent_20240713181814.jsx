/* eslint-disable react/prop-types */
import img1 from "/public/red dress.png";
import img2 from "/public/t-shirt.png";
import img3 from "/public/gown.png";
import CardComponent from "../reuseable/card/CardComponent";
import BreadLink from "../reuseable/breadlink/BreadLink";
import { useEffect, useState } from "react";
import styles from './ShopComponent.module.css'
import { FormControl, InputLabel, MenuItem, Pagination, Select } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getItems } from "../../store/actions/quoteActions";
function ShopComponent({name}) {
   const { loading, error, products } = useSelector((state) => state.product);
   const dispatch = useDispatch()
  const itemsPerPage = 10;
  const [sortType, setSortType] = useState("latest");
  const [filteredProducts, setFilteredProducts] = useState(products);
  console.log(sortType, filteredProducts);
  // ... (rest of the component)
  
  const sortProducts = (type) => {
    const sortedProducts = [...filteredProducts];
    switch (type) {
      case "priceLowHigh":
        sortedProducts.sort(
          (a, b) =>
            a.price - b.price
        );
        break;
      case "priceHighLow":
        sortedProducts.sort(
          (a, b) =>
            b.price - a.price
        );
        break;
      // Add more sorting cases as needed
    }
    setFilteredProducts(sortedProducts);
    setSortType(type);
  };

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentItems = filteredProducts.slice(startIndex, endIndex);

  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage);
  };
  useEffect(() => {
    if(name === "Shop")
    dispatch(getItems(name))
    }, [dispatch, name])

  return (
    <div className={styles.container}>
      <BreadLink name={name}>Shop</BreadLink>
      <span style={{ marginLeft: "20px", padding: "10px" }}>
        Showing all {filteredProducts.length} results
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
              <MenuItem value="priceLowHigh">Price: Low to High</MenuItem>
              <MenuItem value="priceHighLow">Price: High to Low</MenuItem>
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
        { currentItems?.map((product, index) => (
          <CardComponent key={index} product={product} />
        ))}
        {currentItems.length === 0 && (
          <div className={styles.noProducts}>
            No products found
            </div>
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
        <div className="offcanvas-body"></div>
      </div>
    </div>
  );
}

export default ShopComponent;
