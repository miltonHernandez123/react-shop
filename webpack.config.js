const path = require("path");
const HtmlWebpackPlugin = require ("html-webpack-plugin");

modules.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
    },
    resolve: {
        extensions : [".js", ".jsx"],
    },
    module:{
        rules:[
            {
                test: /\.(js|jsx)$/,
                exclude: /node_odules/,
                use:{
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use:[
                    {
                        loader: "html-loader"
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            filename: "./index.html"
        }),
    ]
}