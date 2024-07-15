import React from 'react'
import styles from './NewProduct.module.css'
import { FormControl, FormHelperText, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import FileUploader from './FileUploader';
import { useForm } from 'react-hook-form';
function NewProduct() {
  const {register, watch, handleSubmit, formState: {errors}} = useForm({})
  return (
    <div className={styles.container}>
      <h6>Add New Product</h6>
      <hr />
      <form className={styles.form}>
        <section className={styles.formInput}>
          <div className={styles.part1}>
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
                <MenuItem value="Men's clothes">Men's clothes</MenuItem>
                <MenuItem value="Women's clothes">Women's clothes</MenuItem>
                <MenuItem value="Jewelry">Jewelry</MenuItem>
              </Select>
              <FormHelperText>With label + helper text</FormHelperText>
            </FormControl>
            <FileUploader />
          </div>
          <div className={styles.part2}>
            <TextField
              id="outlined-basic"
              label="Brand"
              fullWidth
              variant="outlined"
              helperText="hsjs"
            />
            <TextField
              id="outlined-basic"
              label="Sale Price"
              type="number"
              fullWidth
              variant="outlined"
              helperText="hsjs"
            />
            <TextField
              id="outlined-basic"
              label="Quantity"
              type="number"
              fullWidth
              variant="outlined"
              helperText="hsjs"
            />
          </div>
        </section>

        <button type="button" className="btn btn-primary">
          Add Product
        </button>
      </form>
    </div>
  );
}

export default NewProduct
