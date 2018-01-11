import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

export const loadingContainerWrapper = ({data, shouldShowLoadingState}, loadingState, container) => {
    if (shouldShowLoadingState) {
        container = (
            <LoadingContainer
                data={data}
                loadingState={loadingState}
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
            loadingState,
        } = this.props;
        const chartStyles = {};

        if (this.state.loading) {
            chartStyles.visibility = 'hidden';
        }

        return (
            <div style={{position: 'relative'}}>
                {
                    this.state.loading && 
                        <div
                            className="loading-container__svg-container"
                            dangerouslySetInnerHTML={{ __html: loadingState }}
                            style={{
                                width: '100%',
                                height: '100%',
                                top: 0,
                                left: 0,
                                position: 'absolute',
                            }}
                        />
                }
                <div className="loading-container__children" style={chartStyles}>
                    {children}
                </div>
            </div>
        );
    }
}
