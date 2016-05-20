// Karma configuration
// Generated on Thu May 19 2016 15:34:34 GMT-0400 (EDT)

module.exports = function (config) {
  config.set({
    basePath: './',
    frameworks: ['jasmine'],
    files: [
      {pattern: 'node_modules/systemjs/dist/system.src.js', included: true, watched: false},
      {pattern: 'node_modules/systemjs/dist/system-polyfills.js', included: true, watched: true},
      {pattern: 'karma-test-shim.js', included: true, watched: true},

      {pattern: 'src/**/*.ts', included: false, watched: true},

      {pattern: 'dist/**/*.js.map', included: false, watched: false}
    ],
    preprocessors: {
      '**/*.ts': ['typescript']
    },
    typescriptPreprocessor: {
      typings: [ 'typings/tsd.d.ts' ]
    },
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: false,
    concurrency: Infinity
  })
};
