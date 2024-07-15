/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import styles from './NewProduct.module.css'
import { FormControl, FormHelperText, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import FileUploader from './FileUploader';
import { Controller, useForm } from 'react-hook-form';
function NewProduct() {
  const {
    register,
    watch,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      name: "",
      description: "",
      category: "",
      price: 0,
      image: "",
      quantity: 0,
    },
  });
  console.log(errors)
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
    
    category: {
      required: "Category is required",
      },
    brand: {
      required: "brand is required",
      minLength: {
        value: 3,
        message: "brand must be at least 3 characters long",
      },
      maxLength: {
        value: 20,
        message: "brand must be at most 20 characters long",
      },
    },
    price: {
      required: "Price is required",
      min: {
        value: 1,
        message: "Price must be at least 1 quantity long",
      },
    },
    quantity: {
      required: "quantity is required",
      min: {
        value: 1,
        message: "quantity must be at least 1 quantity long",
      },
    },

  };
  function onSubmit(data){
    console.log(watch(data))
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
                maxLength: error.name.maxLength,
                minLength: error.name.minLength,
              })}
              fullWidth
              error={errors?.name}
              variant="outlined"
              helperText={
                errors?.name && <p role="alert">{errors?.name.message}</p>
              }
            />
            <TextField
              id="outlined-multiline-flexible"
              label="Description"
              {...register("description", {
                required: error.description.required,
                maxLength: error.description.maxLength,
                minLength: error.description.minLength,
              })}
              error={errors?.description}
              multiline
              fullWidth
              maxRows={5}
              helperText={
                errors?.description && (
                  <p role="alert">{errors?.description.message}</p>
                )
              }
            />
            <FormControl error={errors?.category} fullWidth>
              <InputLabel id="demo-simple-select-label">Category</InputLabel>
              <Controller
                name="category"
                control={control}
                rules={{
                  required: "Category is required",
                }}
                render={({ field }) => (
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    {...field}
                  >
                    <MenuItem value="Men's clothes">Men's clothes</MenuItem>
                    <MenuItem value="Women's clothes">Women's clothes</MenuItem>
                    <MenuItem value="Jewelry">Jewelry</MenuItem>
                  </Select>
                )}
              />
              {errors?.category && (
                <FormHelperText>
                  <p role="alert">{errors?.category.message}</p>
                </FormHelperText>
              )}
            </FormControl>

            <FileUploader />
          </div>
          <div className={styles.part2}>
            <TextField
              id="outlined-basic"
              label="Brand"
              error={errors?.brand}
              {...register("brand", {
                required: error.brand.required,
                maxLength: error.brand.maxLength,
                minLength: error.brand.minLength,
              })}
              fullWidth
              variant="outlined"
              helperText={
                errors?.brand && <p role="alert">{errors?.brand.message}</p>
              }
            />
            <TextField
              id="outlined-basic"
              label="Sale Price"
              error={errors?.price}
              {...register("price", {
                required: error.price.required,
                min: error.price.min,
              })}
              type="number"
              fullWidth
              variant="outlined"
              helperText={
                errors?.price && <p role="alert">{errors?.price.message}</p>
              }
            />
            <TextField
              id="outlined-basic"
              label="Quantity"
              error={errors?.quantity}
              {...register("quantity", {
                required: error.quantity.required,
                min: error.quantity.min,
              })}
              type="number"
              fullWidth
              variant="outlined"
              helperText={
                errors?.quantity && (
                  <p role="alert">{errors?.quantity.message}</p>
                )
              }
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
