// react imports
import * as React from 'react';
// 3rd imports
// local imports
import Grid from './Grid';
import { GridProps } from './Grid.d';
import { GridContextProvider } from './GridContext';

function getInitialContext(props: GridProps) {
    return {};
}

function GridWrapper(
    props: GridProps,
    ref: React.ForwardedRef<any>
): JSX.Element {

    return (
        <GridContextProvider initialState={getInitialContext(props)}>
            <Grid {...props} ref={ref} />
        </GridContextProvider>
    );
}

export default React.forwardRef(GridWrapper);
