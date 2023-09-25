import * as React from 'react';
import { Button } from '@chakra-ui/react'
import { IPageProps } from '@/package/raphael';

export default function Page(props: IPageProps) {
    console.log(props);

    return (
        <div>
            Đây là index page nè
            <Button colorScheme='blue'>Button</Button>
        </div>
    );
}
