// react imports
import * as React from 'react';
// 3rd imports
// local imports
import TabbedDialog from './TabbedDialog';
import { TabbedDialogProps } from './TabbedDialog.d';
import { TabbedDialogContextProvider } from './TabbedDialogContext';

function getInitialContext(props: TabbedDialogProps) {
    const {
        minHeight,
        maxHeight,
        minWidth,
        maxWidth,
        initialHeight,
        initialWidth,
        title,
        actions,
        // 
        value,
        defaultValue
    } = props;

    return {
        opened: false,
        title: title,
        actions: actions,
        minHeight: minHeight ? minHeight : 200,
        maxHeight: maxHeight ? maxHeight : 900,
        minWidth: minWidth ? minWidth : 600,
        maxWidth: maxWidth ? maxWidth : 1000,
        initialHeight: initialHeight ? initialHeight : 300,
        initialWidth: initialWidth ? initialWidth : 600,
        // 
        activedTabId: value ? value : defaultValue,
        defaultActiveId: defaultValue ? defaultValue : value
    };
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
