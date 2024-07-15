// ProductList.js

import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import styles from "./OrderList.module.css";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
export default function OrderList() {
  const rows = [
    {
      id: 1,
      customer: "celeb",
      product: "Bass Speaker 1",
      date: `${new Date().getUTCDate()}/${new Date().getUTCMonth()}/${new Date().getUTCFullYear()}`,
      status: "Delivered",
      price: 654,
    },
    {
      id: 2,
      customer: "celeb",
      product: "Bass Speaker 2",
      date: `${new Date().getUTCDate()}/${new Date().getUTCMonth()}/${new Date().getUTCFullYear()}`,
      status: "Processing",
      price: 134,
    },
    {
      id: 3,
      customer: "celeb",
      product: "Bass Speaker 4",
      date: `${new Date().getUTCDate()}/${new Date().getUTCMonth()}/${new Date().getUTCFullYear()}`,
      status: "Cancelled",
      price: 454,
    },
    {
      id: 4,
      customer: "celeb",
      product: "Bass Speaker Venue 8 - 8 - Intel Atom",
      date: `${new Date().getUTCDate()}/${new Date().getUTCMonth()}/${new Date().getUTCFullYear()}`,
      status: "Delivered",
      price: 324,
    },
    // Add more products as needed
  ];
  const [data, setData] = React.useState(rows);
  function handleEdit(id) {
    console.log(id);
  }
  function handleSuccess(id) { 
    const success = data.map(item => item.id === id ? {...item, status: "Delivered"} : item)
    setData(success)
   }
  function handleCancel(id) { 
    const cancel = data.map((item) =>
      item.id === id ? { ...item, status: "Cancelled" } : item
    );
    setData(cancel)
   }
  console.log(data);
  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "customer", headerName: "Customers", width: 150 },
    { field: "product", headerName: "Product", width: 150 },
    {
      field: "date",
      headerName: "Date",
      
      width: 150,
    },
    {
      field: "status",
      headerName: "Status",
      width: 150,
      renderCell: (params) => {
        const isAvailable = params.value === "Delivered";
        const isUnAvailable = params.value === "Cancelled";
        const isProcessing = params.value === "Processing";
        return (
          <div
            className={`${styles.quantityCell} ${
              isAvailable && styles.available
            } ${isUnAvailable && styles.unavailable} ${
              isProcessing && styles.processing
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
      width: 150,
    },
    {
      field: "actions",
      headerName: "Edit",
      width: 150,
      renderCell: (params) => (
        <>
          <span
            aria-label="edit"
            style={{
              width: "100%",
              display: "inline-flex",
              gap: "10px",
              justifyContent: "center",
            }}
          >
            {params.row.status === "Processing" && (
              <>
                <CheckIcon
                  onClick={() => handleSuccess(params.row.id)}
                  className={styles.action}
                />
                <CloseIcon
                  onClick={() => handleCancel(params.row.id)}
                  className={styles.action}
                />
              </>
            )}

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
