import React, { Component } from 'react';
import PropTypes from 'prop-types';

import donut from './donutChart';
import { loadingContainerWrapper } from '../loading/LoadingContainer';

export default class Donut extends Component {
    static propTypes = {
        /**
         * Internally used, do not overwrite.
         */
        data: PropTypes.array,

        /**
         * Gets or Sets the centeredTextFunction of the chart. If function is provided the format will be changed by the custom function's value format. The default format function value is "${d.percentage}% ${d.name}". The callback will provide the data object with id, name, percentage, and quantity. Also provides the component added by the user in each data entry
         */
        centeredTextFunction: PropTypes.func,

        /**
         * Gets or Sets the colorSchema of the chart
         */
        colorSchema: PropTypes.arrayOf(PropTypes.string),

        /**
         * Gets or Sets the emptyDataConfig of the chart. If set and data is empty (quantity adds up to zero or there are no entries), the chart will render an empty slice with a given color (light gray by default)
         */
        emptyDataConfig: PropTypes.object,

        /**
         * Gets or Sets the externalRadius of the chart
         */
        externalRadius: PropTypes.number,

        /**
         * Gets or Sets the hasFixedHighlightedSlice property of the chart, making it
         * to highlight the selected slice id set with `highlightSliceById` all the time.
         */
        hasFixedHighlightedSlice: PropTypes.bool,

        /**
         * Gets or Sets the height of the chart
         */
        height: PropTypes.number,

        /**
         * Gets or Sets the id of the slice to highlight
         */
        highlightSliceById: PropTypes.number,

        /**
         * Gets or Sets the internalRadius of the chart
         */
        internalRadius: PropTypes.number,

        /**
         * Gets or Sets the isAnimated property of the chart, making it to animate
         * when render. By default this is 'false'
         */
        isAnimated: PropTypes.bool,

        /**
         * Gets or Sets the loading state of the chart
         */
        loadingState: PropTypes.string,

        /**
         * Gets or Sets the margin of the chart
         */
        margin: PropTypes.shape({
            top: PropTypes.number,
            bottom: PropTypes.number,
            left: PropTypes.number,
            right: PropTypes.number,
        }),

        /**
         * Gets or Sets the number format of the donut chart
         */
        numberFormat: PropTypes.string,

        /**
         * Changes the order of items given custom function
         */
        orderingFunction: PropTypes.func,

        /**
         * Gets or Sets the percentage format for the percentage label
         */
        percentageFormat: PropTypes.string,

        /**
         * Gets or Sets the radiusHoverOffset of the chart
         */
        radiusHoverOffset: PropTypes.number,

        /**
         * Gets or Sets whether a loading state will be shown
         */
        shouldShowLoadingState: PropTypes.bool,

        /**
         * Gets or Sets the width of the chart
         */
        width: PropTypes.number,

        customMouseOver: PropTypes.func,
        customMouseOut: PropTypes.func,
        customMouseMove: PropTypes.func,
        customClick: PropTypes.func,

        /**
         * Internally used, do not overwrite.
         */
        chart: PropTypes.object,
    };

    static defaultProps = {
        chart: donut,
        isAnimated: true,
        shouldShowLoadingState: false,
    };

    constructor(props) {
        super(props);

        this.setRef = this.setRef.bind(this);
    }

    componentDidMount() {
        const { shouldShowLoadingState } = this.props;
        if (!shouldShowLoadingState) {
            this.createChart();
        }
    }

    componentDidUpdate() {
        const { shouldShowLoadingState } = this.props;
        if (!shouldShowLoadingState) {
            if (!this.chart) {
                this.createChart();
            } else {
                this.updateChart();
            }
        }
    }

    componentWillUnmount() {
        const { chart } = this.props;
        chart.destroy(this.rootNode);
    }

    /**
     * We want to remove the chart and data from the props in order to have a configuration object
     * @return {Object} Configuration object for the chart
     */
    getChartConfiguration() {
        const configuration = { ...this.props };

        delete configuration.data;
        delete configuration.chart;
        delete configuration.shouldShowLoadingState;

        return configuration;
    }

    setRef(componentNode) {
        this.rootNode = componentNode;
    }

    createChart() {
        this.chart = this.props.chart.create(
            this.rootNode,
            this.props.data,
            this.getChartConfiguration()
        );
    }

    updateChart() {
        this.props.chart.update(
            this.rootNode,
            this.props.data,
            this.getChartConfiguration(),
            this.chart
        );
    }

    render() {
        const { chart, loadingState } = this.props;
        return loadingContainerWrapper(
            this.props,
            loadingState || chart.loading(),
            <div className="donut-container" ref={this.setRef} />
        );
    }
}
