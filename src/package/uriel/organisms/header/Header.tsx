import { Flex, Text } from '@chakra-ui/react';

import { IHeaderProps } from './_types';
import IconBreadcrumb from './IconBreadcrumb';
import Activities from './Activities';

function Header(props: IHeaderProps) {
    return (
        <>
            <Flex
                w='full'
                px='measurement.28'
                py='measurement.20'
                justifyContent='space-between'
                alignItems='center'
                borderBottomColor='black.10'
                borderBottomStyle='solid'
                borderBottomWidth='1px'
            >
                <IconBreadcrumb />
                <Activities />
            </Flex>
        </>
    );
}

export default Header;
