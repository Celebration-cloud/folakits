import React from 'react'

function Payment() {
  return (
    <div class="bg-card p-6 rounded-lg shadow-lg max-w-md mx-auto">
  <div class="flex justify-between items-center border-b border-border py-4">
    <div class="flex items-center space-x-3">
      <img src="https://placehold.co/24x24?text=B" alt="Bank icon" class="w-6 h-6" />
      <span class="text-foreground font-semibold text-lg">Bank Name</span>
    </div>
    <button class="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/80 focus:outline-none transition duration-200">Copy</button>
  </div>
  <div class="flex justify-between items-center border-b border-border py-4">
    <div class="flex items-center space-x-3">
      <img src="https://placehold.co/24x24?text=A" alt="Account number icon" class="w-6 h-6" />
      <span class="text-foreground font-semibold text-lg">Account Number</span>
    </div>
    <button class="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/80 focus:outline-none transition duration-200">Copy</button>
  </div>
  <div class="flex justify-between items-center py-4">
    <div class="flex items-center space-x-3">
      <img src="https://placehold.co/24x24?text=N" alt="Account name icon" class="w-6 h-6" />
      <span class="text-foreground font-semibold text-lg">Account Name</span>
    </div>
    <button class="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/80 focus:outline-none transition duration-200">Copy</button>
  </div>
</div>
  )
}

export default Payment
