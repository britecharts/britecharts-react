import React from 'react';
import PropTypes from 'prop-types';
import tooltip from './tooltipChart';

const tooltipContainerSelector = '.metadata-group .vertical-marker-container';


export default class TooltipComponent extends React.Component {

    static propTypes = {
        /**
         * Exposes the ability to force the tooltip to use a certain date format
         */
        dateFormat: PropTypes.string,
        /**
         * Gets or Sets the dateLabel of the data
         */
        dateLabel: PropTypes.string,
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
         * Gets or Sets the title of the tooltip (to only show the date, set a blank title)
         */
        title: PropTypes.string,
        /**
         * Gets or Sets the topicLabel of the data
         */
        topicLabel: PropTypes.string,
        /**
         * Pass an override for the ordering of your tooltip
         */
        topicsOrder: PropTypes.arrayOf(PropTypes.string),
        /**
         * Gets or Sets the valueFormat of the tooltip
         */
        valueFormat: PropTypes.string,
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
    }

    state = {
        isActive: false,
        x: 0,
        y: 0,
        dataPoint: {},
        topicColorMap: {},
    }

    componentDidMount() {
console.log('Tooltip --- componentDidMount', this._getChartConfiguration());
        this._createTooltip();
    }

    componentDidUpdate() {
console.log('Tooltip --- componentDidUpdate:', this._getChartConfiguration());
        let tooltipContainer = this._rootNode.querySelector(tooltipContainerSelector);

        if (tooltipContainer) {
            this._chart = this.props.chart.update(tooltipContainer, this._getChartConfiguration(), this.state, this._chart);
        }
    }

    componentWillUnmount() {
console.log('Tooltip --- componentWillUnmount');
        this.props.chart.destroy(this._rootNode);
    }

    _createTooltip = () => {
        let tooltipContainer = this._rootNode.querySelector(tooltipContainerSelector);

        if (tooltipContainer) {
            this._chart = this.props.chart.create(tooltipContainer, this._getChartConfiguration());
        }
console.log('Tooltip --- _createTooltip', this._rootNode.querySelector('.metadata-group'));
    }

    /**
     * We want to remove the chart and data from the props in order to have a configuration object
     * @return {Object} Configuration object for the chart
     */
    _getChartConfiguration() {
        let configuration = {...this.props};

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

        let {customMouseMove} = this.props;

        if (customMouseMove) {
            customMouseMove(dataPoint, topicColorMap, x, y);
        }
    }

    _handleMouseOut() {
        // Update Tooltip State
        this.setState((state) => ({...state, isActive: false}));

        let {customMouseOut} = this.props;

        if (customMouseOut) {
            customMouseOut();
        }
    }

    _handleMouseOver() {
        // Update Tooltip State
        this.setState((state) => ({...state, isActive: true}));

        let {customMouseOver} = this.props;

        if (customMouseOver) {
            customMouseOver();
        }
    }

    _setRef(componentNode) {
        if (componentNode) {
            this._rootNode = componentNode;
        }
    }

    render() {
        return (
            <div className="tooltip-chart-wrapper" ref={this._setRef.bind(this)}>
                {this.childChart}
            </div>
        );
    }

}
