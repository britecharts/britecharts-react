import {select} from 'd3-selection';

const validateConfiguration = (chart, configurationProperties) => {
    let supportedMethods = Object.keys(chart.prototype.constructor);

    let notSupportedMethods = configurationProperties
        .filter((methodName) => !supportedMethods.includes(methodName));

    if (notSupportedMethods.length) {
        throw new Error(`Method not supported by Britechart: ${notSupportedMethods.join(' ')}`);
    }
};

const validateContainer = (container) => {
    if (container.empty()) {
        throw Error('A root container is required');
    }
};

const validateData = (data) => {
    if (!data || !data.length) {
        throw Error('Data must be defined');
    }
};

export default function wrapChart(britechart) {
    let chart;

    return {
        create: (el, data, configuration = {}) => {
            chart = britechart();
            let container = select(el);
            let configurationProperties = Object.keys(configuration);

            validateContainer(container);
            validateData(data);
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
        },
        update: (el, data, configuration = {}) => {
            let container = select(el);
            let configurationProperties = Object.keys(configuration);

            validateContainer(container);
            validateConfiguration(chart, configurationProperties);

            // Sets up the passed configuration
            configurationProperties.forEach((key) => {
                if (configuration[key]) {
                    chart[key](configuration[key]);
                }
            });

            // Calls the chart with the container and dataset
            if (data && data.length) {
                container.datum(data).call(chart);
            } else {
                container.call(chart);
            }

            return chart;
        },
        destroy: () => {},
    };
}