import React, { Component } from 'react';

// Responsive chart wrapper
// From https://medium.com/@caspg/responsive-chart-with-react-and-d3v4-afd717e57583

export default (ChartComponent) => (
    class ResponsiveChart extends Component {
        constructor(props) {
            super(props);

            this.state = {
                containerWidth: null,
            };

            this.fitParentContainer = this.fitParentContainer.bind(this);
        }

        componentDidMount() {
            this.fitParentContainer();
            window.addEventListener('resize', this.fitParentContainer);
        }

        componentWillUnmount() {
            window.removeEventListener('resize', this.fitParentContainer);
        }

        fitParentContainer() {
            const { containerWidth } = this.state;
            const currentContainerWidth = this.chartContainer.getBoundingClientRect().width;

            const shouldResize = containerWidth !== currentContainerWidth;

            if (shouldResize) {
                this.setState({
                    containerWidth: currentContainerWidth,
                });
            }
        }

        renderChart() {
            const parentWidth = this.props.width || this.state.containerWidth;

            return (
                <ChartComponent {...this.props} width={parentWidth} />
            );
        }

        render() {
            const { containerWidth } = this.state;
            const shouldRenderChart = containerWidth !== null;

            return (
                <div
                    ref={(el) => {
                        this.chartContainer = el;
                    }}
                    className="Responsive-wrapper"
                >
                    {shouldRenderChart && this.renderChart()}
                </div>
            );
        }
    }
);
