import React, { useCallback, useEffect } from 'react'
import { storage } from '../../../server/firebase/firebaseConfig';
import { getDownloadURL, listAll, ref } from 'firebase/storage';

function useImageList() {
    const [images, setImages] = React.useState([])
    const storageRef = ref(
      storage,
      `products/eccew`
    );
   const fet = useCallback(
      () => {
         listAll(storageRef).then((res) => {
          res.items.map((item) => {
            getDownloadURL(item).then((downloadURL) => {
              setImages((prev) => [...prev, downloadURL]);
              console.log("File available at", downloadURL);
            });
          });
        });
        function remove() {
          setImages([]);
        }
        window.addEventListener("submit", remove);
        return () => {
          window.removeEventListener("submit", remove);
        };
      },
      [storageRef],
    )
    
    useEffect(() => {
     window.addEventListener("load", fe)
     return ( )=>{
        window.removeEventListener("load", fet);
     }
    }, [fet])
    
  return {images}
}

export default useImageList
