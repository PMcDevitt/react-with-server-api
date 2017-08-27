const path = require('path')

module.exports = function (config) {
  'use strict'
  config.set({

    basePath: '',

    frameworks: ['mocha', 'chai'],

    files: [
      'node_modules/babel-polyfill/dist/polyfill.js',
      'test/*.spec.js'
    ],
    preprocessors: {
      'src/public/AppEntry.js': ['webpack', 'sourcemap'],
      'src/test/**/*.js': ['webpack', 'sourcemap'],
      'src/*.js': ['coverage']
    },
    coverageReporter: {
      type: 'html',
      dir: 'coverage/'
    },
    webpack: {
      devtool: 'inline-source-map',
      module: {
        loaders: [
          {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: path.resolve(__dirname, 'node_modules'),
            query: {
              plugins: ['transform-decorators-legacy', 'transform-regenerator'],
              presets: ['react', 'es2015', 'stage-1']
            }
          },
          {
            test: /\.json$/,
            loader: 'json-loader'
          }
        ]
      },
      externals: {
        'react/addons': true,
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true
      }
    },
    webpackServer: {
      noInfo: true
    },
        // reporters: ['progress'],
    reporters: ['nyan', 'coverage'],
    nyanReporter: {
      suppressErrorHighlighting: true
    },
    port: 9876,
    colors: true,
    autoWatch: true,
    singleRun: false,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

        // browsers: ['PhantomJS', 'IE', 'Chrome']
    browsers: ['PhantomJS']
  })
}
