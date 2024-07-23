/* eslint-disable react/no-unknown-property */
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userAddress } from "../../store/actions/userActions";
import { toaster } from "evergreen-ui";

const Billing = () => {
  const {userData} = useSelector(state => state.user)
  const dispatch = useDispatch()
  const [shippingInfo, setShippingInfo] = useState({
    fullName: userData && userData[0]?.user_name,
    address: userData && userData[0]?.address.a,
    city: "",
    postalCode: "",
    country: "",
  });

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    setShippingInfo((prevInfo) => ({
      ...prevInfo,
      [name]: type === "tel" ? value.replace(/[^0-9]/g, "") : value,
    }));
  };

  const handleSave = () => {
    // Save data (e.g., to local storage or backend)
    dispatch(userAddress(shippingInfo, userData[0]?.user_name));
    console.log("Shipping info saved:", shippingInfo);
    toaster.success("Shipping info saved");
  };

  return (
    <div className="shipping-info-container bg-gray-100 p-5 rounded-lg shadow-md font-sans">
      <h2 className="text-xl mb-5">Shipping Information</h2>
      <form>
        <div className="mb-5">
          <label htmlFor="fullName" className="font-bold">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={shippingInfo.fullName}
            onChange={handleInputChange}
            style={{ backgroundColor: "white", color: "black" }}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-5">
          <label htmlFor="address" className="font-bold">
            Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={shippingInfo.address}
            onChange={handleInputChange}
            style={{ backgroundColor: "white", color: "black" }}
            className="form-control w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-5">
          <label htmlFor="city" className="font-bold">
            State/City
          </label>
          <input
            type="text"
            id="city"
            name="city"
            value={shippingInfo.city}
            onChange={handleInputChange}
            style={{ backgroundColor: "white", color: "black" }}
            className="form-control w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-5">
          <label htmlFor="postalCode" className="font-bold">
            Postal Code
          </label>
          <input
            type="tel"
            id="postalCode"
            name="postalCode"
            value={shippingInfo.postalCode}
            onChange={handleInputChange}
            style={{ backgroundColor: "white", color: "black" }}
            className="form-control w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-5">
          <label htmlFor="country" className="font-bold">
            Country
          </label>
          <input
            type="text"
            id="country"
            name="country"
            value={shippingInfo.country}
            onChange={handleInputChange}
            style={{ backgroundColor: "white", color: "black" }}
            className="form-control w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <button
          type="button"
          onClick={handleSave}
          className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer"
        >
          Save Details
        </button>
        {/* Add a button to allow users to edit the information */}
      </form>
    </div>
  );
};

export default Billing;
