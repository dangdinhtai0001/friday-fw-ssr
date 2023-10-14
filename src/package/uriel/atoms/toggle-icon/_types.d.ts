import { IconType } from "react-icons";
import { IconProps } from '@chakra-ui/react';

export interface IToggleIconProps {
    openIcon: IconType;
    closeIcon: IconType;
    isOpen: boolean;
    iconProps?: IconProps;
}