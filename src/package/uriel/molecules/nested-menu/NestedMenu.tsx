import { Box } from '@chakra-ui/react';

import NestedMenuItem from './NestedMenuItem';
import { INestedMenuProps } from './_types.d';

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
