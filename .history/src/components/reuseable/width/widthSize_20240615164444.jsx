/* eslint-disable no-undef */
const { useEffect, useState } ("react");

function WidthSize(){
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
    return(
        width
    )
}

export default WidthSize
