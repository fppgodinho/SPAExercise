module.exports = function(karma)                                                                                        {
    karma.set({
        frameworks: [
            'mocha',
            'chai',
            'browserify'
        ],
        plugins: ['karma-*', {
            'reporter:noTraceStackReporter': ['factory', noTraceStackReporterFactory]
        }],

        files: [
            'node_modules/angular/angular.js',
            'node_modules/angular-mocks/angular-mocks.js',
            'src/**/*.js',
            'test/**/*.coffee'
        ],
        preprocessors: {
            'src/**/*.jade': ['browserify'],
            'src/**/*.js': ['browserify'],
            'test/**/*.coffee': ['browserify']
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