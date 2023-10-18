import { useDisclosure, Menu, MenuButton, MenuGroup, MenuItem, MenuList } from '@chakra-ui/react';

import { INestedMenuItemProps } from './_types.d';
import ItemContent from './ItemContent';
import { LeftChevron, RightChevron } from '@package/uriel/atoms/icons';

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
                        expandIcon={<LeftChevron color='black.40' w='measurement.16' h='measurement.16' />}
                        collapseIcon={<RightChevron color='black.40' w='measurement.16' h='measurement.16' />}
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


