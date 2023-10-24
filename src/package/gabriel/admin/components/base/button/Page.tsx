import { Box, Button, Card, CardBody, CardHeader, Divider, Flex, Text } from "@chakra-ui/react";

export default function Page() {
    return (
        <>
            {/* ***************************** || Title || ***************************** */}
            <Box p='measurement.40'>
                <Text color='black.100' textStyle='48.semibold'>Button</Text>
            </Box>
            <Divider />
            {/* ***************************** || Title || ***************************** */}
            <Box p='measurement.8'>
                <Card>
                    <CardHeader>
                        <Text color='black.100' textStyle='14.semibold'>Buttons</Text>
                    </CardHeader>
                    <CardBody>
                        {buttons.map((button, index) => (
                            <Flex
                                key={index}
                                p='measurement.28'
                                alignItems='center'
                                alignContent='center'
                                gap='measurement.4'
                                alignSelf='stretch'
                            >
                                {/* ***************************************** ||  -- TITLE || ***************************************** */}
                                <Flex
                                    maxWidth='320px'
                                    minHeight='measurement.40'
                                    flexDirection='column'
                                    justifyContent='center'
                                    alignItems='flex-start'
                                    flex='1 0 0'
                                >
                                    <Text color='black.100' textStyle='24.regular'>{button.group}</Text>
                                </Flex>
                                {/* ***************************************** ||  -- CONTENT || ***************************************** */}
                                <Flex gap='measurement.8' justifyContent='flex-start' alignItems='flex-start' flex='1 0 0' >
                                    {button.children.map((child, i) => (
                                        <Button key={i} size={child.size} variant={child.variant} colorScheme={child.color}>
                                            {child.variant}
                                            {/* <Text color='red'>{child.variant}</Text> */}
                                        </Button>
                                    ))}
                                </Flex>
                            </Flex>
                        ))}

                    </CardBody>
                </Card>
            </Box>
        </>
    );
};

const buttons = [
    {
        group: "small", children: [
            { variant: "_solid", color: "black.20", size: "small" },
            { variant: "_ghost", color: "black.20", size: "small" },
            { variant: "_outline", color: "black.20", size: "small" },
            { variant: "_link", color: "black.20", size: "small" },
        ]
    },
    {
        group: "medium", children: [
            { variant: "_solid", color: "black.20", size: "medium" },
            { variant: "_ghost", color: "black.20", size: "medium" },
            { variant: "_outline", color: "black.20", size: "medium" },
            { variant: "_link", color: "black.20", size: "medium" },
        ]
    },
    {
        group: "large", children: [
            { variant: "_solid", color: "black.20", size: "large" },
            { variant: "_ghost", color: "black.20", size: "large" },
            { variant: "_outline", color: "black.20", size: "large" },
            { variant: "_link", color: "black.20", size: "large" },
        ]
    }
];
