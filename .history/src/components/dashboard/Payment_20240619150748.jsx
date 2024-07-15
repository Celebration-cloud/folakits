import { useState } from "react";

const Payment = () => {
  const [billingInfo, setBillingInfo] = useState({
    cardNumber: "",
    expirationDate: "",
    cvv: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBillingInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleSave = () => {
    // Save data (e.g., to local storage or backend)
    console.log("Billing info saved:", billingInfo);
  };

  return (
    <div className="billing-info-container">
      <h2>Billing Information</h2>
      <form>
        <div className="form-group">
          <label htmlFor="cardNumber">Card Number</label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            value={billingInfo.cardNumber}
            onChange={handleInputChange}
            required
            style={{ backgroundColor: "white", color: "black" }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="expirationDate">Expiration Date</label>
          <input
            type="text"
            id="expirationDate"
            name="expirationDate"
            value={billingInfo.expirationDate}
            onChange={handleInputChange}
            placeholder="MM/YY"
            required
            style={{ backgroundColor: "white", color: "black" }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="cvv">CVV</label>
          <input
            type="password"
            id="cvv"
            name="cvv"
            value={billingInfo.cvv}
            onChange={handleInputChange}
            maxLength="3"
            required
            style={{ backgroundColor: "white", color: "black" }}
          />
        </div>
        <button type="button" onClick={handleSave}>
          Save Details
        </button>
        {/* Add a button to allow users to edit the information */}
      </form>
      <style jsx>{`
        .billing-info-container {
          background-color: #f9f9f9;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          font-family: Arial, sans-serif;
        }
        h2 {
          font-size: 1.5rem;
          margin-bottom: 20px;
        }
        .form-group {
          margin-bottom: 15px;
        }
        label {
          font-weight: bold;
        }
        input {
          width: 100%;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
        button {
          background-color: #007bff;
          color: #fff;
          border: none;
          padding: 10px 20px;
          border-radius: 4px;
          cursor: pointer;
        }
        /* Add more styles as needed */
      `}</style>
    </div>
  );
};

export default Payment;
