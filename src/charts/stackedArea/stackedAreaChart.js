import stackedAreaChart from 'britecharts/dist/umd/stackedArea.min';
import {select} from 'd3-selection';


const validateConfiguration = (chart, configurationProperties) => {
    let supportedMethods = Object.keys(chart.prototype.constructor);

    let notSupportedMethods = configurationProperties
        .filter((methodName) => !supportedMethods.includes(methodName));

    if (notSupportedMethods.length) {
        throw new Error(`Method not supported by Britecharts Stacked Area Chart: ${notSupportedMethods.join(' ')}`);
    }
};

const validateContainerAndData = (container, data) => {
    if (container.empty()) {
        throw Error('A root container is required');
    }
    if (!data || !data.length) {
        throw Error('Data must be defined');
    }
};

const stackedArea = {};

stackedArea.create = (el, data, configuration = {}) => {
    let container = select(el);
    let chart = stackedAreaChart();
    let configurationProperties = Object.keys(configuration);

    validateContainerAndData(container, data);
    validateConfiguration(chart, configurationProperties);

    // Sets up the chart with the passed configuration
    configurationProperties.forEach((key) => {
        if (configuration[key]) {
            chart[key](configuration[key]);
        }
    });

    // Calls the chart with the container and dataset
    container.datum(data).call(chart);

    return chart;
};

export default stackedArea;
