const path = require('path');

module.exports = {
	mode: 'development',
	devtool: 'inline-source-map',
	devServer: {
		static: {
			directory: './dist'
		}
	},
	entry: './src/index.ts',
	resolve: {
		extensions: ['.ts', '.js']
	},
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist'),
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.ts$/i,
				exclude: /node_modules/,
				use: ['ts-loader'],
			}
		],
	},
};
