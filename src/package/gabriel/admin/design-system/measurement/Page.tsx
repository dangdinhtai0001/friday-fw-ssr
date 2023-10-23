import { Box, Divider, Flex, Text } from "@chakra-ui/react";

export default function Page() {
    return (
        <>
            <Box p='measurement.40'>
                <Text color='black.100' textStyle='48.semibold'>Spacing, Corner radius</Text>
            </Box>
            <Divider />
            <Flex p='measurement.40' flexDirection='column' alignItems='flex-start' alignSelf='stretch'>
                {/* ***************************************** || NOTES || ***************************************** */}
                <Flex
                    p='measurement.28'
                    alignItems='center'
                    alignContent='center'
                    gap='measurement.4'
                    alignSelf='stretch'
                >
                    {/* ***************************************** || NOTES -- TITLE || ***************************************** */}
                    <Flex
                        minWidth='200px'
                        maxWidth='320px'
                        minHeight='measurement.40'
                        flexDirection='column'
                        justifyContent='center'
                        alignItems='flex-start'
                        flex='1 0 0'
                    >
                        <Text color='black.100' textStyle='24.regular'>Notes</Text>
                    </Flex>
                    {/* ***************************************** || NOTES -- CONTENT || ***************************************** */}
                    <Flex
                        minWidth='358px'
                        flexDirection='column'
                        justifyContent='center'
                        alignItems='flex-start'
                        flex='1 0 0'
                    >
                        <Text color='black.100' textStyle='14.regular'>
                            A dashed border indicates that the value is not available yet. The fill color from dark to light represents the frequency of use from high to low. Different products will have different frequency of use, here is the Snow Dashboard UI Kit↗ as a reference.
                        </Text>
                    </Flex>
                </Flex>
                <Divider />
                {/* ***************************************** || SPACING || ***************************************** */}
                <Flex
                    p='measurement.28'
                    alignItems='center'
                    alignContent='center'
                    gap='measurement.4'
                    alignSelf='stretch'
                >
                    {/* ***************************************** || SPACING -- TITLE || ***************************************** */}
                    <Flex
                        minWidth='200px'
                        maxWidth='320px'
                        minHeight='measurement.40'
                        flexDirection='column'
                        justifyContent='center'
                        alignItems='flex-start'
                        flex='1 0 0'
                    >
                        <Text color='black.100' textStyle='24.regular'>Spacing</Text>
                    </Flex>
                    {/* ***************************************** || SPACING -- CONTENT || ***************************************** */}
                    <Flex flexDirection='column' gap='measurement.24'>
                        {spacingMeasurements.map((measurement, index) => (
                            <Flex key={index} gap={`measurement.${measurement.value}`}>
                                {Array.from({ length: 7 }, (_, _index) => (
                                    <Flex
                                        px='measurement.40'
                                        py='measurement.8'
                                        flexDirection='column'
                                        justifyContent='center'
                                        alignItems='center'
                                        flex='1 0 0'
                                        alignSelf='stretch'
                                        borderWidth='1px'
                                        borderStyle='solid'
                                        borderColor='black.100'
                                        bg={`black.${measurement.frequency}`}
                                    >
                                        <Text textStyle='14.regular' color={measurement.frequency > 50 ? 'white.100' : 'black.100'}>{measurement.value}</Text>
                                    </Flex>
                                ))}
                            </Flex>
                        ))}
                    </Flex>
                </Flex>
                <Divider />
                {/* ***************************************** || CORNER RADIUS || ***************************************** */}
                < Flex
                    p='measurement.28'
                    alignItems='center'
                    alignContent='center'
                    gap='measurement.4'
                    alignSelf='stretch'
                >
                    {/* ***************************************** || CORNER RADIUS -- TITLE || ***************************************** */}
                    <Flex
                        minWidth='200px'
                        maxWidth='320px'
                        minHeight='measurement.40'
                        flexDirection='column'
                        justifyContent='center'
                        alignItems='flex-start'
                        flex='1 0 0'
                    >
                        <Text color='black.100' textStyle='24.regular'>Corner radius</Text>
                    </Flex>
                    {/* ***************************************** || CORNER RADIUS -- CONTENT || ***************************************** */}
                    <Flex flexDirection='column' gap='measurement.24'>
                        {radiusMeasurements.map((measurement, index) => (
                            <Flex key={index} gap='measurement.8'>
                                {Array.from({ length: 7 }, (_, _index) => (
                                    <Flex
                                        px='measurement.40'
                                        py='measurement.8'
                                        flexDirection='column'
                                        justifyContent='center'
                                        alignItems='center'
                                        flex='1 0 0'
                                        alignSelf='stretch'
                                        borderWidth='1px'
                                        borderStyle='solid'
                                        borderColor='black.100'
                                        borderRadius={`measurement.${measurement.value}`}
                                        bg={`black.${measurement.frequency}`}
                                    >
                                        <Text textStyle='14.regular' color={measurement.frequency > 50 ? 'white.100' : 'black.100'}>{measurement.value}</Text>
                                    </Flex>
                                ))}
                            </Flex>
                        ))}
                    </Flex>
                </Flex>
            </Flex >
        </>
    );
};

// const measurements = [80, 48, 40, 32, 28, 24, 20, 16, 12, 8, 4, 2, 1, 0]

const spacingMeasurements = [
    { value: 80, frequency: 5 },
    { value: 48, frequency: 10 },
    { value: 40, frequency: 20 },
    { value: 32, frequency: 5 },
    { value: 28, frequency: 100 },
    { value: 24, frequency: 100 },
    { value: 20, frequency: 40 },
    { value: 16, frequency: 100 },
    { value: 12, frequency: 20 },
    { value: 8, frequency: 100 },
    { value: 4, frequency: 40 },
    { value: 2, frequency: 5 },
    { value: 1, frequency: 5 },
    { value: 0, frequency: 5 },
];

const radiusMeasurements = [
    { value: 80, frequency: 40 },
    { value: 48, frequency: 5 },
    { value: 40, frequency: 5 },
    { value: 32, frequency: 10 },
    { value: 28, frequency: 5 },
    { value: 24, frequency: 40 },
    { value: 20, frequency: 20 },
    { value: 16, frequency: 100 },
    { value: 12, frequency: 10 },
    { value: 8, frequency: 100 },
    { value: 4, frequency: 80 },
    { value: 2, frequency: 5 },
    { value: 1, frequency: 5 },
    { value: 0, frequency: 20 },
]
