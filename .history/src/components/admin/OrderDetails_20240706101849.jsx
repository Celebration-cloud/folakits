import React from 'react'

function OrderDetails() {
  return (
    <div cl="bg-card text-card-foreground p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
      <div cl="flex justify-between items-center mb-6">
        <button cl="text-primary hover:text-primary-foreground">
          <img
            aria-hidden="true"
            alt="back-arrow"
            src="https://openui.fly.dev/openui/24x24.svg?text=⬅️"
          />
        </button>
        <div cl="flex space-x-3">
          <button cl="bg-primary text-primary-foreground px-5 py-2 rounded-lg hover:bg-primary/80">
            Edit Invoice
          </button>
          <button cl="bg-accent text-accent-foreground px-5 py-2 rounded-lg hover:bg-accent/80">
            Print Invoice
          </button>
        </div>
      </div>
      <div cl="grid grid-cols-2 gap-6 mb-6">
        <div>
          <h2 cl="text-xl font-bold mb-2">Order Info</h2>
          <p cl="text-sm">Order Number</p>
          <p cl="text-muted-foreground text-lg"># 232</p>
        </div>
        <div cl="text-right">
          <p cl="font-bold text-lg">
            Order Status: <span cl="text-muted-foreground">Pending</span>
          </p>
          <p cl="font-bold text-lg">
            Order Date: <span cl="text-muted-foreground">July 06, 2024</span>
          </p>
        </div>
      </div>
      <div cl="grid grid-cols-2 gap-6 mb-6">
        <div>
          <h2 cl="text-xl font-bold mb-2">Bill From</h2>
          <p cl="text-lg">UI Lib</p>
          <p cl="text-muted-foreground">sales@ui-lib.com</p>
          <p cl="text-muted-foreground">
            8254 S. Garfield Street. Villa Rica, GA 30180.
          </p>
          <p cl="text-muted-foreground">+1-202-555-0170</p>
        </div>
        <div cl="text-right">
          <h2 cl="text-xl font-bold mb-2">Bill To</h2>
          <p cl="text-lg">Schoen, Conn and Mills</p>
          <p cl="text-muted-foreground">rodriguez.trent@senger.com</p>
          <p cl="text-muted-foreground">61 Johnson St. Shirley, NY 11967.</p>
          <p cl="text-muted-foreground">+202-555-0170</p>
        </div>
      </div>
      <table cl="w-full text-left border-collapse mb-6">
        <thead>
          <tr cl="bg-muted text-muted-foreground">
            <th cl="p-3 border-b">#</th>
            <th cl="p-3 border-b">Item Name</th>
            <th cl="p-3 border-b">Unit Price</th>
            <th cl="p-3 border-b">Unit</th>
            <th cl="p-3 border-b">Cost</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td cl="p-3 border-b">1</td>
            <td cl="p-3 border-b">Item 1</td>
            <td cl="p-3 border-b">$200</td>
            <td cl="p-3 border-b">9</td>
            <td cl="p-3 border-b">$1800</td>
          </tr>
          <tr>
            <td cl="p-3 border-b">2</td>
            <td cl="p-3 border-b">Item 2</td>
            <td cl="p-3 border-b">$300</td>
            <td cl="p-3 border-b">15</td>
            <td cl="p-3 border-b">$4500</td>
          </tr>
        </tbody>
      </table>
      <div cl="flex justify-end">
        <div cl="text-right">
          <p cl="font-bold text-lg">
            Sub Total: <span cl="text-muted-foreground">$6300</span>
          </p>
          <p cl="font-bold text-lg">
            Vat(%): <span cl="text-muted-foreground">10</span>
          </p>
          <p cl="font-bold text-lg">
            Grand Total: <span cl="text-muted-foreground">$6930</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default OrderDetails
