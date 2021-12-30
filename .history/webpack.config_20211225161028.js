const path = require("path");
// ② html
const HtmlWebpackPlugin = require("html-webpack-plugin");
  // ③ cssファイル生成
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development", //production
  entry: "./src/js/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "./dist/main.js",
  },
  module: {
    rules: [
      {
        // ① babel バベル
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },

      // ② htmlファイル生成
      {
        test: /\.html$/,
        use: ["html-loader"],
      },

  // ③-2 cssファイル生成
      {
        test: /\.(sa|sc|c)ss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },

      // cssのみの場合
      // {
      //   test: /\.css$/,
      //   use: [
      //     'style-loader',
      //     'css-loader',
      //   ]
      // },
    ],
  },
  // ③-3 cssファイル生成
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
      // ② htmlファイル生成
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      inject: "body",
    }),
  ],
  target: ["web", "es5"],
  devtool: "source-map",
};







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
