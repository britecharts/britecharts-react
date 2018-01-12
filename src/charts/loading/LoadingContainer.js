import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

export const loadingContainerWrapper = ({data, height, shouldShowLoadingState, width}, loadingState, container) => {
    if (shouldShowLoadingState) {
        container = (
            <LoadingContainer
                data={data}
                height={height}
                loadingState={loadingState}
                width={width}
            >
                {container}
            </LoadingContainer>
        );
    }
    return container;
};

const toggleLoading = (state) => ({loading: !state.loading});

export default class LoadingContainer extends PureComponent {
    static propTypes = {
        children: PropTypes.element,
        data: PropTypes.oneOfType(
            [
                PropTypes.object,
                PropTypes.array,
            ]
        ),
        loadingState: PropTypes.string,
    }

    state = {
        loading: true,
    }

    componentDidMount() {
        if (this.props.data !== null) {
            this.setState(toggleLoading);
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.data === null && nextProps.data !== null) {
            this.setState(toggleLoading);
        }
    }

    render() {
        const {
            children,
            height,
            loadingState,
            width,
        } = this.props;
        const chartStyles = {};

        if (this.state.loading) {
            chartStyles.display = 'none';
        }

        let chart = (
            <div className="loading-container__children" style={chartStyles}>
                {children}
            </div>
        );

        return (
            <div>
                {
                    this.state.loading && 
                        <div
                            className="loading-container__svg-container"
                            // eslint-disable-next-line react/no-danger
                            dangerouslySetInnerHTML={{ __html: loadingState }}
                            style={{
                                width: width || '100%',
                                height: height || '100%',
                            }}
                        />
                }
                {chart}
            </div>
        );
    }
}