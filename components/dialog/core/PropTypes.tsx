import { GetContainer } from "@components/portal/Portal";

export interface IDialogPropTypes {
    visible?: boolean;
    getContainer?: GetContainer | false;
    forceRender?: boolean;
    destroyOnClose?: boolean;
    afterClose?: () => any;
    children?: React.ReactElement;
}

export interface ActivatorProps {
    onClick?: VoidFunction
    children?: React.ReactElement;
}
