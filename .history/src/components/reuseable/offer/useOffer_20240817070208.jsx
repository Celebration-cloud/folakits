export function useOffer(){
    const { specialOffers } = useSelector((state) => state.product);
    console.log(specialOffers);
}