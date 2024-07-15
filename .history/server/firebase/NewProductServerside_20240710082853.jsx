import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import { db, storage } from "./firebaseConfig";
import { toaster } from "evergreen-ui";
import { addDoc, collection } from "firebase/firestore";

const handleImageUpload = async (file, data) => {
  const storageRef = ref(storage, `products/${data.name}/${file.name}`);
  await uploadBytes(storageRef, file);
  console.log("Image uploaded successfully!");
};
const submitProduct = async (data, downloadURLs) => {
  try {
    const details = {
      name: data.name,
      description: data.description,
      category: data.category,
      brand: data.brand,
      price: parseInt(data.price),
      quantity: parseInt(data.quantity),
      img: downloadURLs,
    };
    await addDoc(collection(db, "products", data.name), details);
    console.log(data);
    toaster.success("product added");
  } catch (error) {
    toaster.warning(error.message);
  }
};
const fetchDownloadURLs = async (data, setImages) => {
  try {
    const storageRef = ref(storage, `products/${data.name}`);
    const res = await listAll(storageRef);
    const downloadURLs = await Promise.all(
      res.items.map(async (item) => {
        const url = await getDownloadURL(item);
        return url;
      })
    );
    setImages(downloadURLs);
    await submitProduct(data, downloadURLs);
    console.log("Files available at:", downloadURLs);
  } catch (error) {
    toaster.danger(error.message);
  }
};

const onSubmit = async (data, files) => {
  try {
    if (files) {
      await Promise.all(files.map((file) => handleImageUpload(file, data)));
    }

    await fetchDownloadURLs(data, set);

    toaster.success("Images sent");
  } catch (error) {
    toaster.danger("Not successful", error.message);
  } finally {
    toaster.notify("Completed");
  }
};

