import { Button, VStack } from '@chakra-ui/react';
import { ISidebarContentProps } from './_types.d';

export default function SidebarContent(props: ISidebarContentProps) {
    return (
        <VStack>
            <Button w="100%">
                Home
            </Button>
            <Button w="100%">
                About
            </Button>
            <Button w="100%">
                Contact
            </Button>
        </VStack>
    );
}
