import React from 'react'
import styles from './NewProduct.module.css'
import { FormControl, FormHelperText, InputLabel, MenuItem, Select, TextField } from '@mui/material';
function NewProduct() {
  return (
    <div className={styles.container}>
      <h6>Add New Product</h6>
      <hr />
      <section>
        <div>
          <TextField
            id="outlined-basic"
            label="Name"
            fullWidth
            variant="outlined"
            helperText="hsjs"
          />
          <TextField
            id="outlined-multiline-flexible"
            label="Description"
            multiline
            fullWidth
            maxRows={5}
            helperText="hsjs"
          />
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Category"
            >
              <MenuItem value={10}>Men's clothes</MenuItem>
              <MenuItem value={20}>Women's clothes</MenuItem>
              <MenuItem value={30}>Jewelry</MenuItem>
            </Select>
            <FormHelperText>With label + helper text</FormHelperText>
          </FormControl>
          <File
        </div>
      </section>
    </div>
  );
}

export default NewProduct
