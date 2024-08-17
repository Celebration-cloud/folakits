import { useRef } from 'react'
import CardComponent from '../reuseable/card/CardComponent';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../reuseable/button/Button';
import { useNavigate } from 'react-router-dom';
import { getItems } from '../../store/actions/quoteActions';

function FeatureProduct() {
  const { advert } = useSelector((state) => state.product);
    const { userData } = useSelector((state) => state.user);
    const dispatch = useDispatch()
    const wishlistRef = useRef([]);
      const cartListRef = useRef([]);
    wishlistRef.current = userData ? userData[0]?.wishlist : [];
      cartListRef.current = userData ? userData[0]?.cart : [];
    const navigate = useNavigate()

  return (
    <div
      style={{
        display: "inline-flex",
        flexDirection: "column",
        width: "100%",
        padding: "20px",
        gap: "30px",
        margin: "40px 0px 40px 0px",
        boxSizing: "border-box",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "larger",
          fontWeight: "bolder",
        }}
      >
        Featured products
      </h2>
      <section
        style={{
          display: "inline-flex",
          width: "100%",
          gap: "10px",
          flexWrap: "wrap",
          justifyContent: ""
        }}
      >
        {advert?.map((item) => (
          <CardComponent
            key={item.id}
            product={item}
            wishlistRef={wishlistRef}
            cartListRef={cartListRef}
          />
        ))}
        {/* {loading && <Spinner/>} */}
      </section>
      <div
        onClick={() => {
          navigate(`/${"Shop"}`);
           dispatch(getItems());
        }}
        style={{ alignSelf: "center" }}
      >
        <Button name="Browse more" />
      </div>
    </div>
  );
}

export default FeatureProduct
