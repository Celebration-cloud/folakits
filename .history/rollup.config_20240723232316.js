// rollup.config.js
export default {
  // ...
  output: {
    // ...
    manualChunks: {
      // Define your chunks here
      vendor: ["react", "react-dom"],
      build: {
        chunkSizeWarningLimit: 1000, // Set your desired limit (in bytes)
      },
    },
  },
};
