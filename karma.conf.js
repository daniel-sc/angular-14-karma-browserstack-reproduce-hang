// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '../',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-browserstack-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      jasmine: {
        // you can add configuration options for Jasmine here
        // the possible options are listed at https://jasmine.github.io/api/edge/Configuration.html
        // for example, you can disable the random execution with `random: false`
        // or set a specific seed with `seed: 4321`
      },
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    jasmineHtmlReporter: {
      suppressAll: true // removes the duplicated traces
    },
    coverageReporter: {
      dir: require('path').join(__dirname, './coverage/angular-14-new'),
      subdir: '.',
      reporters: [
        { type: 'html' },
        { type: 'text-summary' }
      ]
    },
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_DEBUG,
    autoWatch: false,
    browserStack: {
      username: process.env.BROWSERSTACK_USERNAME,
      accessKey: process.env.BROWSERSTACK_ACCESS_KEY,
      project: 'cargo-hub-ui',
      build: 'test-angular-14',
      //timeout: 1800, // max: 1800
      // explicitly set local tunnel identifier to assure parallel builds do not interfere with each other:
      localIdentifier: (process.env.BROWSERSTACK_BUILD_NAME || 'manual-local-build')
        .replace('%2F', '-').replace('/', '-'),
      //retryLimit: 2,
      //captureTimeout: 600 * 5,
    },
    customLaunchers: {
      bs_chrome_win: {
        base: 'BrowserStack',
        browser: 'Chrome',
        os: 'Windows',
        os_version: '10'
      }
    },
    browsers: ['Chrome'],
    singleRun: false,
    restartOnFileChange: true
  });
};
