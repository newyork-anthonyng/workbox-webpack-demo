const path = require("path");
const WorkboxPlugin = require("workbox-webpack-plugin");

module.exports = {
    entry: path.resolve(__dirname, "src/index.js"),

    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].[contenthash].js"
    },

    optimization: {
        runtimeChunk: {
            name: "manifest"
        }
    },

    plugins: [
        new WorkboxPlugin.GenerateSW({
            swDest: "sw.js",
            clientsClaim: true,
            skipWaiting: true
        })
    ]
}