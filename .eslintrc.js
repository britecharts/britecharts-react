module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        node: true,
        jest: true,
    },
    extends: 'eventbrite-react',
    parserOptions: {
        sourceType: 'module',
    },
    globals: {
        jest: true,
    },
    "settings": {
        "react": {
            "version": "detect"
        }
    },
    rules: {
        indent: ['error', 4],
        'linebreak-style': ['error', 'unix'],
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        'no-unused-vars': ['warn'],
        'no-console': 0,

        'import/unambiguous': 0,
        'no-inline-comments': 0,
        'object-curly-spacing': 0,
        'no-multiple-empty-lines': 0,

        'react/forbid-prop-types': 0,
        'no-param-reassign': 0,
        'no-invalid-this': 0,
        'no-empty-function': 0,
    },
    overrides: [
        {
            files: ['*.d.ts'],
            parser: '@typescript-eslint/parser',
            plugins: ['@typescript-eslint'],
            rules: {
                '@typescript-eslint/member-delimiter-style': 2,
            },
            settings: {
                'import/resolver': {
                    node: {
                        "extensions": [".d.ts"]
                    }
                }
            },
        },
    ],
};
