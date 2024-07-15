/* eslint-disable react/prop-types */
import Crumbs from "../reuseable/breadcrumbs/Crumbs";
import img1 from "/public/red dress.png";
import img2 from "/public/t-shirt.png";
import img3 from "/public/gown.png";
function ShopComponent({name}) {
  const styles = {
    container: {
      fontFamily: "Arial, sans-serif",
      color: "#333",
    },
    header: {
      backgroundColor: "#f0f0f0",
      padding: "30px 0px 30px 0px",
      fontSize: "24px",
      textAlign: "center",
      display: 'inline-flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: "100%",
    },
    breadcrumb: {
      padding: "10px 20px",
      fontSize: "16px",
    },
    sortingSection: {
      display: "flex",
      justifyContent: "space-between",
      padding: "10px 20px",
      alignItems: "center",
    },
    productGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "10px",
      padding: "10px 20px",
    },
    productCard: {
      border: "1px solid #ddd",
      borderRadius: "8px",
      padding: "10px",
      textAlign: "center",
    },
    saleTag: {
      backgroundColor: "#ff4500",
      color: "white",
      padding: "2px 5px",
      fontSize: "14px",
      top: "10px",
      right: "10px",
    },
    productImage: {
      width: "100%",
      height: "150px",
      objectFit: "cover",
    },
    productName: {
      fontSize: "18px",
      margin: "10px 0",
    },
    productPrice: {
      fontSize: "16px",
      fontWeight: "bold",
    },
    originalPrice: {
      textDecoration: "line-through",
      color: "#777",
      fontSize: "14px",
    },
  };

  const products = [
    {
      name: "Baby shoes",
      img: img1,
      price: "$11.00",
      originalPrice: "$16.00",
      onSale: true,
    },
    {
      name: "Baby Socks",
      img: ,
      price: "$15.00",
      originalPrice: "$19.00",
      onSale: true,
    },
    {
      name: "Bear boots",
      img: "",
      price: "$25.00",
      originalPrice: "$28.00",
      onSale: true,
    },
    { name: "Cardigan longsleeve", price: "$66.00", onSale: false },
    // Add more products as needed
  ];

  // ... (rest of the component)

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h2>{name}</h2>
        <Crumbs>Shop</Crumbs>
      </div>
      <div style={styles.breadcrumb}>Home - Shop</div>
      <div style={styles.sortingSection}>
        <span>Showing all 8 results</span>
        <span>Show: 6 12 24 36</span>
        <span>Default sorting</span>
        <span>Filters</span>
      </div>
      <div style={styles.productGrid}>
        {products.map((product, index) => (
          <div key={index} style={styles.productCard}>
            {product.onSale && <div style={styles.saleTag}>ON SALE</div>}
            <img
              src={`path/to/${product.name}.jpg`}
              alt={product.name}
              style={styles.productImage}
            />
            <div style={styles.productName}>{product.name}</div>
            <div style={styles.productPrice}>
              {product.price}
              {product.onSale && (
                <span style={styles.originalPrice}>
                  {" "}
                  {product.originalPrice}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShopComponent;
