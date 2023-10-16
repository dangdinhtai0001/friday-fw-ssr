import { Flex } from '@chakra-ui/react';
import { IAdminLayoutProps } from './_types.d';
import { Sidebar } from '@package/uriel/organisms/sidebar';
import { Header } from '@/package/uriel/organisms/header';

export default function AdminLayout(props: IAdminLayoutProps) {
    const { children } = props;

    return (
        <Flex h='100vh'>
            <Sidebar />
            <Flex direction='column' h='100%' w='100%'>
                <Header />
                {children}
            </Flex>
        </Flex>
    );
}
