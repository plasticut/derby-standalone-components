exports.config = {
    files: {
        javascripts: {
            joinTo: {
                'js/app.js': /^app/,
                'js/vendor.js': /^(vendor|bower_components)/
            }
        },
        stylesheets: {
            joinTo: 'css/app.css'
        },
        templates: {
            joinTo: 'js/app.js'
        }
    },
    conventions: {
        ignored: /^(test)/
    },
    plugins: {
        jshint: {
            pattern: /^app\/.*\.js$/
        },
        assetsmanager: {
            copyTo: {
                'fonts' : [
                    'bower_components/bootstrap/dist/fonts/*'
                ]
            }
        }
    }
};
