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
                        <Text color='black.100' textStyle='14.semibold'>Solid Buttons</Text>
                    </CardHeader>
                    <CardBody>
                        {solidButtons.map((button, index) => (
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
                                    maxWidth='200px'
                                    minWidth='200px'
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
                                            {child.color}
                                        </Button>
                                    ))}
                                </Flex>
                            </Flex>
                        ))}

                    </CardBody>
                </Card>
            </Box>
            <Box p='measurement.8'>
                <Card>
                    <CardHeader>
                        <Text color='black.100' textStyle='14.semibold'>Outline Buttons</Text>
                    </CardHeader>
                    <CardBody>
                        {outlineButtons.map((button, index) => (
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
                                    maxWidth='200px'
                                    minWidth='200px'
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
                                            {child.color}
                                        </Button>
                                    ))}
                                </Flex>
                            </Flex>
                        ))}

                    </CardBody>
                </Card>
            </Box>
            <Box p='measurement.8'>
                <Card>
                    <CardHeader>
                        <Text color='black.100' textStyle='14.semibold'>Outline Buttons</Text>
                    </CardHeader>
                    <CardBody>
                        {ghostButtons.map((button, index) => (
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
                                    maxWidth='200px'
                                    minWidth='200px'
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
                                            {child.color}
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

const solidButtons = [
    {
        group: "small", children: [
            { variant: "_solid", color: "black.100", size: "small" },
            { variant: "_solid", color: "white.100", size: "small" },
            { variant: "_solid", color: "primary.brand", size: "small" },
            { variant: "_solid", color: "primary.blue", size: "small" },
            { variant: "_solid", color: "primary.purple", size: "small" },
            { variant: "_solid", color: "secondary.green", size: "small" },
            { variant: "_solid", color: "secondary.yellow", size: "small" },
            { variant: "_solid", color: "secondary.red", size: "small" },
        ]
    },
    {
        group: "medium", children: [
            { variant: "_solid", color: "black.100", size: "medium" },
            { variant: "_solid", color: "white.100", size: "medium" },
            { variant: "_solid", color: "primary.brand", size: "medium" },
            { variant: "_solid", color: "primary.blue", size: "medium" },
            { variant: "_solid", color: "primary.purple", size: "medium" },
            { variant: "_solid", color: "secondary.green", size: "medium" },
            { variant: "_solid", color: "secondary.yellow", size: "medium" },
            { variant: "_solid", color: "secondary.red", size: "medium" },
        ]
    },
    {
        group: "large", children: [
            { variant: "_solid", color: "black.100", size: "large" },
            { variant: "_solid", color: "white.100", size: "large" },
            { variant: "_solid", color: "primary.brand", size: "large" },
            { variant: "_solid", color: "primary.blue", size: "large" },
            { variant: "_solid", color: "primary.purple", size: "large" },
            { variant: "_solid", color: "secondary.green", size: "large" },
            { variant: "_solid", color: "secondary.yellow", size: "large" },
            { variant: "_solid", color: "secondary.red", size: "large" },
        ]
    }
];

const outlineButtons = [
    {
        group: "small", children: [
            { variant: "_outline", color: "black.100", size: "small" },
            { variant: "_outline", color: "white.100", size: "small" },
            { variant: "_outline", color: "primary.brand", size: "small" },
            { variant: "_outline", color: "primary.blue", size: "small" },
            { variant: "_outline", color: "primary.purple", size: "small" },
            { variant: "_outline", color: "secondary.green", size: "small" },
            { variant: "_outline", color: "secondary.yellow", size: "small" },
            { variant: "_outline", color: "secondary.red", size: "small" },
        ]
    },
    {
        group: "medium", children: [
            { variant: "_outline", color: "black.100", size: "medium" },
            { variant: "_outline", color: "white.100", size: "medium" },
            { variant: "_outline", color: "primary.brand", size: "medium" },
            { variant: "_outline", color: "primary.blue", size: "medium" },
            { variant: "_outline", color: "primary.purple", size: "medium" },
            { variant: "_outline", color: "secondary.green", size: "medium" },
            { variant: "_outline", color: "secondary.yellow", size: "medium" },
            { variant: "_outline", color: "secondary.red", size: "medium" },
        ]
    },
    {
        group: "large", children: [
            { variant: "_outline", color: "black.100", size: "large" },
            { variant: "_outline", color: "white.100", size: "large" },
            { variant: "_outline", color: "primary.brand", size: "large" },
            { variant: "_outline", color: "primary.blue", size: "large" },
            { variant: "_outline", color: "primary.purple", size: "large" },
            { variant: "_outline", color: "secondary.green", size: "large" },
            { variant: "_outline", color: "secondary.yellow", size: "large" },
            { variant: "_outline", color: "secondary.red", size: "large" },
        ]
    }
];

const ghostButtons = [
    {
        group: "small", children: [
            { variant: "_ghost", color: "black.100", size: "small" },
            { variant: "_ghost", color: "white.100", size: "small" },
            { variant: "_ghost", color: "primary.brand", size: "small" },
            { variant: "_ghost", color: "primary.blue", size: "small" },
            { variant: "_ghost", color: "primary.purple", size: "small" },
            { variant: "_ghost", color: "secondary.green", size: "small" },
            { variant: "_ghost", color: "secondary.yellow", size: "small" },
            { variant: "_ghost", color: "secondary.red", size: "small" },
        ]
    },
    {
        group: "medium", children: [
            { variant: "_ghost", color: "black.100", size: "medium" },
            { variant: "_ghost", color: "white.100", size: "medium" },
            { variant: "_ghost", color: "primary.brand", size: "medium" },
            { variant: "_ghost", color: "primary.blue", size: "medium" },
            { variant: "_ghost", color: "primary.purple", size: "medium" },
            { variant: "_ghost", color: "secondary.green", size: "medium" },
            { variant: "_ghost", color: "secondary.yellow", size: "medium" },
            { variant: "_ghost", color: "secondary.red", size: "medium" },
        ]
    },
    {
        group: "large", children: [
            { variant: "_ghost", color: "black.100", size: "large" },
            { variant: "_ghost", color: "white.100", size: "large" },
            { variant: "_ghost", color: "primary.brand", size: "large" },
            { variant: "_ghost", color: "primary.blue", size: "large" },
            { variant: "_ghost", color: "primary.purple", size: "large" },
            { variant: "_ghost", color: "secondary.green", size: "large" },
            { variant: "_ghost", color: "secondary.yellow", size: "large" },
            { variant: "_ghost", color: "secondary.red", size: "large" },
        ]
    }
];
