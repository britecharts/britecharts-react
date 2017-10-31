const path = require('path');

module.exports = {
    title: 'Britecharts React',

    components: 'src/charts/**/*.js',
    require: [
        path.join(__dirname, 'node_modules/britecharts/dist/css/britecharts.min.css')
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
    }
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
