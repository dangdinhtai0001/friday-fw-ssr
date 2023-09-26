import * as React from 'react';
import { Box, Button } from '@chakra-ui/react'
import { IPageProps } from '@/package/raphael';

export default function Page(props: IPageProps) {
    return (
        <div>
            Đây là index page nè
            <Button colorScheme='red'>Button</Button>
            <Box bgColor="background.100" height={100} width={100}></Box>
            <Box bgColor="text.50" height={100} width={100}></Box>
        </div>
    );
}
