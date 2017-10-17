import React from 'react';
import PropTypes from 'prop-types';
import tooltip from './tooltipChart';


export default class TooltipComponent extends React.Component {

    static PropTypes = {
        children: PropTypes.element.isRequired,

        dateFormat: PropTypes.string,
        dateLabel: PropTypes.string,
        locale: PropTypes.string,
        nameLabel: PropTypes.string,
        shouldShowDateInTitle: PropTypes.bool,
        title: PropTypes.string,
        topicLabel: PropTypes.string,
        valueFormat: PropTypes.string,
        valueLabel: PropTypes.string,
        topicsOrder: PropTypes.arrayOf(PropTypes.string),
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

        this.props.chart.create(tooltipContainer, this._getChartConfiguration());
    }

    componentDidUpdate() {
        let tooltipContainer = this._rootNode.querySelector('.metadata-group .vertical-marker-container');

        this.props.chart.update(tooltipContainer, this._getChartConfiguration(), this.state);
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
