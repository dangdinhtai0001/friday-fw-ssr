import { Flex, Text, Icon } from '@chakra-ui/react';
import { mode } from "@chakra-ui/theme-tools";
import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink } from '@chakra-ui/react'
import _ from 'lodash';
import { INavItemProps } from './_type';

function NavItem(props: INavItemProps) {
    const { title, icon, disabledHover = false, px = 4, _children, path = "/", query, isDefault, navSize, ...flexProps } = props;

    const renderNavContent = () => {
        if (navSize === 'small') {
            return (
                <Flex
                    align="center"
                    justify='center'
                    w='full'
                    _hover={disabledHover || _children ?
                        {} :
                        { bg: mode('primary.100', 'primary.900'), }
                    }
                    className='nav-item--small'
                    {...flexProps}
                >
                    {icon && (<Icon fontSize="21" as={icon!} />)}
                </Flex>
            );
        };

        return (
            <Flex
                align="center"
                px={4}
                py={1}
                borderRadius={1}
                cursor="pointer"
                textDecoration='none'
                _hover={disabledHover || _children ?
                    {} :
                    { bg: mode('primary.100', 'primary.900'), }
                }
                className='nav-item--large'
                {...flexProps}
            >
                {icon && (
                    <Icon
                        mr="4" fontSize="21" as={icon!} />
                )}
                <Text textDecoration='none'> {title}</Text>
            </Flex>
        )
    }

    if (_children) {
        return renderNavContent();
    }

    return (
        <ChakraLink as={ReactRouterLink} w='full' to={getPath(path, query)} textDecoration='none'>
            {renderNavContent()}
        </ChakraLink>
    );
};

function encodeURIComponent(str: string) {
    return encodeURI(str).replace(/[!'()*]/g, escape);
}

function getPath(initialPath: string, query?: Record<string, string>): string {

    if (!query) {
        return initialPath;
    }

    const template = `${initialPath}?<%= query %>`;

    const encodedQuery = _.map(query, (value, key) => {
        return `${key}=${encodeURIComponent(value)}`;
    }).join('&');

    return _.template(template)({ query: encodedQuery });

}

export default NavItem;