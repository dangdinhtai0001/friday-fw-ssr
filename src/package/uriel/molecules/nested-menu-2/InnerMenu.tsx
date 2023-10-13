import {
    useColorModeValue,
    Menu,
    MenuButton,
    MenuList,
    useDisclosure,
    Flex,
    Text,
    Box
} from "@chakra-ui/react";
import { RefObject, useRef, useEffect, useCallback } from "react";

import { IInnerMenuProps } from './_types';
import MenuItem from './StyledMenuItem';
import MenuItemSubMenu from './MenuItemSubMenu';


const InnerMenu = (props: IInnerMenuProps) => {
    const { title, childrenItems } = props;

    const refSubMenuButton = useRef<HTMLButtonElement>(null);
    const refSubMenuList = useRef<HTMLDivElement>(null);

    const { isOpen, onOpen, onClose } = useDisclosure();

    const subMenuButtonEnterHandle = useCallback(() => {
        onOpen();
        // fix bug with list animation
        refSubMenuList.current!.style.pointerEvents = "auto";
    }, [onOpen]);
    const subMenuButtonLeaveHandle = useCallback(() => {
        onClose();
    }, [onClose]);

    // fix bug with list animation,
    // hide it when menu closed and open only if button menu is hovered
    useEffect(() => {
        if (!isOpen) {
            refSubMenuList.current!.style.pointerEvents = "none";
        } else {
        }
    }, [isOpen]);

    useEffect(() => {
        addEL(refSubMenuButton, "mouseenter", subMenuButtonEnterHandle);
        addEL(refSubMenuList, "mouseenter", subMenuButtonEnterHandle);
        addEL(refSubMenuButton, "mouseleave", subMenuButtonLeaveHandle);
        addEL(refSubMenuList, "mouseleave", subMenuButtonLeaveHandle);

        return () => {
            remEL(refSubMenuButton, "mouseenter", subMenuButtonEnterHandle);
            remEL(refSubMenuList, "mouseenter", subMenuButtonEnterHandle);
            remEL(refSubMenuButton, "mouseleave", subMenuButtonLeaveHandle);
            remEL(refSubMenuList, "mouseleave", subMenuButtonLeaveHandle);
        };
    }, [subMenuButtonEnterHandle, subMenuButtonLeaveHandle]);

    return (
        <Menu autoSelect={false} offset={[0, 5]} isOpen={isOpen} placement="right-end">
            <MenuButton
                w="full"
                px='measurement.8'
                py='measurement.4'
                _hover={{
                    bg: 'black.5'
                }}
                _focus={{
                    bg: "black.20"
                }}
                ref={refSubMenuButton}
            >
                <Flex
                    alignItems='center'
                    alignContent='center'
                    gap='measurement.4'
                    alignSelf='strech'
                    flex='1 0 0'>
                    <Text color='black.100' textStyle='14.regular'> {title}</Text>
                </Flex>

            </MenuButton>
            <MenuList ref={refSubMenuList} transition="all 0.1s" w='full' p={0} borderRadius='measurement.8' >
                {childrenItems.map((item, index) => {
                    if (typeof item === "string") {
                        return (
                            <MenuItem key={index}>
                                <Box
                                    _hover={{
                                        bg: 'black.5'
                                    }}
                                    _focus={{
                                        bg: "black.20"
                                    }}
                                >
                                    {item}
                                </Box>
                            </MenuItem>
                        )
                    }
                    // return <MenuItemSubMenu key={index}> {item} </MenuItemSubMenu>
                    return (
                        <MenuItemSubMenu key={index}>
                            <Box
                                _hover={{
                                    bg: 'black.5'
                                }}
                                _focus={{
                                    bg: "black.20"
                                }}
                            >
                                {item}
                            </Box>
                        </MenuItemSubMenu>
                    )
                })}
            </MenuList>
        </Menu >
    );
};

function addEL(ref: RefObject<HTMLElement | null>, event: string, handler: () => void) {
    if (ref.current) {
        ref.current.addEventListener(event, handler);
    }
}

function remEL(ref: RefObject<HTMLElement | null>, event: string, handler: () => void) {
    if (ref.current) {
        ref.current.removeEventListener(event, handler);
    }
}

export default InnerMenu;
