import { Box, Flex, Text, Image, Center, Spacer } from '@chakra-ui/react';
import { useLottie } from 'lottie-react';

import { Logo, Copyright } from '@/package/uriel/atoms/brand';
import { IPageNotFoundProps } from './_types.d';
import animationData from '@package/uriel/atoms/lottie/404-animation.json';

export default function PageNotFound(props: IPageNotFoundProps) {
    const Lottie = useLottie(defaultOptions, style);

    return (
        <Flex w='full' h='100vh' flexDirection='column'>
            {/* ************** || Header || ************** */}
            <Flex
                px='measurement.28'
                py='measurement.16'
                justifyContent='space-between'
                alignItems='flex-start'
            >
                <Logo />
            </Flex>
            {/* ************** || Frame || ************** */}
            <Center h='full'>

                <Box
                    display='inline-flex'
                    flexDirection='column'
                    alignItems='center'
                    justifyItems='center'
                    gap='measurement.28'
                    borderRadius='measurement.0'
                >
                    <Flex
                        flexDirection='column'
                        justifyContent='center'
                        alignItems='flex-start'
                        gap='measurement.8'
                        borderRadius='measurement.8'
                    >
                        <Text color='black.100' textStyle='48.semibold'>Page Not Found</Text>
                    </Flex>
                    <Center w='full'>
                        {Lottie.View}
                    </Center>
                </Box>
            </Center>
            {/* ************** || Copyright || ************** */}
            <Spacer />
            <Center pb='measurement.48'>
                <Copyright />
            </Center>
        </Flex>
    );
};

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
};

const style = {
    height: 250,
};

