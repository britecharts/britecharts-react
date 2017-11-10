const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin');
const DashboardPlugin = require('webpack-dashboard/plugin');

const merge = require('webpack-merge');
const parts = require('./webpack.parts');

const PATHS = {
    charts: path.join(__dirname, 'src/charts'),
    lib: path.join(__dirname, 'lib'),
    build: path.join(__dirname, 'dist'),
    umd: path.join(__dirname, 'lib/umd'),
    esm: path.join(__dirname, 'lib/esm'),
};

const BUNDLE = path.join(__dirname, 'src/charts/index.js');
const CHARTS = {
    StackedArea: `${PATHS.charts}/stackedArea/StackedAreaComponent.js`,
    Legend: `${PATHS.charts}/legend/LegendComponent.js`,
    Tooltip: `${PATHS.charts}/tooltip/TooltipComponent.js`,
};
    // StackedArea: [ 'core-js/modules/es7.array.includes', `${PATHS.charts}/stackedArea/StackedAreaComponent.js`],


// Configurations
const commonSplittedConfig = merge([
    {
        entry: CHARTS,
        output: {
            path: PATHS.lib,
            filename: '[name].js',
        },
        plugins: [
            new HtmlWebpackPlugin({
                title: 'Webpack demo',
            })
        ],
        externals: {
            'react/addons': true,
            'react/lib/ExecutionEnvironment': true,
            'react/lib/ReactContext': true,
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
        },
    },
    parts.lintJavaScript({
        include: PATHS.charts,
        options: {
            emitWarning: true,
        },
    }),
]);

const developmentConfig = merge([
    parts.devServer({
        host: process.env.HOST,
        port: process.env.PORT,
    }),
    {
        plugins: [
            // If you require a missing module and then `npm install` it, you still have
            // to restart the development server for Webpack to discover it. This plugin
            // makes the discovery automatic so you don't have to restart.
            // See https://github.com/facebookincubator/create-react-app/issues/186
            new WatchMissingNodeModulesPlugin(path.resolve('node_modules')),
            new DashboardPlugin({port: process.env.PORT}),
        ],
        output: {
            devtoolModuleFilenameTemplate: 'webpack:///[absolute-resource-path]',
        },
    },
    parts.babelLoader(),
    parts.generateSourceMaps({ type: 'cheap-module-eval-source-map' }),
]);

const libraryUMDConfig = merge([
    parts.clean(PATHS.lib),
    commonSplittedConfig,
    {
        output: {
            path: PATHS.umd,
            filename: '[name].min.js',
            library: ['britecharts-react', '[name]'],
            libraryTarget: 'umd',
        },
    },
    parts.babelLoader(),
    parts.generateSourceMaps({ type: 'source-map' }),
    // parts.bundleTreeChart(),
    parts.minifyJavaScript(),
]);

const libraryESMConfig = merge([
    parts.clean(PATHS.lib),
    commonSplittedConfig,
    {
        output: {
            path: PATHS.esm,
            filename: '[name].js',
        },
    },
    parts.babelReactLoader(),
    parts.generateSourceMaps({ type: 'source-map' }),
]);

const bundleConfig = merge([
    parts.clean(PATHS.build),
    {
        entry: {
            'britecharts-react': BUNDLE,
        },
        output: {
            path: PATHS.build,
            filename: 'britecharts-react.min.js',
            library: ['britecharts-react'],
            libraryTarget: 'commonjs2',
        },
    },
    parts.babelLoader(),
    parts.generateSourceMaps({ type: 'source-map' }),
    parts.minifyJavaScript(),
]);


module.exports = (env) => {
    console.log('%%%%%%%% env', env);

    if (env === 'production') {
        return [
            libraryESMConfig,
            libraryUMDConfig,
            bundleConfig,
        ];
    }

    return merge(commonSplittedConfig, developmentConfig);
};
