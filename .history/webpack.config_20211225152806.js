const path = require("path")
module.exports = {
  mode: "development",//production
  entry: "./src/js/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    // filename: 
  },
  module: {
    rules: [
      {
        // ①babel バベル
        test: /\.js$/,
        exclude: /node_modules/,
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
  devtool: "source-map",
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