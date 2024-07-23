import React from 'react'

function Payment() {
  return (
    <>
     <div cla="bg-card text-card-foreground p-6 rounded-lg shadow-lg max-w-xl mx-auto mt-10 relative">
  <h2 cla="text-2xl font-bold mb-6 border-b border-muted pb-2">Bank Details</h2>
  <div cla="grid grid-cols-2 gap-6">
    <div>
      <p cla="text-sm text-muted-foreground">Bank Name</p>
      <p cla="text-lg font-medium">Example Bank</p>
    </div>
    <div>
      <p cla="text-sm text-muted-foreground">Account Name</p>
      <p cla="text-lg font-medium">John Doe</p>
    </div>
    <div cla="col-span-2">
      <p cla="text-sm text-muted-foreground">Account Number</p>
      <p id="accountNumber" cla="text-lg font-medium">1234 5678 9012</p>
    </div>
  </div>
  <button
    id="copyButton"
    cla="my-5 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/80 focus:outline-none focus:ring focus:ring-primary"

  >
    Copy Account Number
  </button>
</div>

    </>
  )
}


export default Payment
