import { useEffect, useRef } from "react";
import { MenuItem } from "@chakra-ui/menu";
import { Flex, Text } from '@chakra-ui/react';

import { IStyledMenuItemProps } from './_types';
const StyledMenuItem = (props: IStyledMenuItemProps) => {
    const { children, closeSubMenu } = props;

    const refMenuItem = useRef<HTMLButtonElement | null>(null);

    useEffect(() => {
        if (refMenuItem.current && closeSubMenu) {
            refMenuItem.current.addEventListener("mouseenter", closeSubMenu);
        }

        return () => {
            if (refMenuItem.current && closeSubMenu) {
                refMenuItem.current.removeEventListener("mouseenter", closeSubMenu);
            }
        };
    }, [closeSubMenu]);

    return (
        <MenuItem
            as={Flex}
            w='full'
            px='measurement.8'
            py='measurement.4'
            alignItems='center'
            alignContent='center'
            gap='measurement.4'
            alignSelf='strech'
            flex='1 0 0'
            _hover={{
                bg: 'black.5',
                cursor: 'pointer',
            }}
            ref={refMenuItem}
        >
            <Text color='black.100' textStyle='14.regular'>{children}</Text>
        </MenuItem>
    );
};

export default StyledMenuItem;
