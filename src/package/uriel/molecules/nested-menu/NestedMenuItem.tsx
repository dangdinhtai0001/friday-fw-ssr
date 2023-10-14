import { useDisclosure, Button, Flex, Menu, MenuButton, MenuGroup, MenuItem, MenuItemOption, MenuList, MenuOptionGroup } from '@chakra-ui/react';

import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';

import { INestedMenuItemProps } from './_types.d';
import ItemContent from './ItemContent';

export default function NestedMenuItem(props: INestedMenuItemProps) {
    const { icon, label, items, type } = props;

    const { isOpen, onOpen, onClose } = useDisclosure();

    if (type === 'group') {
        return (
            <Menu placement='right-end'>
                {Array.isArray(items) ? (
                    <MenuGroup title={label} >
                        {items.map(item => (
                            <NestedMenuItem {...item}></NestedMenuItem>
                        ))}
                    </MenuGroup>
                ) : null
                }
            </Menu >
        );
    }

    return (
        <Menu placement='right-end' isOpen={isOpen} onOpen={onOpen} onClose={onClose}>
            {Array.isArray(items) ? (
                <MenuButton  bg={isOpen? 'black.5' : ''}>
                    <ItemContent
                        icon={icon}
                        label={label}
                        expandIcon={AiOutlineRight}
                        collapseIcon={AiOutlineLeft}
                        isOpen={isOpen}
                    />
                </MenuButton>
            ) : (
                <MenuItem  >
                    <ItemContent icon={icon} label={label} />
                </MenuItem>
            )}

            {Array.isArray(items) ? (
                <MenuList >
                    {items.map(item => (
                        <NestedMenuItem {...item}></NestedMenuItem>
                    ))}
                </MenuList>
            ) : null}
        </Menu >
    );
};

const borderLeftStyles = {
    borderLeftColor: 'black.40',
    borderLeftWidth: '2px',
    borderLeftStyle: 'solid'
};
