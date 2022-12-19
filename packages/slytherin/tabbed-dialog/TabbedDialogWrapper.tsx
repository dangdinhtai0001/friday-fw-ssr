// react imports
import * as React from 'react';
// 3rd imports
// local imports
import TabbedDialog from './TabbedDialog';
import { TabbedDialogProps } from './TabbedDialog.d';
import { TabbedDialogContextProvider } from './TabbedDialogContext';
import { getTabbedInitialContext } from './TabbedDialogUtils';


function TabbedDialogWrapper(
    props: TabbedDialogProps,
    ref: React.ForwardedRef<any>
): JSX.Element {
    return (
        <TabbedDialogContextProvider initialState={getTabbedInitialContext(props)}>
            <TabbedDialog {...props} ref={ref} />
        </TabbedDialogContextProvider>
    );
}

export default React.forwardRef(TabbedDialogWrapper);
