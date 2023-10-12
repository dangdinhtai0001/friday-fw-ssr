import {
    useColorModeValue,
    Menu,
    MenuButton,
    MenuList,
    useDisclosure,
    Flex,
    Text
} from "@chakra-ui/react";
import { RefObject, useRef, useEffect, useCallback } from "react";

import { IInnerMenuProps } from './_types.d';
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
        <Menu autoSelect={false} offset={[0, 0]} isOpen={isOpen} placement="right-end">
            <MenuButton
                // px={2}
                // py={1}
                // borderRadius="none"
                // textAlign="left"
                // _hover={{
                //     bg: useColorModeValue("primary.100", "primary.900")
                // }}
                border='1px solid red'
                w="full"

                ref={refSubMenuButton}
            >
                <Flex
                    w='full'
                    pl={0}
                    pr='measurement.8'
                    py='measurement.4'
                    alignItems='center'
                    alignContent='center'
                    gap='measurement.4'
                    alignSelf='strech'
                    flex='1 0 0'
                    borderRadius='measurement.8'
                >
                    <Text color='black.100' textStyle='14.regular'> {title}</Text>
                </Flex>

            </MenuButton>
            <MenuList ref={refSubMenuList} w='full' >
                {childrenItems.map((item, i) => {
                    if (typeof item === "string") {
                        return <MenuItem key={item}>{item}</MenuItem>;
                    }
                    return <MenuItemSubMenu key={item}>{item}</MenuItemSubMenu>;
                })}
            </MenuList>
        </Menu>
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
