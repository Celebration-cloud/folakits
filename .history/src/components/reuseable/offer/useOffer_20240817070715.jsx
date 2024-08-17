import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export function useOffer(){
    const { specialOffers } = useSelector((state) => state.product);
    const [offer, setOffer] = useState()
    useEffect(() => {
    setInterval(() => {
        const offerId = Math.floor(Math.random() * specialOffers.length) 
        setOffer(specialOffers[offerId])
    }, 5000).
      return () => {
        clearInterval()
      }
    }, [third])
    
    

}