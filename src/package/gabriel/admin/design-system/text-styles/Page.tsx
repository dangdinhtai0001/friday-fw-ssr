import { Box, Text, Divider, Flex } from "@chakra-ui/react";

export default function Page() {
    return (
        <>
            <Box p='measurement.40'>
                <Text color='black.100' textStyle='48.semibold'>Text styles</Text>
            </Box>
            <Divider />
            {/* ***************************************** || TEXT || ***************************************** */}
            <Flex p='measurement.40' flexDirection='column' alignItems='flex-start' alignSelf='stretch'>
                {/* ***************************************** || TEXT LOOP  || ***************************************** */}
                {textStyles.map((data, index) => (
                    <Flex
                        key={index}
                        p='measurement.28'
                        alignItems='flex-start'
                        alignContent='flex-start'
                        gap='measurement.4'
                        alignSelf='stretch'
                    >
                        {/* ***************************************** || TEXT STYLE || ***************************************** */}
                        <Flex
                            minWidth='200px'
                            maxWidth='320px'
                            minHeight='measurement.40'
                            flexDirection='column'
                            justifyContent='center'
                            alignItems='flex-start'
                            flex='1 0 0'
                        >
                            <Text color='black.100' textStyle='24.regular'>{data.name}</Text>
                        </Flex>
                        {/* ***************************************** || TEXT STYLE DETAIL || ***************************************** */}
                        <Flex alignItems='flex-start' gap='measurement.28' flex='1 0 0' >
                            <Flex flexDirection='column' alignItems='flex-start' gap='measurement.8' flex='1 0 0'>
                                {data.styles.map((style, index) => (
                                    <Flex
                                        key={index}
                                        p='measurement.20'
                                        flexDirection='column'
                                        justifyContent='center'
                                        alignItems='flex-start'
                                        borderRadius='measurement.16'
                                        bg='black.5'
                                    >
                                        <Text color='black.100' textStyle={style}>{style}</Text>
                                    </Flex>
                                ))}
                            </Flex>
                        </Flex>
                    </Flex>
                ))}
            </Flex>
        </>
    );
};

const textStyles = [
    {
        name: 'Font: Inter',
        styles: [
            '64.semibold', '64.regular',
            '48.semibold', '48.regular',
            '24.semibold', '24.regular',
            '18.semibold', '18.regular',
            '14.semibold', '14.regular',
            '12.semibold', '12.regular',
        ]
    }
]
