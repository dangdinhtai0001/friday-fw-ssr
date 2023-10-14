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
import { ISidebarRouteProps, IItemDefinition } from './_types.d';

import NestedMenu from '../nested-menu/NestedMenu'

export default function SidebarRoute(props: ISidebarRouteProps) {
    return (<>
        <NestedMenu>
            
        </NestedMenu>
    </>)
}
