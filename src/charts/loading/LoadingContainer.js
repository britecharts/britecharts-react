import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

export const loadingContainerWrapper = ({data, chart, shouldShowLoadingState}, container) => {
    if (shouldShowLoadingState) {
        container = (
            <LoadingContainer
                data={data}
                loadingState={chart.loading()}
            >
                {container}
            </LoadingContainer>
        );
    }
    return container;
}

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

    componentWillMount() {
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

        let className = 'loading-container';

        if (this.state.loading) {
            className += ' loading-container--loading';
        }

        return (
            <div className={className}>
                {
                    this.state.loading && 
                        <div
                            className="loading-container__svg-container"
                            dangerouslySetInnerHTML={{ __html: loadingState }}
                        />
                }
                {children}
            </div>
        );
    }
}
