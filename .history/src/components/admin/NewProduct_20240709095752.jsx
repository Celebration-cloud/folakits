/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react'
import styles from './NewProduct.module.css'
import { FormControl, FormHelperText, InputAdornment, InputLabel, MenuItem, OutlinedInput, Select, TextField } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import FileUploaders from './FileUploaders';
import { getDownloadURL, listAll, ref, uploadBytes } from 'firebase/storage';
import { storage } from '../../../server/firebase/firebaseConfig';
import { toaster } from 'evergreen-ui';
function NewProduct() {
  const [files, setFiles] = useState(null)
  const [images, setImages] = useState([])
  // console.log(images)
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      name: "",
      description: "",
      category: "",
    },
  });
  
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
      required: { value: true, message: "Category is required" },
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
  async function onSubmit(data){
    try {
      // Example: Upload multiple images
      files.forEach((file) => {
        const storageRef = ref(storage, `products/${data.name}/${file.name}`);
        uploadBytes(storageRef, file).then((snapshot) => {
          console.log("Image uploaded successfully!", snapshot);
        });
      });

      const storageRef = ref(storage, `products/${data.name}`);
      listAll(storageRef).then((res) => {
        res.items.forEach((item) => {
          getDownloadURL(item).then((downloadURL) => {
            console.log("File available at", downloadURL);
            setImages(prev => [...prev, downloadURL]);

      });
        })
      })
      
      const res = {
        name: data?.name,
        description: data?.description,
        category: data?.category,
        brand: data?.brand,
        price: parseInt(data?.price),
        quantity: parseInt(data?.quantity),
        img: images,
      };

      console.log(res);
      toaster.success("image sent");
      
    } catch (error) {
      toaster.danger("not successful", error.message)
    } finally{
      setImages
    }
    
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
                  required: error.category.required,
                }}
                render={({ field }) => (
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    {...field}
                    label="Category"
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

            <FileUploaders image={setFiles} />
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
            <FormControl fullWidth>
              <InputLabel
                error={!!errors?.price}
                htmlFor="outlined-adornment-amount"
              >
                Sale Price
              </InputLabel>
              <Controller
                name="price"
                control={control}
                rules={{
                  required: "Sale Price is required",
                  min: {
                    value: 0,
                    message: "Sale Price must be greater than or equal to 0",
                  },
                }}
                render={({ field }) => (
                  <OutlinedInput
                    id="outlined-adornment-amount"
                    {...field}
                    type="number"
                    startAdornment={
                      <InputAdornment position="start">$</InputAdornment>
                    }
                    label="Sale Price"
                    error={!!errors?.price}
                  />
                )}
              />
              {errors?.price && (
                <FormHelperText error={!!errors?.price}>
                  <p role="alert">{errors?.price.message}</p>
                </FormHelperText>
              )}
            </FormControl>
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
        {images && images?.map((idx, item )=> (
          <div key={idx} className="image-container">
            <img src={item} width={100} height={50} alt={item.name} />
          </div>
        ))}
        <button type="submit" className="btn btn-primary">
          Add Product
        </button>
      </form>
    </div>
  );
}

export default NewProduct
