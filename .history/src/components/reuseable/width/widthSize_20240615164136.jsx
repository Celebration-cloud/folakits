/* eslint-disable no-undef */
const { useEffect, useState } = require("react");

function WidthSize(){
    const [width, setWidth] = useState(window.innerWidth)
    useEffect(() => {
        const width = () => {
            setWidth(window.innerWidth)
        }    
        window.addEventListener("resize", width)
      return () => {
        re
      }
    }, [setWidth])
}
