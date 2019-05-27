/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';

import bullet from './bulletChart';
import {loadingContainerWrapper} from '../loading/LoadingContainer';

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
         * Gets or Sets the colorSchema of the chart. The first color from the array will be applied to range bars (the wider bars). The second color from the array will be applied to measure bars (the narrow bars) and marker lines.
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
    }

    static defaultProps = {
        chart: bullet,
        createTooltip: () => null,
        shouldShowLoadingState: false,
    }

    constructor(props) {
        super(props);

        this._setRef = this._setRef.bind(this);
    }

    componentDidMount() {
        if (!this.props.shouldShowLoadingState) {
            if (this.props.data !== null) {
                this._createChart();
            }
        }
    }

    componentDidUpdate() {
        if (!this.props.shouldShowLoadingState) {
            if (!this._chart) {
                this._createChart();
            } else {
                this._updateChart();
                this.props.createTooltip();
            }
        }
    }

    componentWillUnmount() {
        this.props.chart.destroy(this._rootNode);
    }

    _createChart() {
        this._chart = this.props.chart.create(
            this._rootNode,
            this.props.data,
            this._getChartConfiguration()
        );
    }

    _updateChart() {
        this.props.chart.update(
            this._rootNode,
            this.props.data,
            this._getChartConfiguration(),
            this._chart
        );
    }

    /**
     * We want to remove the chart and data from the props in order to have a configuration object
     * @return {Object} Configuration object for the chart
     */
    _getChartConfiguration() {
        let configuration = {...this.props};

        delete configuration.data;
        delete configuration.chart;
        delete configuration.createTooltip;
        delete configuration.shouldShowLoadingState;

        return configuration;
    }

    _setRef(componentNode) {
        this._rootNode = componentNode;
    }

    render() {
        return loadingContainerWrapper(
            this.props,
            this.props.loadingState || this.props.chart.loading(),
            <div className="bullet-container" ref={this._setRef} />
        );
    }
}

export default Bullet;
