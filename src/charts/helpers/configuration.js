import {britechartsCustomEvents} from '../constants';

const isNotEventConfig = (configName) => britechartsCustomEvents.indexOf(configName) === -1;
const isEventConfig = (configName) => britechartsCustomEvents.indexOf(configName) !== -1;

export const applyConfiguration = (chart, configuration) => {
    let configurationProperties = Object.keys(configuration);

    let configurationWithNoEvents = configurationProperties
        .filter(isNotEventConfig);

    configurationWithNoEvents.forEach((key) => {
        if (configuration[key]) {
            chart[key](configuration[key]);
        }
    });

    let configurationWithEvents = configurationProperties
        .filter(isEventConfig);

    configurationWithEvents.forEach((key) => {
        if (configuration[key]) {
            chart.on(key, configuration[key]);
        }
    });

    return chart;
};
