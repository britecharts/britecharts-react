import {britechartsCustomEvents} from '../constants';

const isNotCustomEvent = (configName) => britechartsCustomEvents.indexOf(configName) === -1;

export const validateConfiguration = (chart, configuration) => {
    let configurationProperties = Object.keys(configuration);
    let configurationPropertiesWithoutEvents = configurationProperties.filter(isNotCustomEvent);
    let supportedMethods = Object.keys(chart.prototype.constructor);

    let notSupportedMethods = configurationPropertiesWithoutEvents
        .filter((methodName) => !supportedMethods.includes(methodName));

    if (notSupportedMethods.length) {
        throw new Error(`Method not supported by Britechart: ${notSupportedMethods.join(' ')}`);
    }
};

export const validateContainer = (container) => {
    if (container.empty()) {
        throw Error('A root container is required');
    }
};

export const validateData = (data) => {
    if (!data || !data.length) {
        throw Error('Data must be defined');
    }
};
