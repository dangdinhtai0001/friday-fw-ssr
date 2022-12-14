// react imports
import * as React from 'react';
// 3rd imports
// local imports
import { Button } from '@packages/slytherin/button';
import { ActionDef, DialogContainerProps } from '../Dialog.d';
import { useDialogContext } from '../DialogContext';

function renderDialogActions(actions?: ActionDef[], handleOnActiveAction?: (event: React.MouseEvent<unknown, MouseEvent>, key: string) => void): JSX.Element[] | null {
    if (!actions || actions.length <= 0) {
        return null;
    }

    return actions.map((actionDef) => {
        const { key, component, disabled, visible, label, others } = actionDef;
        if (component) {
            return (
                <div key={key}>
                    visible && {React.cloneElement(component, { ...others, onClick: handleOnActiveAction, disabled })}
                </div>
            );
        } else {
            return (
                <div key={key}>
                    {visible && <Button
                        {...others}
                        onClick={(e) => { handleOnActiveAction?.(e, key) }}
                        disabled={disabled}
                    >
                        {label}
                    </Button>}
                </div>
            );
        }

    });
}

function Footer(
    props: DialogContainerProps,
    ref: React.ForwardedRef<any>
): JSX.Element {
    const {
        onActiveAction
    } = props;

    const { context, helper } = useDialogContext();

    const handleOnActiveAction = async (event: React.MouseEvent<unknown, MouseEvent>, key: string) => {
        await onActiveAction?.(event, key, context, helper);
    }

    return (
        <div className="h-fit rounded-b-[0.5rem] border-t-[0.1rem] flex justify-end gap-[0.5rem] px-[0.5rem] py-[0.3rem] bg-th-background">
            {renderDialogActions(
                context.actions, handleOnActiveAction)
            }
        </div>
    );
}

export default React.forwardRef(Footer);
