import React from 'react';
import PropTypes from 'prop-types';
import tooltip from './tooltipChart';


export default class TooltipComponent extends React.Component {

    static propTypes = {
        /**
         * Child chart to render
         */
        children: PropTypes.element.isRequired,

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
         */
        chart: PropTypes.object.isRequired
    }

    static defaultProps = {
        chart: tooltip,
    }

    constructor(props) {
        super(props);

        this.child = React.cloneElement(
            this.props.children,
            {
                customMouseMove: this._handleMouseMove.bind(this),
                customMouseOut: this._handleMouseOut.bind(this),
                customMouseOver: this._handleMouseOver.bind(this),
            }
        );
    }

    state = {
        isActive: false,
        x: 0,
        y: 0,
        dataPoint: {},
        topicColorMap: {},
    }

    componentDidMount() {
        let tooltipContainer = this._rootNode.querySelector('.metadata-group .vertical-marker-container');

        if (tooltipContainer) {
            this.props.chart.create(tooltipContainer, this._getChartConfiguration());
        }
    }

    componentDidUpdate() {
        let tooltipContainer = this._rootNode.querySelector('.metadata-group .vertical-marker-container');

        if (tooltipContainer) {
            this.props.chart.update(tooltipContainer, this._getChartConfiguration(), this.state);
        }
    }

    componentWillUnmount() {
        this.props.chart.destroy(this._rootNode);
    }

    /**
     * We want to remove the chart and data from the props in order to have a configuration object
     * @return {Object} Configuration object for the chart
     */
    _getChartConfiguration() {
        let configuration = {...this.props};

        delete configuration.data;
        delete configuration.chart;
        delete configuration.children;

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

        let {children: {props: {customMouseMove}}} = this.props;

        if (customMouseMove) {
            customMouseMove(dataPoint, topicColorMap, x, y);
        }
    }

    _handleMouseOut() {
        // Update Tooltip State
        this.setState((state) => ({...state, isActive: false}));

        let {children: {props: {customMouseOut}}} = this.props;

        if (customMouseOut) {
            customMouseOut();
        }
    }

    _handleMouseOver() {
        // Update Tooltip State
        this.setState((state) => ({...state, isActive: true}));

        let {children: {props: {customMouseOver}}} = this.props;

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
            <div className="tooltip-chart-wrapper" ref={this._setRef.bind(this)} >
                {this.child}
            </div>
        );
    }

}
