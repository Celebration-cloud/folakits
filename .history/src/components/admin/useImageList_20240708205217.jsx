import React, { useEffect } from 'react'

function useImageList({name}) {
    const [images, setImages] = React.useState([])
    const storageRef = ref(storage=, `products/${data.name}`);
    useEffect(() => {
        listAll(storageRef).then((res) => {
          res.items.map((item) => {
            getDownloadURL(item).then((downloadURL) => {
              setImages((prev) => [...prev, downloadURL]);
              console.log("File available at", downloadURL);
            });
          });
        });
    }, [])
    
  return {}
}

export default useImageList
