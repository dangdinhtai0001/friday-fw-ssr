import { Box, Flex, Text, Icon } from '@chakra-ui/react';
import { mode } from "@chakra-ui/theme-tools";
import { INavItemProps } from './_type';

function NavItem(props: INavItemProps) {
    const { title, icon, disabledHover = false, px = 4, items, pathname, query, ...flexProps } = props;

    const renderNavContent = () => {
        return (
            <Flex
                align="center"
                px={4}
                py={2}
                borderRadius={1}
                cursor="pointer"
                textDecoration='none'
                _hover={disabledHover || items ?
                    {} :
                    { bg: mode('primary.100', 'primary.900'), }
                }
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
                <Text textDecoration='none'> {title}</Text>
            </Flex>
        )
    }

    if (items) {
        return renderNavContent();
    }

    return (
        <>
            {/* <Link href={{ pathname, query, }} textDecoration='none' > */}
            {renderNavContent()}
            {/* </Link> */}
        </>
    );
};

export default NavItem;