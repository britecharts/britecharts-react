export const applyConfiguration = (chart, configuration) => {
    let configurationProperties = Object.keys(configuration);

    configurationProperties.forEach((key) => {
        if (configuration[key]) {
            chart[key](configuration[key]);
        }
    });

    return chart;
};
