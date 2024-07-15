/* eslint-disable no-undef */
import { useEffect, useState } from "react";
li
function useWidthSize(){
    const [width, setWidth] = useState(window.innerWidth)
    useEffect(() => {
        const width = () => {
            setWidth(window.innerWidth)
        }    
        window.addEventListener("resize", width)
      return () => {
        window.removeEventListener('resize', width)
      }
    }, [setWidth])
    return {}
}


export default useWidthSize
