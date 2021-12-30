const path = require("path")
module.exports = {
  mode: "",
  entry: "./src/index.html",
  output: {
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: "node_module"
      }
    ]
  }
}





// 基本形型
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