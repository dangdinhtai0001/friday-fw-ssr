import { Box, Flex, Menu, Text, Accordion, AccordionItem, AccordionButton, AccordionPanel, Icon, useColorMode } from '@chakra-ui/react';
import { INavItemProps } from './_type';
import { mode } from "@chakra-ui/theme-tools";

function NavItem(props: INavItemProps) {
    const { title, icon, disabledHover = false } = props;

    return (
        <>
            <Box
                as="a"
                href="#"
                style={{ textDecoration: 'none' }}
                _focus={{ boxShadow: 'none' }}>
                <Flex
                    align="center"
                    borderRadius="sm"
                    role="group"
                    cursor="pointer"
                    _hover={disabledHover ?
                        {} :
                        {
                            bg: mode('primary.100', 'primary.900'),
                            color: 'white',
                        }}
                >
                    {icon && (
                        <Icon
                            mr="4"
                            fontSize="16"
                            _groupHover={{
                                color: 'white',
                            }}
                            as={icon!}
                        />
                    )}
                    <Text> {title}</Text>
                </Flex>
            </Box>
        </ >
    );
};

export default NavItem;
