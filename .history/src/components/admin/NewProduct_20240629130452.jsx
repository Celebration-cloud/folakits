import React from 'react'
import styles from './NewProduct.module.css'
import { TextField } from '@mui/material';
function NewProduct() {
  return (
    <div className={styles.container}>
      <h5>Add New Product</h5>
      <hr />
      <section>
        <div>
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </div>
      </section>
    </div>
  );
}

export default NewProduct
