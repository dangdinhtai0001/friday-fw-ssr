import { Box, Center, Flex, IconButton, Text } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { IHeaderProps } from './_types.d';

export default function Header(props: IHeaderProps) {
    const { showSidebarButton, onShowSidebar } = props;
    return (
        <Flex bg="tomato" color="white" justifyContent="center">
            <Box flex="1">
                {showSidebarButton && (
                    <IconButton
                        icon={<FontAwesomeIcon icon={faChevronRight} />}
                        colorScheme="blackAlpha"
                        variant="outline"
                        onClick={onShowSidebar}
                        aria-label={''} />
                )}
            </Box>
            <Center flex="1" h="40px">
                <Text fontSize="xl">Page Title</Text>
            </Center>
            <Box flex="1" />
        </Flex>
    );
}
