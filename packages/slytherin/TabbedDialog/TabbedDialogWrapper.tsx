// react imports
import * as React from 'react';
// 3rd imports
// local imports
import TabbedDialog from './TabbedDialog';
import { TabbedDialogProps } from './TabbedDialog.d';
import { TabbedDialogContextProvider } from './TabbedDialogContext';

function getInitialContext(props: TabbedDialogProps) {
    return {};
}

function TabbedDialogWrapper(
    props: TabbedDialogProps,
    ref: React.ForwardedRef<any>
): JSX.Element {

    return (
        <TabbedDialogContextProvider initialState={getInitialContext(props)}>
            <TabbedDialog {...props} ref={ref} />
        </TabbedDialogContextProvider>
    );
}

export default React.forwardRef(TabbedDialogWrapper);
