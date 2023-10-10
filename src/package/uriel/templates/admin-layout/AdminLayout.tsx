import { Flex, useDisclosure } from '@chakra-ui/react';
import { IAdminLayoutProps } from './_type.d';

import { Sidebar } from '@package/uriel/organisms/sidebar';
import { NavBar } from '@package/uriel/organisms/navbar';

function AdminLayout(props: IAdminLayoutProps) {
  const { children } = props;

  const { isOpen: isSidebarExpanded, onOpen, onClose } = useDisclosure({ defaultIsOpen: true });

  const handleOnClickNavBarToggle = () => {
    isSidebarExpanded ? onClose() : onOpen();
  }

  return (
    <>
      <Flex h='100vh'>
        <Sidebar
          expandedWidth='250px'
          collapsedWidth='80px'
          logoHeight={logoHeight}
          isExpanded={isSidebarExpanded}
        />
        <Flex direction='column' h='100%' w='100%'>
          <NavBar height={logoHeight} onClickToggle={handleOnClickNavBarToggle} />
          {children}
        </Flex>
      </Flex>
    </>
  );
};

const logoHeight = '50px';

export default AdminLayout;