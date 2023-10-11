import {
    useColorModeValue,
    Menu,
    MenuButton,
    MenuList,
    useDisclosure
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
                px={2}
                py={1}
                w="full"
                textAlign="left"
                borderRadius="none"
                _hover={{
                    bg: useColorModeValue("primary.100", "primary.900")
                }}
                ref={refSubMenuButton}
            >
                {title}
            </MenuButton>
            <MenuList

                ref={refSubMenuList}

            >
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
