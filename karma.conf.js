module.exports = function(karma) {
    karma.set({
        frameworks: [
            'mocha',
            'chai',
            'browserify'
        ],

        files: [
            'test/**/*.coffee'
        ],
        preprocessors: {
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