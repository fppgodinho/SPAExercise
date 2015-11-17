module.exports = function(karma)                                                                                        {
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
            'test/tdd/**/*.coffee'
        ],
        preprocessors: {
            'src/**/*.jade': ['browserify'],
            'src/**/*.js': ['browserify'],
            'test/tdd/**/*.coffee': ['browserify']
        },

        browserify: {
            extensions: ['.coffee', '.jade'],
            transform: [ 'coffeeify', 'jadeify' ],
            debug: false
        },

        browsers: ['PhantomJS'],
        phantomjsLauncher: {
            exitOnResourceError: true
        },

        reporters:  ['mocha'],
        mochaReporter: {
            output: 'noFailures'
        },

        logLevel:   karma.LOG_ERROR,
        colors:     true,
        autoWatch:  true,
        singleRun:  false
    });
};