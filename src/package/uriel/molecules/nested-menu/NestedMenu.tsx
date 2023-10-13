import { useState } from 'react';
import { Flex, Icon, Menu, MenuButton, useDisclosure, Text, MenuList } from '@chakra-ui/react';
import { AiOutlineShoppingCart } from 'react-icons/ai';

import { INestedMenuProps, IItemDefinition } from './_types.d';
import CloseSubMenuOverlay from './CloseSubMenuOverlay';
import NestedMenuItem from './NestedMenuItem';
import NestedMenuItemContent from './NestedMenuItemContent';
import MenuItemSubMenu from './MenuItemSubMenu';

import { menuItemHoverStyles, menuButtonFlexStyles, menuListStyles } from './utils';

function NestedMenu(props: INestedMenuProps) {
    const { itemDef: { icon, label } } = props;

    const [innerMenusActive, setInnerMenusActive] = useState(true);

    const closeSubMenus = () => {
        setInnerMenusActive(false);
    };

    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Menu autoSelect={false} closeOnSelect={false} onClose={onClose} isOpen={isOpen} placement="right-end">
            <CloseSubMenuOverlay isActive={innerMenusActive} closeSubMenu={closeSubMenus} />

            <MenuButton as={Flex} onMouseEnter={onOpen} {...menuItemHoverStyles}>
                <NestedMenuItemContent icon={icon} label={label} />
            </MenuButton>
            {items && (
                <MenuList {...menuListStyles}>
                    {items.map(({ icon, label, type }: IItemDefinition) => (
                        type === 'group' ? (
                            <MenuItemSubMenu>
                            
                            </MenuItemSubMenu>
                        ) : (
                            <NestedMenuItem closeSubMenu={closeSubMenus}>
                                <NestedMenuItemContent icon={icon} label={label} />
                            </NestedMenuItem>
                        )
                    ))}
                </MenuList>
            )
            }
        </Menu >
    );
};

const itemDef: IItemDefinition = {
    label: 'Navigation One', key: 'sub1', icon: AiOutlineShoppingCart, items: [
        {
            label: "Item 1", key: "g1", icon: null, type: "group", items: [
                { label: "Option 1", key: "o1", icon: null },
                { label: "Option 2", key: "o2", icon: null },
            ],
        },
        {
            label: "Item 2", key: "g2", icon: null, type: "group", items: [
                { label: "Option 3", key: "o3", icon: null },
                { label: "Option 4", key: "o4", icon: null },
            ],
        }
    ]
};

const items: IItemDefinition[] = [
    {
        label: 'Navigation One', key: 'sub1', icon: AiOutlineShoppingCart, items: [
            {
                label: "Item 1", key: "g1", icon: null, type: "group", items: [
                    { label: "Option 1", key: "o1", icon: null },
                    { label: "Option 2", key: "o2", icon: null },
                ],
            },
            {
                label: "Item 2", key: "g2", icon: null, type: "group", items: [
                    { label: "Option 3", key: "o3", icon: null },
                    { label: "Option 4", key: "o4", icon: null },
                ],
            }
        ]
    },
    {
        label: 'Navigation Two', key: 'sub2', icon: AiOutlineShoppingCart, items: [
            { label: "Option 5", key: "o5", icon: null },
            { label: "Option 6", key: "o6", icon: null },
            {
                label: "Submenu", key: "sub3", icon: null, type: "group", items: [
                    { label: "Option 7", key: "o7", icon: null },
                    { label: "Option 8", key: "o8", icon: null },
                ],
            },
        ]
    },
    {
        label: 'Navigation Three', key: 'sub3', icon: AiOutlineShoppingCart, items: [
            { label: "Option 9", key: "o9", icon: null },
            { label: "Option 10", key: "o10", icon: null },
            { label: "Option 11", key: "o11", icon: null },
            { label: "Option 12", key: "o12", icon: null },
        ]
    },
];

export default NestedMenu;