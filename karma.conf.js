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
            debug: true
        },

        browsers: ['PhantomJS'],
        phantomjsLauncher: {
            // Have phantomjs exit if a ResourceError is encountered (useful if karma exits without killing phantom)
            exitOnResourceError: false
        },

        reporters: ['progress'],
        colors: true,
        autoWatch: true,
        singleRun: false
    });
};