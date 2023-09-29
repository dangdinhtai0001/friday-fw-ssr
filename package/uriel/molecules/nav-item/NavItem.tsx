import { Box, Flex, Text, Icon } from '@chakra-ui/react';
import { mode } from "@chakra-ui/theme-tools";
import { INavItemProps } from './_type';

function NavItem(props: INavItemProps) {
    const { title, icon, disabledHover = false, px = 4, ...flexProps } = props;

    return (
        <>
            <Flex
                align="center"
                px={4}
                py={2}
                borderRadius={1}
                cursor="pointer"
                textDecoration='none'
                _hover={disabledHover ?
                    {} :
                    {
                        bg: mode('primary.100', 'primary.900'),
                        color: 'white',
                    }}
                {...flexProps}
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
        </ >
    );
};

export default NavItem;
