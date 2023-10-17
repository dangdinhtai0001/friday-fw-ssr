import { FlexProps } from "@chakra-ui/react";

export interface IIconSwitcherProps {
    openIcon: React.ReactNode;
    closeIcon: React.ReactNode;
    isOpen: boolean = false;
    flexProps?: FlexProps = { };
}