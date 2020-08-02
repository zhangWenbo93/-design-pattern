const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: "./src/index.js",
    output: {
        path: __dirname,
        filename: "./release/bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /(node_modules)/,
                loader: "babel-loader"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html"
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, './release'), // 自动执行根目录release下的文件
        open: true, // 浏览器自动打开
        port: 9000,
        proxy: {
            "/api/*": {
                target: "http://localhost:8880"
            }
        }
    }
}