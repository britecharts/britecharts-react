exports.devServer = ({ host, port } = {}) => ({
    devServer: {
        // Enable history API fallback so HTML5 History API based
        // routing works. Good for complex setups.
        historyApiFallback: true,

        // Display only errors to reduce the amount of output.
        stats: 'errors-only',

        // overlay: true is equivalent
        overlay: {
            errors: true,
            warnings: true,
        },

        // Parse host and port from env to allow customization.
        //
        // If you use Docker, Vagrant or Cloud9, set
        // host: options.host || '0.0.0.0';
        //
        // 0.0.0.0 is available to all network devices
        // unlike default `localhost`.
        host, // Defaults to `localhost`
        port, // Defaults to 8080
    },
});


exports.lintJavaScript = ({ include, exclude, options }) => ({
    module: {
        rules: [
            {
                test: /\.js$/,
                // ensure that ESLint gets executed before anything else
                include,
                exclude,
                enforce: 'pre',
                loader: 'eslint-loader',
                options,
            },
        ],
    },
});


exports.generateSourceMaps = ({ type }) => ({
  devtool: type,
});
