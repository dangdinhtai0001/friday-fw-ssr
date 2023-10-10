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

function Sidebar(props: ISidebarProps) {
    // const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <div>
            sidebar
            {menuItems.map((item, index) => (
                <SidebarItem {...item} key={index} />
            ))}
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
