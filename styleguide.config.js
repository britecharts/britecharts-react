const path = require('path');

const resolve = (searchPath) => path.join(__dirname, searchPath);

// Themes
// Check options in https://github.com/styleguidist/react-styleguidist/blob/master/src/styles/theme.js

module.exports = {
    title: 'Britecharts React',

    theme: {
        sidebarWidth: 262,
        color: {
            base: '#333',
            light: '#999',
            lightest: '#ccc',
            link: '#F6682f',
            linkHover: '#BF4C28',
            border: '#e8e8e8',
            name: '#FFA71A',
            type: '#b77daa',
            error: '#fff',
            baseBackground: '#fff',
            errorBackground: '#c00',
            codeBackground: '#f5f5f5',
            sidebarBackground: '#45494E',
        },
        fontFamily: {
            base: '"Rubik", -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif',
        },
    },

    styleguideComponents: {
        Logo: resolve('src/docs/styleguide/Logo'),
    },

    components: 'src/charts/**/[A-Z]*.js',

    require: [
        resolve('node_modules/britecharts/dist/css/britecharts.min.css'),
        resolve('src/docs/styles/custom.css'),
    ],

    assetsDir: resolve('src/docs/public'),

    template: resolve('src/docs/template.html'),

    webpackConfig: {
        module: {
            rules: [
                {
                    test: /\.js?$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                },
                {
                    test: /\.css$/,
                    loader: [
                        'style-loader',
                        'css-loader',
                    ],
                },
            ],
        },
    },

    sections: [
        {
            name: 'Introduction',
            content: './README.md',
        },
        {
            name: 'Charts',
            sections: [
                {
                    name: 'Stacked Area Chart',
                    components: 'src/charts/stackedArea/StackedAreaComponent.js',
                },
                {
                    name: 'Bar Chart',
                    components: 'src/charts/bar/BarComponent.js',
                },
                {
                    name: 'Donut Chart',
                    components: 'src/charts/donut/DonutComponent.js',
                },
                {
                    name: 'Line Chart',
                    components: 'src/charts/line/LineComponent.js',
                },
            ],
        },
        {
            name: 'Chart Components',
            sections: [
                {
                    name: 'Legend',
                    components: 'src/charts/legend/LegendComponent.js',
                },
                {
                    name: 'Tooltip',
                    components: 'src/charts/tooltip/TooltipComponent.js',
                },
            ],
        },
        {
            name: 'About',
            content: './TOPICS.md',
        },
        {
            name: 'About',
            content: './TOPICS.md',
        },
    ],

    styleguideDir: 'docs',
};

