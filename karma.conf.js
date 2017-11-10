var webpack = require('webpack');
const paths = require('./config/paths');

process.env.CHROME_BIN = require('puppeteer').executablePath()


module.exports = function(config) {
	config.set({
		browsers: ['Chrome'],
		frameworks: ['jasmine','karma-typescript'],

		logLevel: config.LOG_INFO,
		autoWatch: true,
		singleRun: false,
		colors: true,
		port: 9876,

		basePath: '',
		files: [{ pattern: 'src/**/*.ts' }],
		preprocessors: { '**/*.ts': ['karma-typescript'] },
		exclude: [],

		
	});
};
