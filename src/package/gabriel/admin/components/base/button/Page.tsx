import { Box, Button, Card, CardBody, CardHeader, Divider, Flex, Text } from "@chakra-ui/react";
import { Star } from '@package/uriel/atoms/icons';

export default function Page() {
    return (
        <>
            {/* ***************************** || Title || ***************************** */}
            <Box p='measurement.40'>
                <Text color='black.100' textStyle='48.semibold'>Button</Text>
            </Box>
            <Divider />
            <Box px='measurement.8'>
                {/* ***************************** || BUTTONS || ***************************** */}
                <Box p='measurement.8'>
                    <Card>
                        <CardHeader>
                            <Text color='black.100' textStyle='24.semibold'>Buttons</Text>
                        </CardHeader>
                        <CardBody>
                            {buttons.map((button, index) => (
                                <Flex
                                    key={index}
                                    px='measurement.28'
                                    py='measurement.8'
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
                                        <Text color='black.100' textStyle='14.regular'>{button.group}</Text>
                                    </Flex>
                                    {/* ***************************************** ||  -- CONTENT || ***************************************** */}
                                    <Flex gap='measurement.8' justifyContent='flex-start' alignItems='flex-start' flex='1 0 0' >
                                        {button.children.map((child, i) => (
                                            <Button
                                                key={i}
                                                size={child.size}
                                                variant={child.variant}
                                                colorScheme={child.color}
                                                isActive={child.isActive}
                                                isDisabled={child.isDisabled}
                                            >
                                                {child.color}
                                            </Button>
                                        ))}
                                    </Flex>
                                </Flex>
                            ))}

                        </CardBody>
                    </Card>
                </Box>
                {/* ***************************** || BUTTONS WITH ICONS || ***************************** */}
                <Box p='measurement.8'>
                    <Card>
                        <CardHeader>
                            <Text color='black.100' textStyle='24.semibold'>Buttons with icons</Text>
                        </CardHeader>
                        <CardBody>
                            {buttons.map((button, index) => (
                                <Flex
                                    key={index}
                                    px='measurement.28'
                                    py='measurement.8'
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
                                        <Text color='black.100' textStyle='14.regular'>{button.group}</Text>
                                    </Flex>
                                    {/* ***************************************** ||  -- CONTENT || ***************************************** */}
                                    <Flex gap='measurement.8' justifyContent='flex-start' alignItems='flex-start' flex='1 0 0' >
                                        {button.children.map((child, i) => (
                                            <Button
                                                key={i}
                                                size={child.size}
                                                variant={child.variant}
                                                colorScheme={child.color}
                                                isActive={child.isActive}
                                                isDisabled={child.isDisabled}
                                                leftIcon={<Star />}
                                            >
                                                {child.color}
                                            </Button>
                                        ))}
                                    </Flex>
                                </Flex>
                            ))}

                        </CardBody>
                    </Card>
                </Box>
                {/* ***************************** || BUTTONS OUTLINES || ***************************** */}
                <Box p='measurement.8'>
                    <Card>
                        <CardHeader>
                            <Text color='black.100' textStyle='24.semibold'>Buttons outline</Text>
                        </CardHeader>
                        <CardBody>
                            {outlineButtons.map((button, index) => (
                                <Flex
                                    key={index}
                                    px='measurement.28'
                                    py='measurement.8'
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
                                        <Text color='black.100' textStyle='14.regular'>{button.group}</Text>
                                    </Flex>
                                    {/* ***************************************** ||  -- CONTENT || ***************************************** */}
                                    <Flex gap='measurement.8' justifyContent='flex-start' alignItems='flex-start' flex='1 0 0' >
                                        {button.children.map((child, i) => (
                                            <Button
                                                key={i}
                                                size={child.size}
                                                variant={child.variant}
                                                colorScheme={child.color}
                                                isActive={child.isActive}
                                                isDisabled={child.isDisabled}
                                            >
                                                {child.color}
                                            </Button>
                                        ))}
                                    </Flex>
                                </Flex>
                            ))}

                        </CardBody>
                    </Card>
                </Box>
                {/* ***************************** || BUTTONS GHOST || ***************************** */}
                <Box p='measurement.8'>
                    <Card>
                        <CardHeader>
                            <Text color='black.100' textStyle='24.semibold'>Buttons ghost</Text>
                        </CardHeader>
                        <CardBody>
                            {ghostButtons.map((button, index) => (
                                <Flex
                                    key={index}
                                    px='measurement.28'
                                    py='measurement.8'
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
                                        <Text color='black.100' textStyle='14.regular'>{button.group}</Text>
                                    </Flex>
                                    {/* ***************************************** ||  -- CONTENT || ***************************************** */}
                                    <Flex gap='measurement.8' justifyContent='flex-start' alignItems='flex-start' flex='1 0 0' >
                                        {button.children.map((child, i) => (
                                            <Button
                                                key={i}
                                                size={child.size}
                                                variant={child.variant}
                                                colorScheme={child.color}
                                                isActive={child.isActive}
                                                isDisabled={child.isDisabled}
                                            >
                                                {child.color}
                                            </Button>
                                        ))}
                                    </Flex>
                                </Flex>
                            ))}

                        </CardBody>
                    </Card>
                </Box>
                                {/* ***************************** || BUTTONS SIZE || ***************************** */}
                                <Box p='measurement.8'>
                    <Card>
                        <CardHeader>
                            <Text color='black.100' textStyle='24.semibold'>Buttons size</Text>
                        </CardHeader>
                        <CardBody>
                            {sizeButtons.map((button, index) => (
                                <Flex
                                    key={index}
                                    px='measurement.28'
                                    py='measurement.8'
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
                                        <Text color='black.100' textStyle='14.regular'>{button.group}</Text>
                                    </Flex>
                                    {/* ***************************************** ||  -- CONTENT || ***************************************** */}
                                    <Flex gap='measurement.8' justifyContent='flex-start' alignItems='flex-start' flex='1 0 0' >
                                        {button.children.map((child, i) => (
                                            <Button
                                                key={i}
                                                size={child.size}
                                                variant={child.variant}
                                                colorScheme={child.color}
                                                isActive={child.isActive}
                                                isDisabled={child.isDisabled}
                                            >
                                                {child.color}
                                            </Button>
                                        ))}
                                    </Flex>
                                </Flex>
                            ))}

                        </CardBody>
                    </Card>
                </Box>
            </Box>
        </>
    );
};


