const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = (env) => {
	return {
		mode: 'production',

		output: {
			path: path.resolve(__dirname, '..', 'dist'),
			filename: '[name].[hash].js',
			publicPath: '/',
		},

		resolve: {
			extensions: ['.jsx', '.js', '.json', '.scss'],
			modules: ['node_modules'],
			fallback: {
				path: false,
			},
		},

		optimization: {
			minimize: true,
			minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
		},

		module: {
			rules: [
				{
					test: /\.(sa|sc|c)ss$/,
					use: [
						MiniCssExtractPlugin.loader,
						{
							loader: 'css-loader',
							options: {
								sourceMap: true,
								modules: true,
							},
						},
						{
							loader: 'postcss-loader',
							options: {
								postcssOptions: {
									plugins: () => [require('autoprefixer')],
								},
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
					test: /\.js$/,
					loader: 'babel-loader',
				},
				{
					test: /\.(jpe?g|png|gif|svg|ico|woff|woff2|eot|ttf|otf)$/i,
					use: [
						{
							loader: 'file-loader',
							options: {
								name: 'assets/[name].[ext]',
							},
						},
					],
					type: 'javascript/auto',
				},
			],
		},

		plugins: [
			new MiniCssExtractPlugin({
				filename: '[name].[chunkhash].css',
			}),
			new HtmlWebpackPlugin({
				template: 'src/index.html',
				inject: true,
			}),
			new CopyPlugin({
				patterns: [
					{
						from: 'src/manifest.json',
					},
					{
						from: 'src/favicon.ico',
					},
					{
						from: 'src/telegram.php',
					},
					{
						from: 'src/.htaccess',
					},
				],
			}),
		].filter(Boolean),
	};
};
