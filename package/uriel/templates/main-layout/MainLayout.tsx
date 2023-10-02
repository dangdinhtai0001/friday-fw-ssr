"use client"
import { Flex } from '@chakra-ui/react';
import { IMainLayoutProps } from './_type';

import { Sidebar } from '@/package/uriel/organisms/sidebar';

export default function MainLayout(props: IMainLayoutProps) {
  const { children } = props;

  return (
    <>
      <Flex h='full'>
        <Sidebar expandedWidth='250px'></Sidebar>
        {children}
      </Flex>
    </>
  );
}
