const path = require("path")
module.exports = {
  // mode: "",
  entry: "./src/index.html",
  output: {
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {

      }
    ]
  }
}
// const path = require("path")
// module.exports = {
//   // mode: "",
//   entry: "./src/index.html",
//   output: {
//     path: path.resolve(__dirname, "dist")
//   },
//   module: {
//     rules: [
//       {

//       }
//     ]
//   }
// }