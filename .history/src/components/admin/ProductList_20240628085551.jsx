// ProductList.js
// import { makeStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import styles from "./ProductList.module.css"; // Import your CSS module

// const useStyles = makeStyles({
//   table: {
//     minWidth: 650,
//   },
// });

const ProductList = () => {
//   const classes = useStyles();
    const products = [
      {
        id: 1,
        name: "Bass Speaker 1",
        description: "Lorem ipsum is simply dummy text.",
        quantity: 454,
        price: 299,
        image: "product1.jpg", // Replace with actual image URL
      },
      {
        id: 2,
        name: "Bass Speaker 2",
        description: "Lorem Ipsum is simply dummy text.",
        quantity: 134,
        price: 987,
        image: "product2.jpg", // Replace with actual image URL
      },
      // Add more products as needed
    ];

  return (
    <TableContainer component={Paper}>
      <Table className={styles} aria-label="product table">
        <TableHead>
          <TableRow>
            <TableCell>Image</TableCell>
            <TableCell>Product</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Quantity</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.id}>
              <TableCell>
                <img
                  src={product.image}
                  alt={product.name}
                  className={styles.productImage}
                />
              </TableCell>
              <TableCell>{product.name}</TableCell>
              <TableCell>{product.description}</TableCell>
              <TableCell>{product.quantity}</TableCell>
              <TableCell>${product.price}</TableCell>
              <TableCell>
                <IconButton aria-label="edit">
                  <EditIcon />
                </IconButton>
                <IconButton aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProductList;
