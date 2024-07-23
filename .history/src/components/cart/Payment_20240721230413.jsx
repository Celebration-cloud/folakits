import { toaster } from 'evergreen-ui';
import React from 'react'

function Payment() {
    const handleCopyClick = async () => {
      try {
        const accountNumberElement = document.getElementById("accountNumber");
        if (accountNumberElement) {
          const accountNumber = accountNumberElement.textContent;
          await navigator.clipboard.writeText(accountNumber);
          toaster.success("Account number copied to clipboard");
          // You can also show a success message to the user if needed.
        }
      } catch (error) {
        console.error("Error copying account number:", error);
        // Handle any errors (e.g., browser doesn't support clipboard API).
        toaster.warning("Error copying account number");
      }
    };
  return (
    <>
     <div className="bg-card text-card-foreground p-6 rounded-lg shadow-lg max-w-xl mx-auto mt-10 relative">
  <h2 className="text-2xl font-bold mb-6 border-b border-muted pb-2">Bank Details</h2>
  <div className="grid grid-cols-2 gap-6">
    <div>
      <p className="text-sm text-muted-foreground">Bank Name</p>
      <p className="text-lg font-medium">Example Bank</p>
    </div>
    <div>
      <p className="text-sm text-muted-foreground">Account Name</p>
      <p className="text-lg font-medium">John Doe</p>
    </div>
    <div className="col-span-2">
      <p className="text-sm text-muted-foreground">Account Number</p>
      <p id="accountNumber" className="text-lg font-medium">1234 5678 9012</p>
    </div>
  </div>
  <button
    id="copyButton"
    className="my-5 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/80 focus:outline-none focus:ring focus:ring-primary"
    onClick={handleCopyClick}
    style={{}}
  >
    Copy Account Number
  </button>
</div>

    </>
  )
}


export default Payment
