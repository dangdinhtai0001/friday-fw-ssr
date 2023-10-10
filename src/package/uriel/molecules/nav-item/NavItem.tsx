import { Flex, Text, Icon } from '@chakra-ui/react';
import { mode } from "@chakra-ui/theme-tools";
import { Link } from "react-router-dom";
import _ from 'lodash';
import { INavItemProps } from './_type';

function NavItem(props: INavItemProps) {
    const { title, icon, disabledHover = false, px = 4, _children, path = "/", query, ...flexProps } = props;

    const renderNavContent = () => {
        return (
            <Flex
                align="center"
                px={4}
                py={2}
                borderRadius={1}
                cursor="pointer"
                textDecoration='none'
                _hover={disabledHover || _children ?
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

    if (_children) {
        return renderNavContent();
    }

    return (
        <>
            <Link to={getPath(path, query)} >
                {renderNavContent()}
            </Link>
        </>
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