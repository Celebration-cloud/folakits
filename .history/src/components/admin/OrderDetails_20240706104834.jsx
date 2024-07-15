import React from 'react'
import styles from './OrderDetails.module.css'
function OrderDetails() {
  return (
    <div
      className={`${styles.details} bg-card text-card-foreground p-8 rounded-lg shadow-lg max-w-4xl mx-auto`}
    >
      <div className="flex justify-between  mb-6">
        <img
          aria-hidden="true"
          alt="back-arrow"
          src="https://openui.fly.dev/openui/24x24.svg?text=⬅️"
        />
      </div>
      <div className={styles.orderInfo}>
        <div>
          <h6 className="text-xl font-bold mb-2">Order Info</h6>
          <p className="text-sm">Order Number</p>
          <p className="text-muted-foreground text-lg"># 232</p>
        </div>
        <div className="text-right">
          <p className="font-bold text-lg">
            Order Status: <span className="text-muted-foreground">Pending</span>
          </p>
          <p className="font-bold text-lg">
            Order Date:{" "}
            <span className="text-muted-foreground">July 06, 2024</span>
          </p>
        </div>
      </div>
      <hr style={{ width: "100%" }} />
      <div className={`${styles.address} grid grid-cols-2 gap-6 mb-6`}>
        <div>
          <h5 className="text-xl font-bold mb-2">Bill From</h5>
          <p className="text-lg">UI Lib</p>
          <span className="text-muted-foreground">sales@ui-lib.com</span>
          <p className="text-muted-foreground">
            8254 S. Garfield Street. Villa Rica, GA 30180.
          </p>
          <p className="text-muted-foreground">+1-202-555-0170</p>
        </div>
        <div style={{ textAlign: "right" }}>
          <h5 className="text-xl font-bold mb-2">Bill To</h5>
          <p className="text-lg">Schoen, Conn and Mills</p>
          <span className="text-muted-foreground">
            rodriguez.trent@senger.com
          </span>
          <p className="text-muted-foreground">
            61 Johnson St. Shirley, NY 11967.
          </p>
          <p className="text-muted-foreground">+202-555-0170</p>
        </div>
      </div>
      <table className="w-full text-left border-collapse mb-6">
        <thead>
          <tr className={`${styles.header} bg-muted text-muted-foreground`}>
            <th className="p-3 border-b">#</th>
            <th className="p-3 border-b">Item Name</th>
            <th className="p-3 border-b">Unit Price</th>
            <th className="p-3 border-b">Unit</th>
            <th className="p-3 border-b">Cost</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{border}}>
            <td className="p-3 border-b">1</td>
            <td className="p-3 border-b">Item 1</td>
            <td className="p-3 border-b">$200</td>
            <td className="p-3 border-b">9</td>
            <td className="p-3 border-b">$1800</td>
          </tr>
          <tr>
            <td className="p-3 border-b">2</td>
            <td className="p-3 border-b">Item 2</td>
            <td className="p-3 border-b">$300</td>
            <td className="p-3 border-b">15</td>
            <td className="p-3 border-b">$4500</td>
          </tr>
        </tbody>
      </table>
      <div className={`${styles.totalSection} flex justify-end`}>
        <div className="text-right">
          <p className="font-bold text-lg">
            Sub Total:{" "}
            <span
              style={{ color: "gray", textAlign: "right" }}
              className="text-muted-foreground"
            >
              $6300
            </span>
          </p>
          <p className="font-bold text-lg">
            Vat(%):{" "}
            <span
              style={{ color: "gray", textAlign: "right" }}
              className="text-muted-foreground"
            >
              10
            </span>
          </p>
          <p className="font-bold text-lg">
            Grand Total:{" "}
            <span
              style={{ color: "gray", textAlign: "right" }}
              className="text-muted-foreground"
            >
              $6930
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default OrderDetails
