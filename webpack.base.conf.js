const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const PATHS = {
  src: path.join(__dirname, "../src"),
  dist: path.join(__dirname, "../dist"),
  assets: "assets/",
};

const PAGES_DIR = "src/pug/pages/index.pug";

module.exports = {
  externals: {
    paths: PATHS,
  },

  entry: {
    app: "./src/index.js",
    // app: PATHS.src,
  },
  output: {
    // filename: "[name].js",
    path: path.resolve(__dirname, "./dist"),
    // publicPath: "/dist",

    filename: `${PATHS.assets}js/[name].js`,
    // path: PATHS.dist,
    publicPath: "",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: "/node_modules/",
      },
      {
        test: /\.pug$/,
        loader: "pug-loader",
        exclude: "/node_modules/",
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          outputPath: "./",
          useRelativePath: true,
        },
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
        },
      },

      {
        test: /\.sass$/,
        use: [
          "style-loader",
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: { sourceMap: true },
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: true,
              config: {
                path: `postcss.config.js`,
              },
            },
          },
          {
            loader: "sass-loader",
            options: { sourceMap: true },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: { sourceMap: true },
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: true,
              config: {
                path: `./postcss.config.js`,
              },
            },
          },
        ],
      },
    ],
  },
  devServer: {
    overlay: true,
  },
  plugins: [
    new MiniCssExtractPlugin({
      // filename: "[name].css",
      // template: `${PAGES_DIR}/${page}`,
      filename: `${PATHS.assets}css/[name].css`,
    }),

    new HtmlWebpackPlugin({
      template: "src/pug/pages/index.pug",
      filename: "./index.html",
    }),

    new HtmlWebpackPlugin({
      template: "src/pug/pages/lines.pug",
      filename: "./lines.html",
    }),

    new HtmlWebpackPlugin({
      template: "src/pug/pages/coupons.pug",
      filename: "./coupons.html",
    }),

    new HtmlWebpackPlugin({
      template: "src/pug/pages/services.pug",
      filename: "./services.html",
    }),
    new HtmlWebpackPlugin({
      template: "src/pug/pages/contacts.pug",
      filename: "./contacts.html",
    }),
  new HtmlWebpackPlugin({
      template: "src/pug/pages/registration.pug",
      filename: "./registration.html",
    }),
new HtmlWebpackPlugin({
      template: "src/pug/pages/orders.pug",
      filename: "./orders.html",
    }),
    new HtmlWebpackPlugin({
      template: "src/pug/pages/account.pug",
      filename: "./account.html",
    }),

    new CopyWebpackPlugin({
      patterns: [
        { from: "src/img", to: "assets/img" },
        { from: "src/fonts", to: "assets/fonts" },
      ],
    }),
  ],
};
