import { Box } from '@chakra-ui/react';
import NestedMenuItem from './NestedMenuItem';
import { INestedMenuProps, IItemDefinition } from './_types.d';

import { DiAndroid } from 'react-icons/di';

export default function NestedMenu(props: INestedMenuProps) {
    return (
        <Box w='full'>
            {items.map(item => (
                <NestedMenuItem {...item}></NestedMenuItem>
            ))}
        </Box>
    );
};

const items: IItemDefinition[] = [
    {
        label: 'Navigation One', key: 'sub1', icon: DiAndroid, items: [
            {
                label: "Item 1", key: "g1", icon: DiAndroid, type: "group", items: [
                    { label: "Option 1", key: "o1", icon: DiAndroid },
                    { label: "Option 2", key: "o2", icon: DiAndroid },
                ],
            },
            {
                label: "Item 2", key: "g2", icon: DiAndroid, type: "group", items: [
                    { label: "Option 3", key: "o3", icon: DiAndroid },
                    { label: "Option 4", key: "o4", icon: DiAndroid },
                ],
            }
        ]
    },
    {
        label: 'Navigation Two', key: 'sub2', icon: DiAndroid, items: [
            { label: "Option 5", key: "o5", icon: DiAndroid },
            { label: "Option 6", key: "o6", icon: DiAndroid },
            {
                label: "Submenu", key: "sub3", icon: DiAndroid, items: [
                    { label: "Option 7", key: "o7", icon: DiAndroid },
                    { label: "Option 8", key: "o8", icon: DiAndroid },
                ],
            },
        ]
    },
    {
        label: 'Navigation Three', key: 'sub3', icon: DiAndroid, items: [
            { label: "Option 9", key: "o9", icon: DiAndroid },
            { label: "Option 10", key: "o10", icon: DiAndroid },
            { label: "Option 11", key: "o11", icon: DiAndroid },
            { label: "Option 12", key: "o12", icon: DiAndroid },
        ]
    },
    {
        label: 'Navigation Four', key: 'sub4', icon: DiAndroid, type: "group", items: [
            { label: "Item 3", key: "i3", icon: DiAndroid },
            {
                label: "Item 4", key: "i4", icon: DiAndroid, items: [
                    { label: "Option 13", key: "o13", icon: DiAndroid },
                    { label: "Option 14", key: "o14", icon: DiAndroid },
                    { label: "Option 15", key: "o15", icon: DiAndroid },
                ]
            },
            { label: "Item 5", key: "i5", icon: DiAndroid },
        ]
    }
];
