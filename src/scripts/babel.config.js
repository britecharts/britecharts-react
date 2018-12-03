/* eslint-disable import/no-commonjs */
// Duplicated with ../.babelrc for now.
const baseConfig = {
    'presets': [
        'react',
        [
            'env',
            {
                'targets': {
                    'browsers': ['last 2 versions', 'ie >= 10'],
                },
                'forceAllTransforms': true,
            },
        ],
    ],

    'plugins': [
        'transform-class-properties',
        'transform-object-rest-spread',
    ],

    'env': {
        'test': {
            'plugins': [
                'transform-es2015-modules-commonjs',
            ],
        },
    },
};

module.exports = (type) => ({
    'es': {
        babelrc: false,
        presets: ['react'],
        plugins: baseConfig.plugins,
    },
}[type] || (() => {
    throw new Error(`Unsupported type for babel ${type}`);
})());