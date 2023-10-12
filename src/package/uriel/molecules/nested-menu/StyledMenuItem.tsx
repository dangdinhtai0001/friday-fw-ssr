import { useEffect, useRef } from "react";
import { MenuItem } from "@chakra-ui/menu";
import { useColorModeValue } from '@chakra-ui/react';

import { IStyledMenuItemProps } from './_types.d';
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
            // px={2}
            // my={0.5}
            // w="full"
            // boxShadow="0px 2px 0px 0px transparent"
            // borderRadius={0}
            // justifyContent="flex-start"
            // bg="transparent"
            // _hover={{
            //     bg: useColorModeValue("primary.100", "primary.900")
            // }}
            w='full'
            // pl={0}
            px='measurement.8'
            py='measurement.4'
            alignItems='center'
            alignContent='center'
            gap='measurement.4'
            alignSelf='strech'
            flex='1 0 0'
            borderRadius='measurement.8'
            ref={refMenuItem}
        >
            {children}
        </MenuItem>
    );
};

export default StyledMenuItem;
