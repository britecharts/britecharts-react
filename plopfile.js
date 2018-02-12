module.exports = function(plop) {
    plop.setHelper('openBrace', () => '{');
    plop.setHelper('closeBrace', () => '}');
    plop.setGenerator('component', {
        description: 'Create a new component',
        prompts: [{
            type: 'input',
            name: 'componentName',
            message: 'Component name (with PascalCase capitalization, eg StackedArea)',
        }],
        actions: [{
            type: 'add',
            path: 'src/charts/{{camelCase componentName}}/{{camelCase componentName}}Chart.test.js',
            templateFile: 'src/charts/template/componentChart.test.js',
        },
        {
            type: 'add',
            path: 'src/charts/{{camelCase componentName}}/{{camelCase componentName}}Chart.js',
            templateFile: 'src/charts/template/componentChart.js',
        },
        {
            type: 'add',
            path: 'src/charts/{{camelCase componentName}}/{{camelCase componentName}}Chart.fixtures.js',
            templateFile: 'src/charts/template/componentChart.fixtures.js',
        },
        {
            type: 'add',
            path: 'src/charts/{{camelCase componentName}}/{{pascalCase componentName}}.js',
            templateFile: 'src/charts/template/Component.js',
        },
        {
            type: 'add',
            path: 'src/charts/{{camelCase componentName}}/{{pascalCase componentName}}.test.js',
            templateFile: 'src/charts/template/Component.test.js',
        },
        {
            type: 'add',
            path: 'src/charts/{{camelCase componentName}}/Readme.md',
            templateFile: 'src/charts/template/Readme.md',
        },
        {
            type: 'add',
            path: 'src/charts/{{camelCase componentName}}/Checklist.md',
            templateFile: 'src/charts/template/Checklist.md',
        }],
    });
};