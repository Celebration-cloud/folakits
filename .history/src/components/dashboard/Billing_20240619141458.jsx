import React, { useState, useEffect } from "react";

const ShippingBillingForm = () => {
  const [shippingInfo, setShippingInfo] = useState({
    fullName: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
  });

  // Load saved data from local storage on component mount
  useEffect(() => {
    const savedInfo = JSON.parse(localStorage.getItem("shippingInfo"));
    if (savedInfo) {
      setShippingInfo(savedInfo);
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save data to local storage
    localStorage.setItem("shippingInfo", JSON.stringify(shippingInfo));
    console.log("Shipping and billing info submitted:", shippingInfo);
  };

  return (
    <div className="shipping-billing-form">
      <h2>Shipping and Billing Information</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={shippingInfo.fullName}
            onChange={handleInputChange}
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
            required
          />
        </div>
        {/* Add other input fields (city, postal code, country, etc.) */}
        {/* Billing information */}
        <div className="form-group">
          <label htmlFor="cardNumber">Card Number</label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            value={shippingInfo.cardNumber}
            onChange={handleInputChange}
            required
          />
        </div>
        {/* Add other billing fields (expiration date, CVV, etc.) */}
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default ShippingBillingForm;
