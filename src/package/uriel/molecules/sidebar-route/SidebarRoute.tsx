import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Button, Box, useDisclosure, Flex, Text
} from '@chakra-ui/react';


import { SidebarItem } from '@package/uriel/molecules/sidebar-item'
import CloseSubMenuOverlay from '../../molecules/nested-menu/CloseSubMenuOverlay';
import { useState } from 'react';
import InnerMenu from '../../molecules/nested-menu/InnerMenu';
import MenuItemSubMenu from '../../molecules/nested-menu/MenuItemSubMenu';
import StyledMenuItem from '../../molecules/nested-menu/StyledMenuItem';

import { ISidebarRouteProps } from './_types.d';

export default function SidebarRoute(props: ISidebarRouteProps) {
    const [innerMenusActive, setInnerMenusActive] = useState(true);
    const closeSubMenus = () => {
        setInnerMenusActive(false);
    };

    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <div>
            <Menu autoSelect={false} closeOnSelect={false} onClose={onClose} isOpen={isOpen} placement="right-end">
                <CloseSubMenuOverlay
                    isActive={innerMenusActive}
                    closeSubMenu={closeSubMenus}
                />
                <MenuButton as={'div'} onMouseEnter={onOpen}>
                    Menu
                </MenuButton>
                <MenuButton as={'div'} onMouseEnter={onOpen}>
                    Menu 2
                </MenuButton>
                <MenuList transition="all 0.1s" zIndex={999}>
                    <StyledMenuItem closeSubMenu={closeSubMenus}>Music</StyledMenuItem>
                    <MenuItemSubMenu>
                        <InnerMenu
                            title="Movies"
                            childrenItems={[
                                "New Release Movies  ",
                                "Disney Movies  ",
                                "TV Shows  ",
                                "YouTube Video  ",
                                "New Release Movies",
                                "Disney Movies",
                                "TV Shows",
                                "YouTube Video"
                            ]}
                        />
                    </MenuItemSubMenu>
                    <StyledMenuItem closeSubMenu={closeSubMenus}>About</StyledMenuItem>
                    <MenuItemSubMenu>
                        <InnerMenu
                            title="Books"
                            childrenItems={[
                                "Textbooks",
                                "Audiobooks",
                                "Disney Books",
                                <InnerMenu
                                    title="Children's Books"
                                    childrenItems={[
                                        "Happy Birthday to You!",
                                        "On the  Night You...",
                                        <InnerMenu
                                            title="Something else"
                                            childrenItems={[
                                                "... .... ... ... ",
                                                "... .... ... .. ",
                                                "... .... ... . ",
                                                "... .... ... ",
                                                "... .... .. ",
                                                "... .... ."
                                            ]}
                                        />,
                                        "Now You Are One",
                                        "How Do Dinosaurs Say...",
                                        "5 minute stories"
                                    ]}
                                />
                            ]}
                        />
                    </MenuItemSubMenu>
                    <StyledMenuItem closeSubMenu={closeSubMenus}>Contacts</StyledMenuItem>
                </MenuList>
            </Menu>
        </div>
    );
}