const buttons: { group: string, children: any[] }[] = [
    {
        group: "Normal", children: [
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
        group: "Activate State", children: [
            { variant: "_solid", color: "black.100", size: "small", isActive: true },
            { variant: "_solid", color: "white.100", size: "small", isActive: true },
            { variant: "_solid", color: "primary.brand", size: "small", isActive: true },
            { variant: "_solid", color: "primary.blue", size: "small", isActive: true },
            { variant: "_solid", color: "primary.purple", size: "small", isActive: true },
            { variant: "_solid", color: "secondary.green", size: "small", isActive: true },
            { variant: "_solid", color: "secondary.yellow", size: "small", isActive: true },
            { variant: "_solid", color: "secondary.red", size: "small", isActive: true },
        ]
    },
    {
        group: "Disabled", children: [
            { variant: "_solid", color: "black.100", size: "small", isDisabled: true },
            { variant: "_solid", color: "white.100", size: "small", isDisabled: true },
            { variant: "_solid", color: "primary.brand", size: "small", isDisabled: true },
            { variant: "_solid", color: "primary.blue", size: "small", isDisabled: true },
            { variant: "_solid", color: "primary.purple", size: "small", isDisabled: true },
            { variant: "_solid", color: "secondary.green", size: "small", isDisabled: true },
            { variant: "_solid", color: "secondary.yellow", size: "small", isDisabled: true },
            { variant: "_solid", color: "secondary.red", size: "small", isDisabled: true },
        ]
    },
];

const outlineButtons: { group: string, children: any[] }[] = [
    {
        group: "Normal", children: [
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
        group: "Activate State", children: [
            { variant: "_outline", color: "black.100", size: "small", isActive: true },
            { variant: "_outline", color: "white.100", size: "small", isActive: true },
            { variant: "_outline", color: "primary.brand", size: "small", isActive: true },
            { variant: "_outline", color: "primary.blue", size: "small", isActive: true },
            { variant: "_outline", color: "primary.purple", size: "small", isActive: true },
            { variant: "_outline", color: "secondary.green", size: "small", isActive: true },
            { variant: "_outline", color: "secondary.yellow", size: "small", isActive: true },
            { variant: "_outline", color: "secondary.red", size: "small", isActive: true },
        ]
    },
    {
        group: "Disabled", children: [
            { variant: "_outline", color: "black.100", size: "small", isDisabled: true },
            { variant: "_outline", color: "white.100", size: "small", isDisabled: true },
            { variant: "_outline", color: "primary.brand", size: "small", isDisabled: true },
            { variant: "_outline", color: "primary.blue", size: "small", isDisabled: true },
            { variant: "_outline", color: "primary.purple", size: "small", isDisabled: true },
            { variant: "_outline", color: "secondary.green", size: "small", isDisabled: true },
            { variant: "_outline", color: "secondary.yellow", size: "small", isDisabled: true },
            { variant: "_outline", color: "secondary.red", size: "small", isDisabled: true },
        ]
    },
];

const ghostButtons: { group: string, children: any[] }[] = [
    {
        group: "Normal", children: [
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
        group: "Activate State", children: [
            { variant: "_ghost", color: "black.100", size: "small", isActive: true },
            { variant: "_ghost", color: "white.100", size: "small", isActive: true },
            { variant: "_ghost", color: "primary.brand", size: "small", isActive: true },
            { variant: "_ghost", color: "primary.blue", size: "small", isActive: true },
            { variant: "_ghost", color: "primary.purple", size: "small", isActive: true },
            { variant: "_ghost", color: "secondary.green", size: "small", isActive: true },
            { variant: "_ghost", color: "secondary.yellow", size: "small", isActive: true },
            { variant: "_ghost", color: "secondary.red", size: "small", isActive: true },
        ]
    },
    {
        group: "Disabled", children: [
            { variant: "_ghost", color: "black.100", size: "small", isDisabled: true },
            { variant: "_ghost", color: "white.100", size: "small", isDisabled: true },
            { variant: "_ghost", color: "primary.brand", size: "small", isDisabled: true },
            { variant: "_ghost", color: "primary.blue", size: "small", isDisabled: true },
            { variant: "_ghost", color: "primary.purple", size: "small", isDisabled: true },
            { variant: "_ghost", color: "secondary.green", size: "small", isDisabled: true },
            { variant: "_ghost", color: "secondary.yellow", size: "small", isDisabled: true },
            { variant: "_ghost", color: "secondary.red", size: "small", isDisabled: true },
        ]
    },
];

const sizeButtons: { group: string, children: any[] }[] = [
    {
        group: "Small", children: [
            { variant: "_solid", color: "primary.blue", size: "small", isDisabled: false },
        ]
    },
    {
        group: "Medium", children: [
            { variant: "_solid", color: "primary.blue", size: "medium", isDisabled: false },
        ]
    },
    {
        group: "Large", children: [
            { variant: "_solid", color: "primary.blue", size: "large", isDisabled: false },
        ]
    },
];
