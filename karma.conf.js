module.exports = function(karma) {
    karma.set({
        frameworks: [
            'mocha',
            'chai',
            'browserify'
        ],

        files: [
            'node_modules/angular/angular.js',
            'node_modules/angular-mocks/angular-mocks.js',
            'src/**/*.js',
            'test/**/*.coffee'
        ],
        preprocessors: {
            'src/**/*.js': ['browserify'],
            'test/**/*.coffee': ['browserify']
        },

        browserify: {
            extensions: ['.coffee'],
            transform: [ 'coffeeify' ],
            debug: false
        },

        browsers: ['PhantomJS'],
        phantomjsLauncher: {
            exitOnResourceError: true
        },

        reporters:  ['mocha'],
        logLevel:   karma.LOG_ERROR,
        colors:     true,
        autoWatch:  true,
        singleRun:  true
    });
};