// react imports
import * as React from 'react';
// 3rd imports
// local imports
import { GridItemProps } from './GridLayout.d';

function GridItem(
    props: GridItemProps,
    ref: React.ForwardedRef<any>
): JSX.Element {
    return (
        <></>
    );
}

export default React.forwardRef(GridItem);
