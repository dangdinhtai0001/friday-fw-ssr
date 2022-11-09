import { GetContainer } from "@components/portal/Portal";

export type IDialogPropTypes = {
    visible?: boolean;
    getContainer?: GetContainer | false;
    forceRender?: boolean;
    destroyOnClose?: boolean;
    afterClose?: () => any;
};