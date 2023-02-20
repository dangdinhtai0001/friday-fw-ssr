// react imports
import * as React from 'react';
// 3rd imports
// local imports
import Grid from './Grid';
import { ContextState, GridProps } from './Grid.d';
import { GridContextProvider } from './GridContext';

function getInitialContext(props: GridProps): ContextState<any> {
    let { popupDef } = props;
    return {
        processingRow: {
            data: null,
            id: null,
            rowIndex: null,
            triggerByAction: null
        },
        popupDef: popupDef
    };
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
