/* eslint-disable react/prop-types */
export default function OrderDetails({item}) {
  return (
    <div cla="bg-card text-card-foreground p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
      <div cla="flex justify-between items-center mb-6">
        <button cla="text-primary hover:text-primary-foreground">
          <img
            aria-hidden="true"
            alt="back-arrow"
            src="https://openui.fly.dev/openui/24x24.svg?text=⬅️"
          />
        </button>
        <div cla="flex space-x-3">
          <button cla="bg-primary text-primary-foreground px-5 py-2 rounded-lg hover:bg-primary/80">
            Edit Invoice
          </button>
          <button cla="bg-accent text-accent-foreground px-5 py-2 rounded-lg hover:bg-accent/80">
            Print Invoice
          </button>
        </div>
      </div>
      <div cla="grid grid-cols-2 gap-6 mb-6">
        <div>
          <h2 cla="text-xl font-bold mb-2">Order Info</h2>
          <p cla="text-sm">Order Number</p>
          <p cla="text-muted-foreground text-lg"># 232</p>
        </div>
        <div cla="text-right">
          <p cla="font-bold text-lg">
            Order Status: <span cla="text-muted-foreground">Pending</span>
          </p>
          <p cla="font-bold text-lg">
            Order Date: <span cla="text-muted-foreground">July 06, 2024</span>
          </p>
        </div>
      </div>
      <div cla="grid grid-cols-2 gap-6 mb-6">
        <div>
          <h2 cla="text-xl font-bold mb-2">Bill From</h2>
          <p cla="text-lg">UI Lib</p>
          <p cla="text-muted-foreground">sales@ui-lib.com</p>
          <p cla="text-muted-foreground">
            8254 S. Garfield Street. Villa Rica, GA 30180.
          </p>
          <p cla="text-muted-foreground">+1-202-555-0170</p>
        </div>
        <div cla="text-right">
          <h2 cla="text-xl font-bold mb-2">Bill To</h2>
          <p cla="text-lg">Schoen, Conn and Mills</p>
          <p cla="text-muted-foreground">rodriguez.trent@senger.com</p>
          <p cla="text-muted-foreground">61 Johnson St. Shirley, NY 11967.</p>
          <p cla="text-muted-foreground">+202-555-0170</p>
        </div>
      </div>
      <table cla="w-full text-left border-collapse mb-6">
        <thead>
          <tr cla="bg-muted text-muted-foreground">
            <th cla="p-3 border-b">#</th>
            <th cla="p-3 border-b">Item Name</th>
            <th cla="p-3 border-b">Unit Price</th>
            <th cla="p-3 border-b">Unit</th>
            <th cla="p-3 border-b">Cost</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td cla="p-3 border-b">1</td>
            <td cla="p-3 border-b">Item 1</td>
            <td cla="p-3 border-b">$200</td>
            <td cla="p-3 border-b">9</td>
            <td cla="p-3 border-b">$1800</td>
          </tr>
          <tr>
            <td cla="p-3 border-b">2</td>
            <td cla="p-3 border-b">Item 2</td>
            <td cla="p-3 border-b">$300</td>
            <td cla="p-3 border-b">15</td>
            <td cla="p-3 border-b">$4500</td>
          </tr>
        </tbody>
      </table>
      <div cla="flex justify-end">
        <div cla="text-right">
          <p cla="font-bold text-lg">
            Sub Total: <span cla="text-muted-foreground">$6300</span>
          </p>
          <p cla="font-bold text-lg">
            Vat(%): <span cla="text-muted-foreground">10</span>
          </p>
          <p cla="font-bold text-lg">
            Grand Total: <span cla="text-muted-foreground">$6930</span>
          </p>
        </div>
      </div>
    </div>
  );
}
