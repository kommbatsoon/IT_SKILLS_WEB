const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

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
		},

		optimization: {
			minimize: true,
			minimizer: [new TerserPlugin(), new OptimizeCSSAssetsPlugin({})],
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
								plugins: () => [require('autoprefixer')],
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
					test: /\.js$/,
					loader: 'babel-loader',
				},
				{
					test: /\.(jpe?g|png|gif|svg|ico)$/i,
					use: [
						{
							loader: 'file-loader',
							options: {
								name: 'assets/[name].[ext]',
							},
						},
					],
				},
				{
					test: /\.(woff|woff2|eot|ttf|otf)$/,
					use: [
						{
							loader: 'file-loader',
							options: {
								name: 'assets/[name].[ext]',
							},
						},
					],
				},
			],
		},

		plugins: [
			env.ANALYZER === true && new BundleAnalyzerPlugin(),
			new MiniCssExtractPlugin({
				filename: '[name].[chunkhash].css',
			}),
			new HtmlWebpackPlugin({
				template: 'src/index.html',
				inject: true,
			}),
			new CopyWebpackPlugin([
				{
					from: 'src/manifest.json',
					flatten: true,
				},
				{
					from: 'src/favicon.ico',
				},
				{
					from: 'src/telegram.php',
				},
			]),
		].filter(Boolean),
	};
};
