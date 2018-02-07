module.exports = function(plop) {
    plop.setHelper('lowerFirst', (text) => text[0].toLowerCase() + text.substr(1));
    plop.setHelper('splitWithDash', (text) => (
        text
            .split(/(?=[A-Z])/)
            .map((word) => word.toLowerCase())
            .join('-')
      ));
    plop.setGenerator('component', {
        description: 'Create a new component',
        prompts: [{
            type: 'input',
            name: 'componentName',
            message: 'Component name (with class capitalization, eg StackedArea)',
        }],
        actions: [{
            type: 'add',
            path: 'src/charts/{{lowerFirst componentName}}/{{lowerFirst componentName}}Chart.test.js',
            templateFile: 'src/charts/template/componentChart.test.js',
        },
        {
            type: 'add',
            path: 'src/charts/{{lowerFirst componentName}}/{{lowerFirst componentName}}Chart.js',
            templateFile: 'src/charts/template/componentChart.js',
        },
        {
            type: 'add',
            path: 'src/charts/{{lowerFirst componentName}}/{{lowerFirst componentName}}.fixtures.js',
            templateFile: 'src/charts/template/componentChart.fixtures.js',
        },
        {
            type: 'add',
            path: 'src/charts/{{lowerFirst componentName}}/{{componentName}}.js',
            templateFile: 'src/charts/template/Component.js',
        },
        {
            type: 'add',
            path: 'src/charts/{{lowerFirst componentName}}/{{componentName}}.test.js',
            templateFile: 'src/charts/template/Component.test.js',
        },
        {
            type: 'add',
            path: 'src/charts/{{lowerFirst componentName}}/Readme.md',
        }],
    });
};