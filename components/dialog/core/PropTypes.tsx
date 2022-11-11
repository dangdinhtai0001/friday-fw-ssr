import { GetContainer } from "@components/portal/Portal";
import type { ReactNode } from 'react';
import type { ActionDef } from "./DialogContext";

interface DialogEventProps {
    key: string;
    hook: any;
}

export interface IDialogPropTypes {
    visible?: boolean;
    getContainer?: GetContainer | false;
    forceRender?: boolean;
    destroyOnClose?: boolean;
    afterClose?: () => any;
    children?: React.ReactElement | React.ReactElement[];
    title?: ReactNode;
    actionDefs: ActionDef[];
    onDialogEvent?: (props: DialogEventProps) => void
}

export interface ActivatorProps {
    onClick?: VoidFunction
    children?: React.ReactElement;
}
