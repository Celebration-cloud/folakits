import React, { useEffect } from 'react'
import { storage } from '../../../server/firebase/firebaseConfig';
import { getDownloadURL, listAll, ref } from 'firebase/storage';

function useImageList({name}) {
    const [images, setImages] = React.useState([])
    const storageRef = ref(storage, `products/${name}`);
    useEffect(() => {
        listAll(storageRef).then((res) => {
          res.items.map((item) => {
            getDownloadURL(item).then((downloadURL) => {
              setImages((prev) => [...prev, downloadURL]);
              console.log("File available at", downloadURL);
            });
          });
        });
    }, [storageRef])
    
  return {image}
}

export default useImageList
