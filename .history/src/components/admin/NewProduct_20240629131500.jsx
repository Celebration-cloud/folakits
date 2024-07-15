import React from 'react'
import styles from './NewProduct.module.css'
import { TextField } from '@mui/material';
function NewProduct() {
  return (
    <div className={styles.container}>
      <h6>Add New Product</h6>
      <hr />
      <section>
        <div>
          <TextField
            id="outlined-basic"
            label=""
            fullWidth
            variant="outlined"
            helperText="hsjs"
          />
        </div>
      </section>
    </div>
  );
}

export default NewProduct
