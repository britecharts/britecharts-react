import React from 'react';
import PropTypes from 'prop-types';
import tooltip from './tooltipChart';


export default class TooltipComponent extends React.Component {

    static PropTypes = {
        children: PropTypes.node.isRequired,

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

        // hide
        // show
        // update(dataPoint, colorMapping, position)
    }

    static childContextTypes = {
        customMouseOver: PropTypes.func,
        customMouseMove: PropTypes.func,
        customMouseOut: PropTypes.func,
    }

    static defaultProps = {
        chart: tooltip,
    }

    getChildContext() {
        return {
            customMouseOver: () => console.log('mouseOver Context'),
            customMouseMove: () => console.log('mouseMove Context'),
            customMouseOut: () => console.log('mouseOut Context'),
        };
    }

    componentDidMount() {
        this.props.chart.create(this._rootNode, this._getChartConfiguration());
    }

    componentDidUpdate() {
        this.props.chart.update(this._rootNode, this._getChartConfiguration());
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

    _setRef(componentNode) {
        if (componentNode) {
            this._rootNode = componentNode;
        }
    }

    render() {
        return (
            <div className="tooltip-chart-wrapper">
                {this.props.children}
                <svg className="tooltip-container" ref={this._setRef.bind(this)} />
            </div>
        );
    }

}
