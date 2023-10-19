import { Flex } from "@chakra-ui/react";
import { Spinner } from '@package/uriel/atoms/loading'

export default function Loading() {
    return (
        <Flex
            h='full'
            w='full'
            alignItems='center'
            justifyContent='center'
        >
            <Spinner />
        </Flex>
    );
}
