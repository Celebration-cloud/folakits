import React from 'react'

function CustomerProfile() {
  return (
    <div class="max-w-sm mx-auto bg-card text-card-foreground rounded-lg shadow-lg p-6">
      <div class="flex flex-col items-center">
        <img
          class="w-24 h-24 rounded-full"
          src="https://placehold.co/96x96"
          alt="User profile picture"
        />
        <h2 class="mt-4 text-lg font-semibold">Ben Peterson</h2>
        <p class="text-muted-foreground">CEO, Brack Ltd.</p>
      </div>
      <div class="mt-6 space-y-4">
        <div class="flex justify-between">
          <span class="text-muted-foreground">Email</span>
          <div>
            <span>ui-lib@example.com</span>
            <span class="ml-2 bg-accent text-accent-foreground text-xs px-2 py-1 rounded">
              Email Verified
            </span>
          </div>
        </div>
        <div class="flex justify-between">
          <span class="text-muted-foreground">Phone</span>
          <span>+1 439 327 546</span>
        </div>
        <div class="flex justify-between">
          <span class="text-muted-foreground">Country</span>
          <span>USA</span>
        </div>
        <div class="flex justify-between">
          <span class="text-muted-foreground">State/Region</span>
          <span>New York</span>
        </div>
        <div class="flex justify-between">
          <span class="text-muted-foreground">Address 1</span>
          <span>Street Tailwood, No. 17</span>
        </div>
      </div>
    </div>
  );
}

export default CustomerProfile
