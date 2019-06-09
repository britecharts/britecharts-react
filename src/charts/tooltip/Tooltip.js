import React from 'react';
import PropTypes from 'prop-types';
import tooltip from './tooltipChart';

const tooltipContainerWithMarkerSelector = '.metadata-group .vertical-marker-container';
const tooltipContainerSelector = '.metadata-group';


export default class Tooltip extends React.Component {

    static propTypes = {

        /**
         * Exposes the constants to be used to force the x axis to respect a
         * certain granularity current options: MINUTE_HOUR, HOUR_DAY, DAY_MONTH, MONTH_YEAR
         */
        axisTimeCombinations: PropTypes.number,

        /**
         * Exposes the ability to use a custom date format
         */
        dateCustomFormat: PropTypes.string,

        /**
         * Exposes the ability to force the tooltip to use a certain date format
         */
        dateFormat: PropTypes.string,

        /**
         * Gets or Sets the dateLabel of the data
         */
        dateLabel: PropTypes.string,

        /**
         * Hides the tooltip
         */
        hide: PropTypes.func,

        /**
         * Pass locale for the tooltip to render the date in
         */
        locale: PropTypes.string,

        /**
         * Gets or Sets the nameLabel of the data
         */
        nameLabel: PropTypes.string,

        /**
         * Gets or Sets shouldShowDateInTitle
         */
        shouldShowDateInTitle: PropTypes.bool,

        /**
         * Shows the tooltip
         */
        show: PropTypes.func,

        /**
         * Gets or Sets the title of the tooltip (to only show the date, set a blank title)
         */
        title: PropTypes.string,

        /**
         * Pass an override for the offset of your tooltip
         */
        tooltipOffset: PropTypes.shape({
            x: PropTypes.number,
            y: PropTypes.number,
        }),

        /**
         * Gets or Sets the topicLabel of the data
         */
        topicLabel: PropTypes.string,

        /**
         * Pass an override for the ordering of your tooltip
         */
        topicsOrder: PropTypes.arrayOf(PropTypes.string),

        /**
         * Updates the position and content of the tooltip
         */
        update: PropTypes.func,

        /**
         * Gets or Sets the number format for the value displayed on the tooltip
         */
        numberFormat: PropTypes.string,

        /**
         * Gets or Sets the formatter function for the value displayed on the tooltip.
        */
        valueFormatter: PropTypes.func,

        /**
         * Gets or Sets the valueLabel of the data
         */
        valueLabel: PropTypes.string,

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
        render: PropTypes.func,

        /**
         * Internally used, do not overwrite.
         *
         * @ignore
         */
        data: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,

        /**
         * Internally used, do not overwrite.
         *
         * @ignore
         */
        customMouseMove: PropTypes.func,

        /**
         * Internally used, do not overwrite.
         *
         * @ignore
         */
        customMouseOut: PropTypes.func,

        /**
         * Internally used, do not overwrite.
         *
         * @ignore
         */
        customMouseOver: PropTypes.func,
    }

    static defaultProps = {
        chart: tooltip,
    }

    constructor(props) {
        super(props);

        if (props.render) {
            this.childChart = props.render({
                data: props.data,
                createTooltip: this._createTooltip,
                customMouseMove: this._handleMouseMove.bind(this),
                customMouseOut: this._handleMouseOut.bind(this),
                customMouseOver: this._handleMouseOver.bind(this),
            });
        }

        this._setRef = this._setRef.bind(this);
    }

    state = {
        isActive: false,
        x: 0,
        y: 0,
        dataPoint: null,
        topicColorMap: null,
    }

    componentDidMount() {
        this._createTooltip();
    }

    componentDidUpdate() {
        const tooltipWithMarkerContainer = this._rootNode.querySelector(tooltipContainerWithMarkerSelector);
        const tooltipContainer = this._rootNode.querySelector(tooltipContainerSelector);

        this.childChart = this.props.render({
            data: this.props.data,
        });

        if (tooltipWithMarkerContainer || tooltipContainer) {
            this._chart = this.props.chart.update(tooltipWithMarkerContainer || tooltipContainer, this._getChartConfiguration(), this.state, this._chart);
        }
    }

    componentWillUnmount() {
        this.props.chart.destroy(this._rootNode);
    }

    _createTooltip = () => {
        const tooltipWithMarkerContainer = this._rootNode.querySelector(tooltipContainerWithMarkerSelector);
        const tooltipContainer = this._rootNode.querySelector(tooltipContainerSelector);

        if (tooltipWithMarkerContainer || tooltipContainer) {
            this._chart = this.props.chart.create(tooltipWithMarkerContainer || tooltipContainer, this._getChartConfiguration());
        }
    }

    /**
     * We want to remove the chart and data from the props in order to have a configuration object
     * @return {Object} Configuration object for the chart
     */
    _getChartConfiguration() {
        const configuration = {...this.props};

        delete configuration.data;
        delete configuration.chart;
        delete configuration.render;

        return configuration;
    }

    _handleMouseMove(dataPoint, topicColorMap, x, y) {
        // Update Tooltip State
        this.setState((state) => ({
            ...state,
            dataPoint,
            topicColorMap,
            x,
            y,
        }));

        const {customMouseMove} = this.props;

        if (customMouseMove) {
            customMouseMove(dataPoint, topicColorMap, x, y);
        }
    }

    _handleMouseOut() {
        // Update Tooltip State
        this.setState((state) => ({...state, isActive: false}));

        const {customMouseOut} = this.props;

        if (customMouseOut) {
            customMouseOut();
        }
    }

    _handleMouseOver() {
        // Update Tooltip State
        this.setState((state) => ({...state, isActive: true}));

        const {customMouseOver} = this.props;

        if (customMouseOver) {
            customMouseOver();
        }
    }

    _setRef(componentNode) {
        this._rootNode = componentNode;
    }

    render() {
        return (
            <div className="tooltip-chart-wrapper" ref={this._setRef}>
                {this.childChart}
            </div>
        );
    }

}
