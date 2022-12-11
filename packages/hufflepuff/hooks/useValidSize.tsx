/* eslint-disable react-hooks/exhaustive-deps */
import { inRange } from 'lodash';
import * as React from 'react';

const useValidSize = (props: { height: number, minHeight: number, maxHeight: number, width: number, minWidth: number, maxWidth: number }) => {
    const { height, minHeight, maxHeight, width, minWidth, maxWidth } = props;

    const [isResizableVertical, setIsResizableVertical] = React.useState(true);
    const [isResizableHorizontal, setIsResizableHorizontal] = React.useState(true);

    const isValidWidth = (_width: number): boolean => {
        if (inRange(_width, minWidth, maxWidth)) {
            return true;
        }

        return false;
    }

    const isValidHeight = (_height: number): boolean => {
        if (inRange(_height, minHeight, maxHeight)) {
            return true;
        }

        return false;
    }

    React.useEffect(() => {
        setIsResizableHorizontal(isValidWidth(width));
    }, [width]);

    React.useEffect(() => {
        setIsResizableVertical(isValidHeight(height));
        console.log(height);

    }, [height])

    return { isResizableVertical, isResizableHorizontal, setIsResizableVertical, isValidWidth, isValidHeight };
}

export default useValidSize;