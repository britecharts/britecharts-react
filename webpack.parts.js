const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const webpack = require('webpack');


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

exports.babelLoader = () => ({
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },
});

exports.babelReactLoader = () => ({
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['react'],
                    },
                },
            },
        ],
    },
});


exports.generateSourceMaps = ({ type }) => ({
    devtool: type,
});

exports.minifyJavaScript = () => ({
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            beautify: false,
            comments: false,
            mangle: {
                'screw_ie8': true,
                'keep_fnames': true,
            },
            parallel: {
                cache: true,
                workers: 2,
            },
            compress: {
                'screw_ie8': true,
                'properties': true,
                'drop_debugger': true,
                'dead_code': true,
                'conditionals': true,
                'booleans': true,
                'unused': true,
                'if_return': true,
                'join_vars': true,
                'drop_console': true,
                'warnings': false,
            },
        }),
    ],
});

exports.bundleTreeChart = () => ({
    plugins: [
        new BundleAnalyzerPlugin(),
    ],
});

exports.externals = () => ({
    react: {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react',
    },
    'react-dom': {
        root: 'ReactDOM',
        commonjs2: 'react-dom',
        commonjs: 'react-dom',
        amd: 'react-dom',
    },
    'prop-types': {
        root: 'PropTypes',
        commonjs2: 'prop-types',
        commonjs: 'prop-types',
        amd: 'prop-types',
    },
    'd3-selection': {
        root: 'd3.select',
        commonjs2: 'd3-selection',
        commonjs: 'd3-selection',
        amd: 'd3-selection',
    },
});