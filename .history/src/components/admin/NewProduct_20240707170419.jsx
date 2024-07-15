import React from 'react'
import styles from './NewProduct.module.css'
import { FormControl, FormHelperText, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import FileUploader from './FileUploader';
import { useForm } from 'react-hook-form';
function NewProduct() {
  const {register, watch, handleSubmit, formState: {errors}} = useForm({
    mode: 'onChange',

  })
  const error = {
    name: {
      required: "Name is required",
      minLength: {
        value: 3,
        message: "Name must be at least 3 characters long",
      },
      maxLength: {
        value: 20,
        message: "Name must be at most 20 characters long",
      },
    },
    description: {
      required: "Description is required",
      minLength: {
        value: 3,
        message: "Description must be at least 3 characters  long",
      },
      maxLength: {
        value: 100,
        message: "Description must be at most 100 characters long",
      },
    },

    price: {
      required: "Price is required",
      minLength: {
        value: 3,
        message: "Price must be at least 3 characters long",
      },
      maxLength: {
        value: 20,
        message: "Price must be at most 20 characters long",
      },
    },
    category: {
      required: "Category is required",
      },

  };
  function onSubmit(data){
    console.log(data)
  }
  return (
    <div className={styles.container}>
      <h6>Add New Product</h6>
      <hr />
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <section className={styles.formInput}>
          <div className={styles.part1}>
            <TextField
              id="outlined-basic"
              label="Name"
              {...register("name", {
                required: error.name.required,
                maxLength: error.name.maxLength.value,
                minLength: error.name.minLength.value,
              })}
              fullWidth
              error={errors.name || errors?.name.length <= errors.name.maxLength.value }
              variant="outlined"
              helperText={() => {
                return (
                  errors.name && <p role="alert">{error.name.required}</p>,
                  errors.name.maxLength.value && (
                    <p role="alert">{error.name.maxLength.message}</p>
                  ),
                  errors.name.minLength.value && (
                    <p role="alert">{error.name.minLength.message}</p>
                  )
                );
              }}
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

        <button type="submit" className="btn btn-primary">
          Add Product
        </button>
      </form>
    </div>
  );
}

export default NewProduct
