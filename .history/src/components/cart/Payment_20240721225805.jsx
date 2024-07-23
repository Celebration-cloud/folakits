import React from 'react'

function Payment() {
  return (
    <>
     <div class="bg-card text-card-foreground p-6 rounded-lg shadow-lg max-w-xl mx-auto mt-10 relative">
  <h2 class="text-2xl font-bold mb-6 border-b border-muted pb-2">Bank Details</h2>
  <div class="grid grid-cols-2 gap-6">
    <div>
      <p class="text-sm text-muted-foreground">Bank Name</p>
      <p class="text-lg font-medium">Example Bank</p>
    </div>
    <div>
      <p class="text-sm text-muted-foreground">Account Name</p>
      <p class="text-lg font-medium">John Doe</p>
    </div>
    <div class="col-span-2">
      <p class="text-sm text-muted-foreground">Account Number</p>
      <p id="accountNumber" class="text-lg font-medium">1234 5678 9012</p>
    </div>
  </div>
  <button
    id="copyButton"
    class="my-5 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/80 focus:outline-none focus:ring focus:ring-primary"
    onclick="copyAccountNumber()"
  >
    Copy Account Number
  </button>
</div>

    </>
  )
}
<script>
  function copyAccountNumber() {
    const accountNumber = document.getElementById('accountNumber');
    const tempInput = document.createElement('input');
    tempInput.value = accountNumber.innerText;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    alert('Account number copied to clipboard: ' + accountNumber.innerText);
  }
</script> 

export default Payment
