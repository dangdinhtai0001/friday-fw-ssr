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
  Button, Box, useDisclosure
} from '@chakra-ui/react';

import { SidebarItem } from '@package/uriel/molecules/sidebar-item'
import CloseSubMenuOverlay from '../../molecules/nested-menu/CloseSubMenuOverlay';
import { useState } from 'react';
import InnerMenu from '../../molecules/nested-menu/InnerMenu';
import MenuItemSubMenu from '../../molecules/nested-menu/MenuItemSubMenu';
import StyledMenuItem from '../../molecules/nested-menu/StyledMenuItem';

function Sidebar(props: ISidebarProps) {
  // const { isOpen, onOpen, onClose } = useDisclosure()

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
      sidebar
    </div >
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
