import { ISidebarProps } from './_types';
import { Flex, Spacer } from '@chakra-ui/react';

import { Logo } from '@/package/uriel/atoms/brand';
import NameBadge from './NameBadge';
import Categories from './Categories';

function Sidebar(props: ISidebarProps) {
  const { expandedWidth = '212px', isExpanded = true, collapsedWidth = '70px' } = props;
  return (
    <Flex
      w={isExpanded ? expandedWidth : collapsedWidth}
      direction='column'
      alignItems='center'
      gap='measurement.16'
      px='measurement.16'
      py='measurement.20'
      flexShrink={0}
      h='full'
      borderRight='1px'
      borderRightColor='black.10'
    >
      {/* Name badge */}
      <NameBadge />
      {/* Categories */}
      <Categories />
      <Spacer />
      {/* logo */}
      <Logo />
    </Flex>
  );
}

export default Sidebar;
