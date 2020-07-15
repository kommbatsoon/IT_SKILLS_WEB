const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	mode: 'development',

	devtool: 'source-map',

	entry: ['./src/index'],

	output: {
		path: path.resolve(__dirname, '..', 'build'),
		filename: 'assets/js/bundle.js',
		publicPath: '/',
		pathinfo: false,
	},

	optimization: {
		removeAvailableModules: false,
		removeEmptyChunks: false,
		splitChunks: false,
	},

	resolve: {
		extensions: ['.js', '.scss', '.css', '.json', '.png', '.svg'],
		symlinks: false,
		cacheWithContext: false,
	},

	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					{
						loader: 'style-loader',
					},
					{
						loader: 'css-loader',
						options: {
							sourceMap: true,
							importLoaders: 2,
						},
					},
				],
			},
			{
				test: /\.s[ac]ss$/i,
				exclude: /(node_modules)/,
				include: path.resolve(__dirname, '..', 'src'),
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							modules: true,
						},
					},
					{
						loader: 'sass-loader',
						options: {
							prependData: '@import "variables"; @import "mixins";',
							webpackImporter: false,
							sassOptions: {
								includePaths: [path.join(__dirname, '..', 'src/app/styles')],
							},
						},
					},
				],
			},
			{
				test: /\.m?js$/,
				exclude: /(node_modules)/,
				include: path.resolve(__dirname, '..', 'src'),
				loader: 'babel-loader',
				options: {
					cacheDirectory: true,
				},
			},
			{
				test: /\.(jpe?g|png|gif|svg|ico)$/i,
				exclude: /(node_modules)/,
				include: path.resolve(__dirname, '..', 'src'),
				loader: 'file-loader',
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				exclude: /(node_modules)/,
				include: path.resolve(__dirname, '..', 'src'),
				use: ['file-loader'],
			},
		],
	},

	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			template: 'src/index.html',
		}),
		new CopyWebpackPlugin([
			{
				from: 'src/manifest.json',
				flatten: true,
			},
			{
				from: 'src/favicon.ico',
			},
		]),
	],
	devServer: {
		historyApiFallback: true,
		open: true,
		hot: true,
		overlay: true,
		compress: true,
		port: 3000,
		stats: {
			colors: true,
			hash: false,
			version: false,
			timings: true,
			assets: false,
			chunks: false,
			modules: false,
			reasons: false,
			children: false,
			source: true,
			errors: true,
			errorDetails: true,
			warnings: true,
			publicPath: false,
		},
	},
};
