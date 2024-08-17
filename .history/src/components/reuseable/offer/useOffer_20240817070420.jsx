import { useState } from "react";
import { useSelector } from "react-redux";

export function useOffer(){
    const { specialOffers } = useSelector((state) => state.product);
    const [offer, setOffer] = useState()
    console.log(specialOffers);
    setInterval(() => {
        const offerId = Math.floor(Mat) 
    }, 5000)
}