var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: "./src/app.tsx",
	output: {
		path: __dirname + "/dist",
		filename: "bundle.[hash].js",
		publicPath: "/"
	},
	devtool: "source-map",
	resolve: {
		extensions: [".ts", ".tsx", ".js"]
	},
	module: {
		rules: [
			{
				test: /\.ts(x?)$/,
				exclude: '/node_modules/',
				use: [
					{
						loader: "ts-loader"
					}
				]
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.(png|jpg|gif|svg|woff|woff2|eot|ttf)$/,
				use: [
				  {
					loader: 'file-loader',
					options: {}  
				  }
				]
			  }
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "src/index.html",
			filename: "index.html"
		}),
	]
}