const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev

const optimization = () => {
	const config = {
		splitChunks: {
			chunks: 'all'
		}
	}

	if (isProd) {
		config.minimizer = [new OptimizeCssAssetsWebpackPlugin(), new TerserWebpackPlugin()]
	}

	return config
}

const getPlugins = () => {
	const plugins = [
		new HTMLWebpackPlugin({
			template: '../public/index.html',
			minify: {
				collapseWhitespace: isProd
			}
		}),
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin({
			filename: '[contenthash].css'
		})
	]

	if (isDev) {
		plugins.push(new ESLintPlugin())
	}

	if (process.env.SERVE) {
		plugins.push(new ReactRefreshWebpackPlugin())
	}

	return plugins
}

module.exports = {
	context: path.resolve(__dirname, 'src'),
	mode: 'development',
	entry: ['@babel/polyfill', './index.js'],
	output: {
		filename: '[contenthash].js',
		path: path.resolve(__dirname, 'dist')
	},
	resolve: {
		extensions: ['.js', '.json', '.jsx', '.css'],
		alias: {
			'@': path.resolve(__dirname, 'src')
		}
	},
	optimization: optimization(),
	devServer: {
		port: 4200,
		hot: isDev
	},
	devtool: isDev ? 'source-map' : false,
	plugins: getPlugins(),
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader']
			},
			{
				test: /\.(png|jpg|jpeg|jpe|svg|gif|webp)$/,
				type: isProd ? 'asset' : 'asset/resource'
			},
			{
				test: /\.(ttf|woff|woff2|eot)$/,
				type: isProd ? 'asset' : 'asset/resource'
			},
			{
				test: /\.m?js$/,
				exclude: '/node_modules/',
				use: {
					loader: 'babel-loader',
					options: {
						cacheDirectory: true,
						presets: ['@babel/preset-env']
					}
				}
			},
			{
				test: /\.jsx$/,
				exclude: '/node_modules/',
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react']
					}
				}
			},
			{
				test: /\.scss$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
			}
		]
	}
}
