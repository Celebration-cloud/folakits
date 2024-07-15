/* eslint-disable react/prop-types */
export default function OrderDetails({item}) {
  return (
    <div class="p-6 bg-card text-card-foreground rounded-lg shadow-md">
      <div class="flex justify-between items-center mb-4">
        <button class="text-primary hover:text-primary-foreground">
          <img
            aria-hidden="true"
            alt="back-arrow"
            src="https://openui.fly.dev/openui/24x24.svg?text=⬅️"
          />
        </button>
        <div class="flex space-x-4">
          <button class="bg-primary text-primary-foreground py-2 px-4 rounded-lg hover:bg-primary/80">
            Edit Invoice
          </button>
          <button class="bg-accent text-accent-foreground py-2 px-4 rounded-lg hover:bg-accent/80">
            Print Invoice
          </button>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-4 mb-6">
        <div>
          <h2 class="font-bold text-lg">Order Info</h2>
          <p>Order Number</p>
          <p># 232</p>
        </div>
        <div class="text-right">
          <p class="font-bold">
            Order Status: <span class="text-muted-foreground">Pending</span>
          </p>
          <p class="font-bold">
            Order Date: <span class="text-muted-foreground">July 06, 2024</span>
          </p>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-4 mb-6">
        <div>
          <h2 class="font-bold text-lg">Bill From</h2>
          <p>UI Lib</p>
          <p>sales@ui-lib.com</p>
          <p>8254 S. Garfield Street. Villa Rica, GA 30180.</p>
          <p>+1-202-555-0170</p>
        </div>
        <div class="text-right">
          <h2 class="font-bold text-lg">Bill To</h2>
          <p>Schoen, Conn and Mills</p>
          <p>rodriguez.trent@senger.com</p>
          <p>61 Johnson St. Shirley, NY 11967.</p>
          <p>+202-555-0170</p>
        </div>
      </div>
      <table class="w-full text-left border-collapse mb-6">
        <thead>
          <tr class="bg-muted text-muted-foreground">
            <th class="p-2 border-b">#</th>
            <th class="p-2 border-b">Item Name</th>
            <th class="p-2 border-b">Unit Price</th>
            <th class="p-2 border-b">Unit</th>
            <th class="p-2 border-b">Cost</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="p-2 border-b">1</td>
            <td class="p-2 border-b">Item 1</td>
            <td class="p-2 border-b">$200</td>
            <td class="p-2 border-b">9</td>
            <td class="p-2 border-b">$1800</td>
          </tr>
          <tr>
            <td class="p-2 border-b">2</td>
            <td class="p-2 border-b">Item 2</td>
            <td class="p-2 border-b">$300</td>
            <td class="p-2 border-b">15</td>
            <td class="p-2 border-b">$4500</td>
          </tr>
        </tbody>
      </table>
      <div class="flex justify-end">
        <div class="text-right">
          <p class="font-bold">
            Sub Total: <span class="text-muted-foreground">$6300</span>
          </p>
          <p class="font-bold">
            Vat(%): <span class="text-muted-foreground">10</span>
          </p>
          <p class="font-bold">
            Grand Total: <span class="text-muted-foreground">$6930</span>
          </p>
        </div>
      </div>
    </div>
  );
}
