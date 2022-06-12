const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

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
							implementation: require('sass'),
							additionalData: '@import "variables"; @import "mixins";',
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
				type: 'asset/resource',
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				exclude: /(node_modules)/,
				type: 'asset/resource',
			},
		],
	},

	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			template: 'src/index.html',
		}),
		new CopyPlugin({
			patterns: [
				{
					from: 'src/manifest.json',
				},
				{
					from: 'src/favicon.ico',
				},
			],
		}),
	],
	devServer: {
		open: true,
		hot: true,
		compress: true,
		port: 3000,
		historyApiFallback: true,
	},
};
