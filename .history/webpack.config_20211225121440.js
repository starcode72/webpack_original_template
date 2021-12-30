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





// 基本形
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