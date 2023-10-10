import { Flex } from '@chakra-ui/react';
import { IAdminLayoutProps } from './_type.d';

import { Sidebar } from '@package/uriel/organisms/sidebar';

export default function AdminLayout(props: IAdminLayoutProps) {
  const { children } = props;

  return (
    <>
      <Flex h='100vh'>
        <Sidebar expandedWidth='250px'></Sidebar>
        {children}
      </Flex>
    </>
  );
}