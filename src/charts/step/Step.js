import React from 'react';
import PropTypes from 'prop-types';
import step from './stepChart';
import {loadingContainerWrapper} from '../loading/LoadingContainer';

class Step extends React.Component {

    static propTypes = {
        /**
         * Internally used, do not overwrite.
         */
        data: PropTypes.arrayOf(PropTypes.any),

        /**
         * Chart exported to png and a download action is fired
         */
        exportChart: PropTypes.func,

        /**
         * Gets or Sets the height of the chart
         */
        height: PropTypes.number,

        /**
         * Gets or Sets the loading state of the chart (string must be markup).
         */
        loadingState: PropTypes.string,

        /**
         * Gets or Sets whether a loading state will be shown
         */
        shouldShowLoadingState: PropTypes.bool,

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
         * Gets or Sets the width of the chart
         */
        width: PropTypes.number,

        /**
         * Gets or Sets the text of the xAxisLabel on the chart
         */
        xAxisLabel: PropTypes.string,

        /**
         * Gets or Sets the offset of the xAxisLabel on the chart
         */
        xAxisLabelOffset: PropTypes.number,

        /**
         * Gets or Sets the text of the yAxisLabel on the chart
         */
        yAxisLabel: PropTypes.string,

        /**
         * Gets or Sets the offset of the yAxisLabel on the chart
         */
        yAxisLabelOffset: PropTypes.number,

        /**
         * Gets or Sets the number of ticks of the y axis on the chart (Default is 6)
         */
        yTicks: PropTypes.number,

        customMouseOver: PropTypes.func,
        customMouseMove: PropTypes.func,
        customMouseOut: PropTypes.func,

        /**
         * Internally used, do not overwrite.
         *
         * @ignore
         */
        chart: PropTypes.object,

        /**
         * Internally used, do not overwrite.
         *
         * @ignore
         */
        createTooltip: PropTypes.func,
    }

    static defaultProps = {
        chart: step,
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
        const configuration = {...this.props};

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
            this.props.chart.loading(),
            <div className="step-container" ref={this._setRef} />
        );
    }
}

export default Step;
