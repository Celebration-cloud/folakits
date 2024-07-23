/* eslint-disable react/no-unknown-property */
import { useState } from "react";

const Billing = () => {
  const [shippingInfo, setShippingInfo] = useState({
    fullName: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleSave = () => {
    // Save data (e.g., to local storage or backend)
    console.log("Shipping info saved:", shippingInfo);
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
            
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={shippingInfo.address}
            onChange={handleInputChange}
            style={{ backgroundColor: "white", color: "black" }}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            name="city"
            value={shippingInfo.city}
            onChange={handleInputChange}
            style={{ backgroundColor: "white", color: "black" }}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="postalCode">Postal Code</label>
          <input
            type="text"
            id="postalCode"
            name="postalCode"
            value={shippingInfo.postalCode}
            onChange={handleInputChange}
            style={{ backgroundColor: "white", color: "black" }}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="country">Country</label>
          <input
            type="text"
            id="country"
            name="country"
            value={shippingInfo.country}
            onChange={handleInputChange}
            style={{ backgroundColor: "white", color: "black" }}
            required
          />
        </div>
        <button type="button" onClick={handleSave}>
          Save Details
        </button>
        {/* Add a button to allow users to edit the information */}
      </form>
    </div>
  );
};

export default Billing;
