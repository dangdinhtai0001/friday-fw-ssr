import { ISidebarItemProps } from './_types.d';
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
export default function SidebarItem(props: ISidebarItemProps) {
    const { title, items } = props;

    const { isOpen, onOpen, onClose } = useDisclosure();

    if (!items) {
        return (
            <Menu placement='right-end'>
                <MenuButton as={MenuItem} >
                    {title}
                </MenuButton>
            </Menu>
        );
    }

    return (
        <Menu
            placement='right-end'
            gutter={0}
            isOpen={isOpen}
            onClose={onClose}
            onOpen={onOpen}
        >
            <MenuButton as={MenuItem} onMouseEnter={onOpen} >
                {title}
            </MenuButton>
            {items && (
                <MenuList onMouseEnter={onOpen}>
                    {items.map((child: ISidebarItemProps, index: number) => (
                        <SidebarItem {...child} key={index} />
                    ))}
                </MenuList>
            )}
        </Menu >
    );
}
