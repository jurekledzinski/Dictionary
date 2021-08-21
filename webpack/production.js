const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const LinkTypePlugin =
  require("html-webpack-link-type-plugin").HtmlWebpackLinkTypePlugin;
const { InjectManifest } = require("workbox-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "production",
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  optimization: {
    minimizer: [new CssMinimizerPlugin({})],
    minimize: true,
    minimizer: [
      new TerserPlugin({
        test: /\.js(\?.*)?$/i,
      }),
    ],
    runtimeChunk: "single",
    splitChunks: {
      chunks: "all",
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            const packageName = module.context.match(
              /[\\/]node_modules[\\/](.*?)([\\/]|$)/
            )[1];
            return `npm.${packageName.replace("@", "")}`;
          },
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.(s(a|c)ss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[local]",
              },
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(jpg|png|svg|gif|jpeg)?$/,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "style.[contenthash:6].css",
      chunkFilename: "style.[contenthash:6].css",
    }),
    new LinkTypePlugin({
      "**/*.css": "text/css",
    }),
    new InjectManifest({
      swSrc: "./src/sw.js",
      swDest: "sw.js",
    }),
    new CopyPlugin({
      patterns: [
        { from: "./public/favicon-16x16.png", to: "" },
        { from: "./public/favicon-32x32.png", to: "" },
        { from: "./public/logo192.png", to: "" },
        { from: "./public/logo256.png", to: "" },
        { from: "./public/logo384.png", to: "" },
        { from: "./public/logo512.png", to: "" },
        { from: "./public/maskable.png", to: "" },
      ],
    }),
  ],
};
