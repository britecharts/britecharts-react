/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';

import bullet from './bulletChart';
import { loadingContainerWrapper } from '../loading/LoadingContainer';

class Bullet extends React.Component {
    static propTypes = {
        /**
         * Internally used, do not overwrite.
         */
        data: PropTypes.array,

        /**
         * Gets or Sets the aspect ratio of the chart
         */
        aspectRatio: PropTypes.number,

        /**
         * Gets or Sets the colorSchema of the chart. The first color from the array will be applied to range bars (the wider bars). The second color from the array will be applied to measure bars (the narrow bars) and the third to the marker lines.
         */
        colorSchema: PropTypes.arrayOf(PropTypes.string),

        /**
         * Gets or Sets the subtitle for measure identifier range.
         */
        customSubtitle: PropTypes.string,

        /**
         * Gets or Sets the title for measure identifier range.
         */
        customTitle: PropTypes.string,

        /**
         * Gets or Sets the height of the chart
         */
        height: PropTypes.number,

        /**
         * Gets or Sets the isReverse status of the chart. If true, the elements will be rendered in reverse order.
         */
        isReverse: PropTypes.bool,

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
         * Gets or Sets the number format of the bar chart
         */
        numberFormat: PropTypes.string,

        /**
         * Space between axis and chart
         */
        paddingBetweenAxisAndChart: PropTypes.number,

        /**
         * Gets or Sets the starting point of the capacity range.
         * Default is 0.5
         */
        startMaxRangeOpacity: PropTypes.number,

        /**
         * Gets or Sets the number of ticks of the x axis on the chart
         * Default is 5
         */
        ticks: PropTypes.number,

        /**
         * Gets or Sets the width of the chart
         */
        width: PropTypes.number,

        /**
         * Internally used, do not overwrite.
         *
         * @ignore
         */
        chart: PropTypes.object,
    };

    static defaultProps = {
        chart: bullet,
        createTooltip: () => null,
        shouldShowLoadingState: false,
    };

    constructor(props) {
        super(props);

        this.setRef = this.setRef.bind(this);
    }

    componentDidMount() {
        const { data, shouldShowLoadingState } = this.props;
        if (!shouldShowLoadingState) {
            if (data !== null) {
                this.createChart();
            }
        }
    }

    componentDidUpdate() {
        const { createTooltip, shouldShowLoadingState } = this.props;
        if (!shouldShowLoadingState) {
            if (!this.chart) {
                this.createChart();
            } else {
                this.updateChart();
                createTooltip();
            }
        }
    }

    componentWillUnmount() {
        const { chart } = this.props;
        chart.destroy(this.rootNode);
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

    /**
     * We want to remove the chart and data from the props in order to have a configuration object
     * @return {Object} Configuration object for the chart
     */
    getChartConfiguration() {
        let configuration = { ...this.props };

        delete configuration.data;
        delete configuration.chart;
        delete configuration.createTooltip;
        delete configuration.shouldShowLoadingState;

        return configuration;
    }

    setRef(componentNode) {
        this.rootNode = componentNode;
    }

    render() {
        const { chart, loadingState } = this.props;
        return loadingContainerWrapper(
            this.props,
            loadingState || chart.loading(),
            <div className="bullet-container" ref={this.setRef} />
        );
    }
}

export default Bullet;
