/* eslint-disable no-undef */
import { useCallback, useEffect, useState } from "react";

function useWidthSize(){
    const [width, setWidth] = useState(window.innerWidth)
    useCallback(
      () => {
        first
      },
      [],
    )
    
    useEffect(() => {
        const width = () => {
            setWidth(window.innerWidth)
        }    
        window.addEventListener("resize", width)
      return () => {
        window.removeEventListener('resize', width)
      }
    }, [setWidth])
    return {width}
}


export default useWidthSize
