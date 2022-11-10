import { GetContainer } from "@components/portal/Portal";
import type { ReactNode } from 'react';

export interface IDialogPropTypes {
    visible?: boolean;
    getContainer?: GetContainer | false;
    forceRender?: boolean;
    destroyOnClose?: boolean;
    afterClose?: () => any;
    children?: React.ReactElement;
    title?: ReactNode;
}

export interface ActivatorProps {
    onClick?: VoidFunction
    children?: React.ReactElement;
}
