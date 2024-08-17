import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export function useOffer(){
    const { specialOffers } = useSelector((state) => state.product);
    const [offer, setOffer] = useState()
    useEffect(() => {
    const offerId = setInterval(() => {
        const offerIndex = Math.floor(Math.random() * specialOffers.length) 
        setOffer(specialOffers[offerIndex])
    }, 5000)
      return () => {
        clearInterval(offerId)
      }
    }, [specialOffers])
    
    return {offer}
}