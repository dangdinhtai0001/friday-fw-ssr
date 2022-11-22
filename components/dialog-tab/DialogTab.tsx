// react imports
import React, { Children } from 'react';
// 3rd imports
// local imports
import { DialogTabProps } from './core/interface';
import { Dialog } from '@components/dialog';
import { Tabs } from '@components/tabs';


const DialogTab = (props: DialogTabProps) => {

    const {
        title, actionDefs, onDialogEvent,
        initWidth, initHeight, maxWidth, maxHeight, minWidth, minHeight,
        children
    } = props;

    // ------------------------- || render function || -------------------------

    const renderActivatorContainer = () => {
        if (Children.count(children) === 0) {
            return <></>;
        }

        let _activator = <></>;

        Children.forEach(children, child => {
            if (child && child.type === DialogTab.Activator) {
                _activator = child;
            }
        });

        return _activator;
    };

    const renderDialogContainer = () => {
        return (
            <Tabs>
                {React.Children.map(
                    children, (child) => {
                        if (child && child.type === DialogTab.TabPanel) {
                            return <Tabs.TabPanel {...child?.props} />
                        }
                    }
                )}
            </Tabs>
        );
    }

    return <>
        <Dialog
            title={title} actionDefs={actionDefs} onDialogEvent={onDialogEvent}
            initWidth={initWidth} initHeight={initHeight}
            maxWidth={maxWidth} maxHeight={maxHeight}
            minHeight={minHeight} minWidth={minWidth}
        >
            {renderActivatorContainer()}
            <Dialog.Container>
                {renderDialogContainer()}
            </Dialog.Container>
        </Dialog>
    </>;
}

// eslint-disable-next-line react/display-name
DialogTab.Activator = Dialog.Activator;
DialogTab.TabPanel = Tabs.TabPanel;

export default DialogTab;