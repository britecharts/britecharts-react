const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin');
const DashboardPlugin = require('webpack-dashboard/plugin');

const merge = require('webpack-merge');
const parts = require('./webpack.parts');

const PATHS = {
    charts: path.join(__dirname, 'src/charts'),
    lib: path.join(__dirname, 'lib'),
};

const CHARTS = {
    stackedArea: `${PATHS.charts}/stackedArea/stackedAreaComponent.js`,
};


const commonConfig = merge([
    {
        entry: CHARTS,
        output: {
            path: PATHS.lib,
            filename: '[name].js',
        },
        plugins: [
            new HtmlWebpackPlugin({
                title: 'Webpack demo',
            }),
            // If you require a missing module and then `npm install` it, you still have
            // to restart the development server for Webpack to discover it. This plugin
            // makes the discovery automatic so you don't have to restart.
            // See https://github.com/facebookincubator/create-react-app/issues/186
            new WatchMissingNodeModulesPlugin(path.resolve('node_modules')),
            new DashboardPlugin({port: process.env.PORT}),
        ],
    },
    parts.lintJavaScript({
        include: PATHS.charts,
        options: {
            emitWarning: true,
        },
    }),
]);

const productionConfig = merge([
    parts.generateSourceMaps({ type: 'source-map' }),
]);

const developmentConfig = merge([
    parts.devServer({
        host: process.env.HOST,
        port: process.env.PORT,
    }),
    {
        output: {
            devtoolModuleFilenameTemplate: 'webpack:///[absolute-resource-path]',
        },
    },
    parts.generateSourceMaps({ type: 'cheap-module-eval-source-map' }),
]);


module.exports = (env) => {
    console.log('%%%%%%%% env', env);

    if (env === 'production') {
        return merge(commonConfig, productionConfig);
    }

    return merge(commonConfig, developmentConfig);
};
