// rollup.config.js
export default {
  // ...
  output: {
    // ...
    manualChunks: {
      // Define your chunks here
      vendor: ["react", "react-dom"],
    },
  },
};
