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
  Button, Box, useDisclosure, Flex, Text
} from '@chakra-ui/react';


import { SidebarItem } from '@package/uriel/molecules/sidebar-item'
import CloseSubMenuOverlay from '../../molecules/nested-menu-2/CloseSubMenuOverlay';
import { useState } from 'react';
import InnerMenu from '../../molecules/nested-menu-2/InnerMenu';
import MenuItemSubMenu from '../../molecules/nested-menu-2/MenuItemSubMenu';
import StyledMenuItem from '../../molecules/nested-menu-2/StyledMenuItem';

import { SidebarName } from '@package/uriel/molecules/sidebar-name';
import { SidebarFavorite } from '@package/uriel/molecules/sidebar-favorite';
import { SidebarRoute } from '@package/uriel/molecules/sidebar-route';

function Sidebar(props: ISidebarProps) {
  const { expandedWidth = '212px', isExpanded = true, collapsedWidth = '70px' } = props;
  return (
    <Flex
      w={isExpanded ? expandedWidth : collapsedWidth}
      direction='column'
      alignItems='center'
      gap='measurement.16'
      px='measurement.16'
      py='measurement.20'
      flexShrink={0}
      h='full'
      borderRight='1px'
      borderRightColor='black.10'
    >
      {/* Name badge */}
      <SidebarName {...sidebarNameProps} />
      {/* Favorite frame */}
      <SidebarFavorite {...sidebaFavoriteProps} />
      {/* route frame */}
      <SidebarRoute />
    </Flex>
  );
}

const sidebarNameProps = {
  avatarUrl: "https://bit.ly/dan-abramov",
  name: "ByeWind"
}

const sidebaFavoriteProps = {
  favorites: [{ display: "Overview", "url": "" }, { display: "Projects", "url": "" }],
  recently: [{ display: "re-Overview", "url": "" }, { display: "re-Projects", "url": "" }]
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
