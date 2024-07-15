export default function OrderDetails() {
  return (
    <div class="bg-card text-card-foreground p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
      <div class="flex justify-between items-center mb-6">
        <button class="text-primary hover:text-primary-foreground">
          <img
            aria-hidden="true"
            alt="back-arrow"
            src="https://openui.fly.dev/openui/24x24.svg?text=⬅️"
          />
        </button>
        <div class="flex space-x-3">
          <button class="bg-primary text-primary-foreground px-5 py-2 rounded-lg hover:bg-primary/80">
            Edit Invoice
          </button>
          <button class="bg-accent text-accent-foreground px-5 py-2 rounded-lg hover:bg-accent/80">
            Print Invoice
          </button>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-6 mb-6">
        <div>
          <h2 class="text-xl font-bold mb-2">Order Info</h2>
          <p class="text-sm">Order Number</p>
          <p class="text-muted-foreground text-lg"># 232</p>
        </div>
        <div class="text-right">
          <p class="font-bold text-lg">
            Order Status: <span class="text-muted-foreground">Pending</span>
          </p>
          <p class="font-bold text-lg">
            Order Date: <span class="text-muted-foreground">July 06, 2024</span>
          </p>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-6 mb-6">
        <div>
          <h2 class="text-xl font-bold mb-2">Bill From</h2>
          <p class="text-lg">UI Lib</p>
          <p class="text-muted-foreground">sales@ui-lib.com</p>
          <p class="text-muted-foreground">
            8254 S. Garfield Street. Villa Rica, GA 30180.
          </p>
          <p class="text-muted-foreground">+1-202-555-0170</p>
        </div>
        <div class="text-right">
          <h2 class="text-xl font-bold mb-2">Bill To</h2>
          <p class="text-lg">Schoen, Conn and Mills</p>
          <p class="text-muted-foreground">rodriguez.trent@senger.com</p>
          <p class="text-muted-foreground">61 Johnson St. Shirley, NY 11967.</p>
          <p class="text-muted-foreground">+202-555-0170</p>
        </div>
      </div>
      <table class="w-full text-left border-collapse mb-6">
        <thead>
          <tr class="bg-muted text-muted-foreground">
            <th class="p-3 border-b">#</th>
            <th class="p-3 border-b">Item Name</th>
            <th class="p-3 border-b">Unit Price</th>
            <th class="p-3 border-b">Unit</th>
            <th class="p-3 border-b">Cost</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="p-3 border-b">1</td>
            <td class="p-3 border-b">Item 1</td>
            <td class="p-3 border-b">$200</td>
            <td class="p-3 border-b">9</td>
            <td class="p-3 border-b">$1800</td>
          </tr>
          <tr>
            <td class="p-3 border-b">2</td>
            <td class="p-3 border-b">Item 2</td>
            <td class="p-3 border-b">$300</td>
            <td class="p-3 border-b">15</td>
            <td class="p-3 border-b">$4500</td>
          </tr>
        </tbody>
      </table>
      <div class="flex justify-end">
        <div class="text-right">
          <p class="font-bold text-lg">
            Sub Total: <span class="text-muted-foreground">$6300</span>
          </p>
          <p class="font-bold text-lg">
            Vat(%): <span class="text-muted-foreground">10</span>
          </p>
          <p class="font-bold text-lg">
            Grand Total: <span class="text-muted-foreground">$6930</span>
          </p>
        </div>
      </div>
    </div>
  );
}
