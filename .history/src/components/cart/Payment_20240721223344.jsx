import React from 'react'

function Payment() {
  return (
    <div className="bg-card p-6 rounded-lg shadow-lg max-w-md mx-auto">
      <div className="flex justify-between items-center border-b border-border py-4">
        <div className="flex items-center space-x-3">
          <img
            src="https://placehold.co/24x24?text=B"
            alt="Bank icon"
            className="w-6 h-6"
          />
          <span className="text-foreground font-semibold text-lg">Bank Name</span>
        </div>
        <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/80 focus:outline-none transition duration-200">
          Copy
        </button>
      </div>
      <div className="flex justify-between items-center border-b border-border py-4">
        <div className="flex items-center space-x-3">
          <img
            src="https://placehold.co/24x24?text=A"
            alt="Account number icon"
            className="w-6 h-6"
          />
          <span className="text-foreground font-semibold text-lg">
            Account Number
          </span>
        </div>
        <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/80 focus:outline-none transition duration-200">
          Copy
        </button>
      </div>
      <div className="flex justify-between items-center py-4">
        <div className="flex items-center space-x-3">
          <img
            src="https://placehold.co/24x24?text=N"
            alt="Account name icon"
            className="w-6 h-6"
          />
          <span className="text-foreground font-semibold text-lg">
            Account Name
          </span>
        </div>
        <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/80 focus:outline-none transition duration-200">
          Copy
        </button>
      </div>
    </div>
  );
}

export default Payment
