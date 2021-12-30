const path = require("path")
module.exports = {
  // mode: "",
  entry: "./src/",
  output: {
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        // exclude: "node_module",
        use: {
          loader: "babel-loader",
          options: {
            presets:["@babel/preset-env"]
          }
        }
      }
    ]
  },
  target: ["web", "es5"],
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