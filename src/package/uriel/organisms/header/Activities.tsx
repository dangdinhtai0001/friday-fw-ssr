import { Flex, IconButton, useColorMode } from "@chakra-ui/react";

import { IconSwitcher } from "@package/uriel/atoms/icon-switcher";

import { DarkMode, LightMode, NotificationBell } from '@package/uriel/atoms/icons';

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
          icon={<IconSwitcher
            closeIcon={<DarkMode color='black.100' />}
            openIcon={<LightMode color='black.100' />}
            isOpen={colorMode === 'light'}
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
          icon={<NotificationBell fill='black.100'/>}
        />
      </Flex>
    </Flex>
  );
};

