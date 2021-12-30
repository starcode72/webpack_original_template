const path = require("path");
// ②-1 html
const HtmlWebpackPlugin = require("html-webpack-plugin");
  // ③-1 cssファイル生成
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development", //production
  entry: "./src/js/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
    assetModuleFilename: "images/[hash][ext][query]",
    clean: true
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

      // ②-2 htmlファイル生成　(画像)
      {
        test: /\.html$/,
        use: ["html-loader"],
      },

      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },

  // ③-2 cssファイル生成
      {
        test: /\.(sa|sc|c)ss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader",



        
        {
          loader: "postcss-loader",
          options: {
            postcssOptions: {
              plugins: [
                [
                  "postcss-preset-env",
                  {
                    //options
                  },
                ],
              ],
            },
          },
        },
        "sass-loader"],
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
      filename: "[name].[contenthash].css",
      // filename: "[name].css",
    }),
      // ②-3 htmlファイル生成
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
