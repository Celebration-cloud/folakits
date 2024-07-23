import React from 'react'

function NotFound() {
  return (
    <div class="min-h-screen flex flex-col items-center justify-center bg-background text-primary">
      <img
        src="https://placehold.co/300?text=🔍"
        alt="not-found"
        class="mb-8"
      />
      <h1 class="text-3xl font-bold mb-2">404 - Page Not Found</h1>
      <p class="text-lg mb-4">
        Oops! The page you are looking for could not be found.
      </p>
      <a
        href="#"
        class="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/80 transition-colors"
      >
        Go back home
      </a>
    </div>
  );
}

export default NotFound
