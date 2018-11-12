import React from 'react';
import PropTypes from 'prop-types';
import sparkline from './sparklineChart';
import {loadingContainerWrapper} from '../loading/LoadingContainer';

class Sparkline extends React.Component {

    static propTypes = {
        /**
         * Internally used, do not overwrite.
         */
        data: PropTypes.arrayOf(PropTypes.any),

        /**
         * Gets or Sets the areaGradient of the chart
         */
        areaGradient: PropTypes.arrayOf(PropTypes.string),

        /**
         * Gets or Sets the dateLabel of the chart
         */
        dateLabel: PropTypes.string,

        /**
         * Gets or Sets the duration of the animation
         */
        duration: PropTypes.number,

        /**
         * Chart exported to png and a download action is fired
         */
        exportChart: PropTypes.string,

        /**
         * Gets or Sets the height of the chart
         */
        height: PropTypes.number,

        /**
         * Gets or Sets the isAnimated property of the chart,
         * making it to animate when render.
         * By default this is 'false'
         */
        isAnimated: PropTypes.bool,

        /**
         * Gets or Sets the lineGradient of the chart
         */
        lineGradient: PropTypes.arrayOf(PropTypes.string),

        /**
         * Gets or Sets the loading state of the chart
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
         * Gets or Sets the text of the title at the top of the chart.
         * To style the title text, use the titleTextStyle method below.
         */
        titleText: PropTypes.string,

        /**
         * Gets or Sets the text style object of the title at the top of sparkline.
         * Using this method, you can set font-family, font-size, font-weight, font-style,
         * and color (fill). The default text font settings:
         *
         * <pre>
         * <code>
         * {
         *    'font-family': 'sans-serif',
         *    'font-size': '22px',
         *    'font-weight': 0,
         *    'font-style': 'normal',
         *    'fill': linearGradient[0]
         * }
         * </code>
         * </pre>
         *
         * You can set attributes individually. Setting just 'font-family'
         * within the object will set custom 'font-family` while the rest
         * of the attributes will have the default values provided above.
         */
        titleTextStyle: PropTypes.shape({
            'font-family': PropTypes.string,
            'font-size': PropTypes.string,
            'font-weight': PropTypes.number,
            'font-style': PropTypes.string,
            'fill': PropTypes.string,
        }),

        /**
         * Gets or Sets the valueLabel of the chart
         */
        valueLabel: PropTypes.string,

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

        /**
         * Internally used, do not overwrite.
         *
         * @ignore
         */
        createTooltip: PropTypes.func,
    }

    static defaultProps = {
        chart: sparkline,
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
            <div className="sparkline-container" ref={this._setRef} />
        );
    }
}

export default Sparkline;
