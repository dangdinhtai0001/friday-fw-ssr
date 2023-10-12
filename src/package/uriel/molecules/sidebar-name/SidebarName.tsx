import { Avatar, Box, Flex, Text } from '@chakra-ui/react';
import { ISidebarNameProps } from './_types.d';

export default function SidebarName(props: ISidebarNameProps) {
    const { avatarUrl, name } = props;
    return (
        <>
            {/* Name badge */}
            <Flex
                p='measurement.4'
                alignItems='center'
                alignContent='center'
                alignSelf='stretch'
                flexWrap='wrap'
            >
                {/* Icon text */}
                <Flex
                    alignItems='center'
                    alignContent='center'
                    gap='measurement.8'
                    flex='1 0 0'
                    flexWrap='wrap'
                >
                    {/* Icon set */}
                    <Avatar name={name} w='measurement.24' h='measurement.24' src={avatarUrl} />
                    {/* Text */}
                    <Text color='black.100' textStyle='14.regular'>{name}</Text>
                </Flex>
            </Flex>
        </>
    );
}
