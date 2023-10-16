import { Flex, Text } from "@chakra-ui/react";

export default function Logo() {
    return (
        <Flex
            w='180px'
            p='measurement.8'
            direction='column'
            alignItems='center'
            position='absolute'
            left='16px'
            bottom='20px'
            backdropFilter='blur(20px)'
        >
            <Text textStyle='14.regular'>Logo</Text>
        </Flex>
    );
}
