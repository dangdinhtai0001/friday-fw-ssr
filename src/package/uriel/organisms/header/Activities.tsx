import { Flex, Icon, IconButton, useColorMode } from "@chakra-ui/react";

import { CiLight, CiDark, } from 'react-icons/ci';
import { FiBell } from 'react-icons/fi';

import { ToggleIcon } from "@package/uriel/atoms/toggle-icon";
export default function Activities() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex alignItems='flex-start' gap='measurement.20'>
      {/* *********************** || search || *********************** */}
      {/* *********************** || notification || *********************** */}
      <Flex
        alignItems='center'
        alignContent='center'
        gap='measurement.8'
        borderRadius='measurement.8'
      >
        <IconButton
          p='measurement.4'
          justifyContent='center'
          alignItems='center'
          gap='measurement.4'
          borderRadius='measurement.8'
          aria-label=""
          bgColor='transparent'
          icon={<ToggleIcon
            closeIcon={CiDark}
            openIcon={CiLight}
            isOpen={colorMode === 'light'}
            iconProps={{ w: 'measurement.20', h: 'measurement.20' }}
          />}
          onClick={toggleColorMode}
        />
        <IconButton
          p='measurement.4'
          justifyContent='center'
          alignItems='center'
          gap='measurement.4'
          borderRadius='measurement.8'
          aria-label=""
          bgColor='transparent'
          icon={<Icon as={FiBell} w='measurement.20' h='measurement.20' />}
        />
      </Flex>
    </Flex>
  );
};

