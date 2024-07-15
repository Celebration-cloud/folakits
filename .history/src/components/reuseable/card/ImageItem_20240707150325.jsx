/* eslint-disable react/prop-types */
import { useState } from 'react'
import Tooltip from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function ImageItem({product}) {
    const [isHovered, setIsHovered] = useState(false);
     const [open, setOpen] = useState(false);

     const handleClickOpen = () => {
       setOpen(true);
     };

     const handleClose = () => {
       setOpen(false);
     };
      const cardStyle = {
        width: "100%",
        height: "250px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        overflow: "hidden",
        position: "relative",
        cursor: "pointer",
        backgroundColor: "#f8f9fa",
      };

      const imageStyle = {
        width: "100%",
        padding: "30px",
        height: "100%",
        transition: "opacity 0.3s ease",
        opacity: product?.onSale ? (product.img[1] && isHovered ? 0 : 1) : 0.3,
      };
     const hoverImageStyle = {
       ...imageStyle,
       position: "absolute",
       top: 0,
       left: 0,
       opacity: product?.onSale && product.img[1] && isHovered ? 1 : 0,
     };

     const outStock = {
       ...imageStyle,
       position: "absolute",
       top: 0,
       left: 0,
       opacity: !product?.onSale ? 1 : 0,
     };

     const iconStyle = {
       position: "absolute",
       display: "inline-flex",
       flexDirection: "column",
       padding: "10px",
       gap: "10px",
       top: "0px",
       right: "0px",
       opacity: isHovered ? 1 : 0,
       transition: "opacity 0.3s ease",
     };
  return (
    <div
      style={cardStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {product?.onSale ? (
        <>
          <img
            src={product?.img[0]} // Replace with the initial image path
            alt="Initial"
            style={imageStyle}
          />
          {product?.img[1] && (
            <img
              src={product.img[1]} // Replace with the hover image path
              alt="Hover"
              style={hoverImageStyle}
            />
          )}
        </>
      ) : (
        <>
          <img
            src={product?.img[0]} // Replace with the initial image path
            alt="Initial"
            style={imageStyle}
          />
          <div
            style={{
              ...outStock,
              background: "",
              display: "inline-flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <button
              disabled
              style={{
                backgroundColor: "transparent",
                color: "black",
                border: "2px solid black",
              }}
            >
              Out of Stock
            </button>
          </div>
        </>
      )}

      <div style={iconStyle}>
        {/* Render the heart with ECG line icon here */}
        {product?.onSale && (
          <Tooltip title="Add to Cart" placement="left-end">
            <i
              style={{
                backgroundColor: "white",
                padding: "6px",
                borderRadius: "100%",
              }}
              className="fa-solid fa-cart-shopping"
            ></i>
          </Tooltip>
        )}
        <Tooltip title="View Product" placement="left-end">
          <i
            style={{
              backgroundColor: "white",
              padding: "6px",
              borderRadius: "100%",
            }}
            className="fa-solid fa-link"
          ></i>
        </Tooltip>

        <Tooltip title="Add to Wishlist" placement="left-end">
          <i
            style={{
              backgroundColor: "white",
              padding: "6px",
              borderRadius: "100%",
            }}
            className="fa-regular fa-heart"
          ></i>
          {/* <i class="fa-solid fa-heart"></i> */}
        </Tooltip>

        <Tooltip title="Preview" placement="left-end">
          <i
            style={{
              backgroundColor: "white",
              padding: "6px",
              borderRadius: "100%",
            }}
            className="fa-solid fa-maximize"
          ></i>
        </Tooltip>
        <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
            Modal title
          </DialogTitle>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
          <DialogContent dividers>
            <Typography gutterBottom>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
              ac consectetur ac, vestibulum at eros.
            </Typography>
            <Typography gutterBottom>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur
              et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
              auctor.
            </Typography>
            <Typography gutterBottom>
              Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
              cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
              dui. Donec ullamcorper nulla non metus auctor fringilla.
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleClose}>
              Save changes
            </Button>
          </DialogActions>
        </BootstrapDialog>
      </div>
    </div>
  );
}

export default ImageItem
