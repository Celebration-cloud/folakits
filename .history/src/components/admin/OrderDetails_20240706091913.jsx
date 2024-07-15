import React from "react";

const buttonClass = "text-primary hover:text-primary-foreground";
const primaryButtonClass =
  "bg-primary text-primary-foreground py-2 px-4 rounded-lg hover:bg-primary/80";
const accentButtonClass =
  "bg-accent text-accent-foreground py-2 px-4 rounded-lg hover:bg-accent/80";
const textClass = "text-muted-foreground";

const OrderDe = () => {
  return (
    <div className="p-6 bg-card text-card-foreground rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <button className={buttonClass}>
          <img
            aria-hidden="true"
            alt="back-arrow"
            src="https://openui.fly.dev/openui/24x24.svg?text=⬅️"
          />
        </button>
        <div className="flex space-x-4">
          <button className={primaryButtonClass}>Edit Invoice</button>
          <button className={accentButtonClass}>Print Invoice</button>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <h2 className="font-bold text-lg">Order Info</h2>
          <p>Order Number</p>
          <p># 232</p>
        </div>
        <div className="text-right">
          <p className="font-bold">
            Order Status: <span className={textClass}>Pending</span>
          </p>
          <p className="font-bold">
            Order Date: <span className={textClass}>July 06, 2024</span>
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <h2 className="font-bold text-lg">Bill From</h2>
          <p>UI Lib</p>
          <p>sales@ui-lib.com</p>
          <p>8254 S. Garfield Street. Villa Rica, GA 30180.</p>
          <p>+1-202-555-0170</p>
        </div>
        <div className="text-right">
          <h2 className="font-bold text-lg">Bill To</h2>
          <p>Schoen, Conn and Mills</p>
          <p>rodriguez.trent@senger.com</p>
          <p>61 Johnson St. Shirley, NY 11967.</p>
          <p>+202-555-0170</p>
        </div>
      </div>
      <table className="w-full text-left border-collapse mb-6">
        <thead>
          <tr className="bg-muted text-muted-foreground">
            <th className="p-2 border-b">#</th>
            <th className="p-2 border-b">Item Name</th>
            <th className="p-2 border-b">Unit Price</th>
            <th className="p-2 border-b">Unit</th>
            <th className="p-2 border-b">Cost</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2 border-b">1</td>
            <td className="p-2 border-b">Item 1</td>
            <td className="p-2 border-b">$200</td>
            <td className="p-2 border-b">9</td>
            <td className="p-2 border-b">$1800</td>
          </tr>
          <tr>
            <td className="p-2 border-b">2</td>
            <td className="p-2 border-b">Item 2</td>
            <td className="p-2 border-b">$300</td>
            <td className="p-2 border-b">15</td>
            <td className="p-2 border-b">$4500</td>
          </tr>
        </tbody>
      </table>
      <div className="flex justify-end">
        <div className="text-right">
          <p className="font-bold">
            Sub Total: <span className={textClass}>$6300</span>
          </p>
          <p className="font-bold">
            Vat(%): <span className={textClass}>10</span>
          </p>
          <p className="font-bold">
            Grand Total: <span className={textClass}>$6930</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
