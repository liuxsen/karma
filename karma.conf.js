// Karma configuration
// Generated on Tue Apr 02 2019 14:23:23 GMT+0800 (CST)
const webpackConfig = require('./webpack.test.config');
const path = require('path');

module.exports = function(config) {
  config.set({
    // 将用于解析所有模式的基本路径（eg：文件，排除） 修改它会影响files和exclude路径，没有特殊需求默认就行
    basePath: '',
    // 选择测试框架，我们选的是 jasmine 可以在这里找到更多相关的框架 https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],
    // 在浏览器中加载的匹配的文件的列表
    files: ['test/**/*.spec.js'],
    // 要排除的文件列表
    exclude: [],
    // 在将其提供给浏览器之间，与粗粒匹配的问题件，可以用的预处理器  https://npmjs.org/browse/keyword/karma-preprocessor
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'test/**/*.spec.js': ['webpack', 'sourcemap'] //
    },
    webpack: webpackConfig,
    // 依赖插件
    plugins: [
      'karma-chrome-launcher', // 需要可以打开Chrome浏览器的插件
      'karma-jasmine', // 需要可以运行jasmine的插件
      'karma-coverage-istanbul-reporter', // 需要可以显示测试代码覆盖率的插件
      'karma-webpack', // 需要可以运行webpack的插件
      'karma-sourcemap-loader' // 需要可以显示sourcemap的插件
    ],
    // 配置覆盖率报告的查看方式配置
    coverageIstanbulReporter: {
      reports: ['html', 'lcovonly', 'text-summary'],
      dir: path.join(__dirname, 'coverage'),
      // Combines coverage information from multiple browsers into one report rather than outputting a report
      // for each browser.
      combineBrowserReports: true,
      // if using webpack and pre-loaders, work around webpack breaking the source path
      fixWebpackSourcePaths: true,
      // Omit files with no statements, no functions and no branches from the report
      skipFilesWithNoCoverage: true,
      // Most reporters accept additional config options. You can pass these through the `report-config` option
      'report-config': {
        // all options available at: https://github.com/istanbuljs/istanbuljs/blob/aae256fb8b9a3d19414dcf069c592e88712c32c6/packages/istanbul-reports/lib/html/index.js#L135-L137
        html: {
          // outputs the report in ./coverage/html
          subdir: 'html'
        }
      }
    },

    // enforce percentage thresholds
    // anything under these percentages will cause karma to fail with an exit code of 1 if not running in watch mode
    thresholds: {
      emitWarning: false, // set to `true` to not fail the test command when thresholds are not met
      // thresholds for all files
      global: {
        statements: 100,
        lines: 100,
        branches: 100,
        functions: 100
      },
      // thresholds per file
      each: {
        statements: 100,
        lines: 100,
        branches: 100,
        functions: 100,
        overrides: {
          // 'baz/component/**/*.js': {
          //   statements: 98
          // }
        }
      }
    },

    verbose: true, // output config used by istanbul for debugging
    // 怎么显示测试结果，测试结果显示插件 https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage-istanbul'],
    coverageReporter: {
      type: 'html',
      dir: 'coverage/'
    },
    // 运行的服务器端口，可以自己修改
    port: 9876,
    // 在输出中 启用、禁用颜色，（记录（reporters）日志(logs)）
    // enable / disable colors in the output (reporters and logs)
    colors: true,
    // 显示日志记录的级别（默认就好）
    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,
    // 每当任何文件更改时，启用、禁用监听文件并执行测试
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,
    // 可以启动的浏览器列表，需要下载对应的启动插件
    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  });
};
