import {
    Menu,
    MenuButton,
    MenuList,
    useDisclosure, Flex, Text, Icon
} from '@chakra-ui/react';
import { AiOutlineShoppingCart } from 'react-icons/ai';


import CloseSubMenuOverlay from '../nested-menu-2/CloseSubMenuOverlay';
import { useState } from 'react';
import InnerMenu from '../nested-menu-2/InnerMenu';
import MenuItemSubMenu from '../nested-menu-2/MenuItemSubMenu';
import StyledMenuItem from '../nested-menu-2/StyledMenuItem';

import { ISidebarRouteProps } from './_types.d';

export default function SidebarRoute(props: ISidebarRouteProps) {
    const [innerMenusActive, setInnerMenusActive] = useState(true);
    const closeSubMenus = () => {
        setInnerMenusActive(false);
    };

    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <Flex
            pb='measurement.12'
            direction='column'
            alignItems='flex-start'
            gap='measurement.4'
            alignSelf='strech'
            borderRadius='measurement.0'
            w='full'
        >
            <Menu autoSelect={false} closeOnSelect={false} onClose={onClose} isOpen={isOpen} placement="right-end">
                <CloseSubMenuOverlay
                    isActive={innerMenusActive}
                    closeSubMenu={closeSubMenus}
                />
                <MenuButton
                    as={Flex}
                    onMouseEnter={onOpen} w='full'
                    _hover={{
                        bg: 'black.5',
                        cursor: 'pointer'
                    }}
                >
                    <Flex
                        pl={0}
                        pr='measurement.8'
                        py='measurement.4'
                        gap='measurement.4'
                        alignItems='center'
                        alignContent='center'
                        alignSelf='strech'
                        flex='1 0 0'
                    >
                        <Icon as={AiOutlineShoppingCart} />
                        <Text color='black.100' textStyle='14.regular'>eCommerce</Text>
                    </Flex>
                </MenuButton>
                <MenuList transition="all 0.1s" w='full' p={0} borderRadius='measurement.8'>
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
        </Flex>
    );
}
