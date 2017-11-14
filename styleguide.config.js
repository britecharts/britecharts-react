const path = require('path');

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
            link: '#D2D6DF',
            linkHover: '#6AEDC7',
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
            base: '"Rubik", sans-serif',
        },
    },

    styleguideComponents: {
        Logo: path.join(__dirname, 'src/docs/styleguide/Logo')
    },

    components: 'src/charts/**/*.js',

    require: [
        path.join(__dirname, 'node_modules/britecharts/dist/css/britecharts.min.css'),
        path.join(__dirname, 'src/docs/styles/custom.css')
    ],

    webpackConfig: {
        module: {
            rules: [
                {
                    test: /\.js?$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader'
                },
                {
                    test: /\.css$/,
                    use: [
                        'style-loader',
                        'css-loader'
                    ]
                }
            ]
        }
    },

    styleguideDir: 'docs'
};


// Sections
// sections: [
  //   {
  //     name: 'Introduction',
  //     content: 'docs/introduction.md'
  //   },
  //   {
  //     name: 'Documentation',
  //     sections: [
  //       {
  //         name: 'Installation',
  //         content: 'docs/installation.md'
  //       },
  //       {
  //         name: 'Configuration',
  //         content: 'docs/configuration.md'
  //       }
  //     ]
  //   },
  //   {
  //     name: 'UI Components',
  //     content: 'docs/ui.md',
  //     components: 'lib/components/ui/*.js'
  //   }
  // ]
