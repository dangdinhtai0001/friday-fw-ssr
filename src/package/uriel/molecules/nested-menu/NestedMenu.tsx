import { Box } from '@chakra-ui/react';
import { Snowflake } from "@theinternetfolks/snowflake";

import NestedMenuItem from './NestedMenuItem';
import { IItemDefinition, INestedMenuProps } from './_types.d';

export default function NestedMenu(props: INestedMenuProps) {
    const { items = [] } = props;

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
        label: 'Dashboard', key: Snowflake.generate(), icon: null, type: 'group', items: [
            { label: "eCommerce", key: Snowflake.generate(), icon: null, items: [] },
            { label: "Projects", key: Snowflake.generate(), icon: null, items: [] },
            { label: "Online Courses", key: Snowflake.generate(), icon: null, items: [] },
        ],
    },
    {
        label: 'Pages', key: Snowflake.generate(), icon: null, type: 'group', items: [
            {
                label: "User Profile", key: Snowflake.generate(), icon: null, items: [
                    { label: "Overview", key: Snowflake.generate(), icon: null },
                    { label: "Projects", key: Snowflake.generate(), icon: null },
                    { label: "Campaigns", key: Snowflake.generate(), icon: null },
                    { label: "Documents", key: Snowflake.generate(), icon: null },
                    { label: "Flowers", key: Snowflake.generate(), icon: null },
                ]
            },
            { label: "Account", key: Snowflake.generate(), icon: null, items: [] },
            { label: "Corporate", key: Snowflake.generate(), icon: null, items: [] },
            { label: "Blog", key: Snowflake.generate(), icon: null, items: [] },
            { label: "Social", key: Snowflake.generate(), icon: null, items: [] },
        ]
    }
];
