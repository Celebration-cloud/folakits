// ProductList.js
import img1 from '/public/gown.png'
import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import styles from "./CustomerList.module.css";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

export default function CustomerList() {
  const rows = [
    {
      id: 1,
      address: "Lorem ipsum dolor sit amet...",
      name: "John Doe",
      email: "ckadkn@gmail.com",
      phone: "1234567890",
    },
    {
      id: 2,
      address: "Lorem ipsum dolor sit amet...",
      name: "Jane Doe",
      email: "ckadkn@gmail.com",
      phone: "1234567890",
    },
    {
      id: 3,
      address: "Lorem ipsum dolor sit amet...",
      name: "John Doe",
      email: "ckadkn@gmail.com",
      phone: "1234567890",
    },
    {
      id: 4,
      address: "Lorem ipsum dolor sit amet...",
      name: "Jane Doe",
      email: "ckadkn@gmail.com",
      phone: "1234567890",
    },
    // Add more products as needed
  ];
  const [data, setData] = React.useState(rows);
  function handleEdit(id) {
    console.log(id);
  }
  function handleDelete(id) {
    setData((prev) =>
      prev.filter((item) => {
        return item.id !== id;
      })
    );
  }
  console.log(data);
  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    {
      field: "name",
      headerName: "Name",
      width: 200,
      renderCell: (params) => {
        return (
          <div>
            <img src={img1} width={30} height={30} alt=''/><span>{params.row.name}</span>
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 200,
    },
    {
      field: "phone",
      headerName: "Address",
      width: 200,
    },
    {
      field: "address",
      headerName: "Address",
      width: 200,
    },
    {
      field: "actions",
      headerName: "Edit",
      width: 200,
      renderCell: (params) => (
        <>
          <span
            aria-label="edit"
            style={{ width: "100%", display: "inline-flex", gap: "10px" }}
          >
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
        disableSelectionOnClick
      />
    </div>
  );
}
