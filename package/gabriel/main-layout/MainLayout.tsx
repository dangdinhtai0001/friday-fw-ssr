"use client"
import { Button, useColorMode } from '@chakra-ui/react';
import { IMainLayoutProps } from './_type.d';

export default function MainLayout(props: IMainLayoutProps) {
  const { children } = props;

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <div>
        <Button onClick={toggleColorMode}>
          Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
        </Button>
      </div>
      {children}
    </>
  );
}
