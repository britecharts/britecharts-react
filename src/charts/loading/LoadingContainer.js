import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

export const loadingContainerWrapper = ({data, height, shouldShowLoadingState, width}, loadingState, container) => {
    if (shouldShowLoadingState) {
        container = (
            <LoadingContainer
                data={data}
                height={height}
                loadingState={loadingState}
                shouldShowLoadingState={shouldShowLoadingState}
                width={width}
            >
                {container}
            </LoadingContainer>
        );
    }
    return container;
};

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
        height: PropTypes.number,
        width: PropTypes.number,
        shouldShowLoadingState: PropTypes.bool,
    }

    render() {
        const {
            children,
            height,
            loadingState,
            shouldShowLoadingState,
            width,
        } = this.props;
        const chartStyles = {};

        if (shouldShowLoadingState) {
            chartStyles.display = 'none';
        }

        const loadingContainer = (
            <div
                className="loading-container__svg-container"
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{ __html: loadingState }}
                style={{
                    width: width || '100%',
                    height: height || '100%',
                }}
            />
        );

        return (
            <div>
                {shouldShowLoadingState && loadingContainer}
                <div className="loading-container__children" style={chartStyles}>
                    {children}
                </div>
            </div>
        );
    }
}