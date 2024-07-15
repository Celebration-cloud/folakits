// ProductList.js

import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import styles from "./ProductList.module.css";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

export default function ProductList() {
  const rows = [
    {
      id: 1,
      product: "Bass Speaker 1",
      description: "Lorem ipsum dolor sit amet...",
      status: "Available",
      price: 654,
    },
    {
      id: 2,
      product: "Bass Speaker 2",
      description: "Lorem ipsum dolor sit amet...",
      status: "Available",
      price: 134,
    },
    {
      id: 3,
      product: "Bass Speaker 4",
      description: "Lorem ipsum dolor sit amet...",
      status: "Unavailable",
      price: 454,
    },
    {
      id: 4,
      product: "Bass Speaker Venue 8 - 8 - Intel Atom",
      description: "Lorem ipsum dolor sit amet...",
      status: "Available",
      price: 324,
    },
    // Add more products as needed
  ];
  const [data, setData] = React.useState(rows)
  function handleEdit(id) {
    console.log(id);
  }
  function handleDelete(id) {
    setData((prev) =>{return{prev, id: prev.id === id}})
  }
  console.log(data)
  const columns = [
    { field: "id", headerName: "ID", width: 10 },
    { field: "product", headerName: "Product", width: 100 },
    {
      field: "description",
      headerName: "Description",
      width: 100,
    },
    {
      field: "status",
      headerName: "Status",
      width: 100,
      renderCell: (params) => {
        const isAvailable = params.value === "Available";
        return (
          <div
            className={`${styles.quantityCell} ${
              isAvailable ? styles.available : styles.unavailable
            }`}
          >
            {params.value}
          </div>
        );
      },
    },
    {
      field: "price",
      headerName: "Price",
      type: "number",
      width: 100,
    },
    {
      field: "actions",
      headerName: "Edit",
      width: 100,
      renderCell: (params) => (
        <>
          <span
            aria-label="edit"
            style={{ width: "100%", display: "inline-flex", gap: "10px" }}
          >
            <DeleteIcon
              onClick={() => handleDelete(params.row.id)}
              className={styles.action}
            />
            <ArrowRightAltIcon
              onClick={() => handleEdit(params.row)}
              className={styles.action}
            />
          </span>
        </>
      ),
    },
  ];

  
  return (
    <div className={styles.productListContainer}>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={10}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
