'use strict';

const path = require('path');
const fs = require('fs');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');

const getClientEnvironment = require('./env');
const paths = require('./paths');
const publicUrl = '';
const env = getClientEnvironment(publicUrl);

module.exports = {
	entry: [paths.appIndexJs],
	devtool: 'cheap-module-source-map',
	output: {
		path: paths.appBuild,
		filename: 'static/js/bundle.js',
		chunkFilename: 'static/js/[name].chunk.js',
		publicPath: '/',
		devtoolModuleFilenameTemplate: info =>
			path.resolve(info.absoluteResourcePath).replace(/\\/g, '/'),
	},
	resolve: {
		extensions: ['.ts', '.js', '.json'],
	},
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/,
				loader: require.resolve('tslint-loader'),
				enforce: 'pre',
				include: paths.appSrc,
			},
			{
				test: /\.js$/,
				loader: require.resolve('source-map-loader'),
				enforce: 'pre',
				include: paths.appSrc,
			},
			{
				exclude: [
					/\.html$/,
					// We have to write /\.(js|jsx)(\?.*)?$/ rather than just /\.(js|jsx)$/
					// because you might change the hot reloading server from the custom one
					// to Webpack's built-in webpack-dev-server/client?/, which would not
					// get properly excluded by /\.(js|jsx)$/ because of the query string.
					// Webpack 2 fixes this, but for now we include this hack.
					// https://github.com/facebookincubator/create-react-app/issues/1713
					/\.(js|jsx)(\?.*)?$/,
					/\.(ts|tsx)(\?.*)?$/,
					/\.scss$/,
					/\.json$/,
					/\.bmp$/,
					/\.gif$/,
					/\.jpe?g$/,
					/\.png$/,
				],
				loader: require.resolve('file-loader'),
				options: {
					name: 'static/media/[name].[hash:8].[ext]',
				},
			},
			{
				test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
				loader: require.resolve('url-loader'),
				options: {
					limit: 10000,
					name: 'static/media/[name].[hash:8].[ext]',
				},
			},
			// Compile .tsx?
			{
				test: /\.(ts|tsx)$/,
				include: paths.appSrc,
				loader: require.resolve('ts-loader'),
			},
			{
				test: /\.scss$/,
				use: [
					{
						loader: 'style-loader', // creates style nodes from JS strings
					},
					{
						loader: 'css-loader', // translates CSS into CommonJS
						options: {
							sourceMap: true,
						},
					},
					{
						loader: 'resolve-url-loader'
					},
					{
						loader: 'sass-loader', // compiles Sass to CSS
						options: {
							sourceMap: true,
						},
					},
				],
			},
			{
				test: /\.html$/,
				include: paths.appSrc,
				loader: require.resolve('raw-loader'),
			},
		],
	},
	plugins: [
		new InterpolateHtmlPlugin(env.raw),
		new HtmlWebpackPlugin({
			inject: true,
			template: paths.appHtml,
		}),
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin(),
	],
	performance: {
		hints: false,
	},
};
