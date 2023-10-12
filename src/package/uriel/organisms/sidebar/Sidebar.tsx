import { ISidebarProps } from './_types';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button, Box, useDisclosure, Flex,Text
} from '@chakra-ui/react';

import { SidebarItem } from '@package/uriel/molecules/sidebar-item'
import CloseSubMenuOverlay from '../../molecules/nested-menu/CloseSubMenuOverlay';
import { useState } from 'react';
import InnerMenu from '../../molecules/nested-menu/InnerMenu';
import MenuItemSubMenu from '../../molecules/nested-menu/MenuItemSubMenu';
import StyledMenuItem from '../../molecules/nested-menu/StyledMenuItem';

function Sidebar(props: ISidebarProps) {
  const { expandedWidth = '212px', isExpanded = true, collapsedWidth = '70px' } = props;
  return (
    <Flex
      direction='column'
      alignItems='center'
      gap={4} px={4}
      py={5}
      flexShrink={0}
      h='full'
      w={isExpanded ? expandedWidth : collapsedWidth}
      border='1px solid red'
    >
    </Flex>
  );
}

export const menuItems = [
  {
    title: "Home",
    url: "/",
    items: [
      {
        title: "web design",
        url: "web-design"
      },
      {
        title: "web development",
        url: "web-dev",
        items: [
          {
            title: "Frontend",
            url: "frontend"
          },
          {
            title: "Back End G1",
            isGroup: true,
            items: [
              {
                title: "Java",
                url: "node"
              },
              {
                title: "Rust",
                url: "php"
              }
            ]
          },
          {
            title: "Backend",
            items: [
              {
                title: "NodeJS",
                url: "node"
              },
              {
                title: "PHP",
                url: "php"
              }
            ]
          },
          {
            title: "SEO",
            url: "seo"
          }
        ]
      }
    ]
  },
  {
    title: "Services",
    url: "/services"
  },
  {
    title: "About",
    url: "/about"
  }
];

export default Sidebar;
