const path = require('path');

const resolve = (searchPath) => path.join(__dirname, searchPath);

// Themes
// Check options in https://github.com/styleguidist/react-styleguidist/blob/master/src/styles/theme.js

module.exports = {
    title: 'Britecharts React - React charting library based in Britecharts',

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
            name: 'Components',
            components: 'src/charts/!(template|loading)/*.js',
        },
        {
            name: 'About',
            content: './TOPICS.md',
        },
    ],

    styleguideDir: 'docs',
};

