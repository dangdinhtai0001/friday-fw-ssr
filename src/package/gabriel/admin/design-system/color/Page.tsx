import { Box, Text, Divider, Flex } from "@chakra-ui/react"

export default function Page() {
    return (
        <>
            <Box p='measurement.40'>
                <Text color='black.100' textStyle='48.semibold'>Color</Text>
            </Box>
            <Divider />
            {/* ***************************************** || COLOR || ***************************************** */}
            <Flex p='measurement.40' flexDirection='column' alignItems='flex-start' alignSelf='stretch'>
                {/* ***************************************** || COLOR LOOP  || ***************************************** */}
                {colorSchemes.map((scheme, index) => (
                    <Flex
                        key={index}
                        p='measurement.28'
                        alignItems='flex-start'
                        alignContent='flex-start'
                        gap='measurement.4'
                        alignSelf='stretch'
                    >
                        {/* ***************************************** || TEXT || ***************************************** */}
                        <Flex
                            minWidth='200px'
                            maxWidth='320px'
                            minHeight='measurement.40'
                            flexDirection='column'
                            justifyContent='center'
                            alignItems='flex-start'
                            flex='1 0 0'
                        >
                            <Text color='black.100' textStyle='24.regular'>{scheme.name}</Text>
                        </Flex>
                        {/* ***************************************** || COLOR DETAIL || ***************************************** */}
                        <Flex alignItems='flex-start' gap='measurement.28' flex='1 0 0' >
                            <Flex flexDirection='column' alignItems='flex-start' gap='measurement.8' flex='1 0 0'>
                                {scheme.pastel.map((color, index) => (
                                    <Flex
                                        key={index}
                                        p='measurement.20'
                                        flexDirection='column'
                                        justifyContent='center'
                                        alignItems='flex-start'
                                        alignSelf='stretch'
                                        borderRadius='measurement.16'
                                        borderStyle='solid'
                                        borderWidth='1px'
                                        borderColor={color.border ? color.border : 'white.100'}
                                        bg={color.bg}
                                    >
                                        <Text color={color.text} textStyle='14.regular'>{color.bg}</Text>
                                    </Flex>
                                ))}

                            </Flex>
                        </Flex>
                    </Flex>
                ))}
            </Flex>
        </>
    );
}

const colorSchemes: { name: string, pastel: { bg: string, text: string, border?: string }[] }[] = [
    {
        name: "Black", pastel: [
            { bg: 'black.100', text: 'white.100', },
            { bg: 'black.80', text: 'white.100' },
            { bg: 'black.40', text: 'white.100' },
            { bg: 'black.20', text: 'black.100' },
            { bg: 'black.10', text: 'black.100' },
            { bg: 'black.5', text: 'black.100' },
        ]
    },
    {
        name: "White", pastel: [
            { bg: 'white.100', text: 'black.100', border: 'black.100' },
            { bg: 'white.80', text: 'black.100', border: 'black.80' },
            { bg: 'white.40', text: 'black.100', border: 'black.40' },
            { bg: 'white.20', text: 'black.100', border: 'black.20' },
            { bg: 'white.10', text: 'black.100', border: 'black.10' },
            { bg: 'white.5', text: 'black.100', border: 'black.5' },
        ]
    },
    {
        name: "Primary", pastel: [
            { bg: 'primary.brand', text: 'white.100', },
            { bg: 'primary.blue', text: 'black.100' },
            { bg: 'primary.purple', text: 'black.100' },
            { bg: 'primary.purple50', text: 'black.100' },
            { bg: 'primary.light', text: 'black.100' },
            { bg: 'primary.background', text: 'black.100', border: 'black.100' },
        ]
    },
    {
        name: "Secondary", pastel: [
            { bg: 'secondary.indigo', text: 'black.100', },
            { bg: 'secondary.purple', text: 'black.100' },
            { bg: 'secondary.cyan', text: 'black.100' },
            { bg: 'secondary.blue', text: 'black.100' },
            { bg: 'secondary.green', text: 'black.100' },
            { bg: 'secondary.mint', text: 'black.100' },
            { bg: 'secondary.yellow', text: 'black.100' },
            { bg: 'secondary.orange', text: 'black.100' },
            { bg: 'secondary.red', text: 'white.100' },
        ]
    }
]

