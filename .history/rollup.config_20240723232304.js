// rollup.config.js
export default {
  // ...
  output: {
    // ...
    manualChunks: {
      // Define your chunks here
      vendor: ["react", "react-dom"],
      build: {
        chunkSizeWarningLimit: 00, // Set your desired limit (in bytes)
      },
    },
  },
};
