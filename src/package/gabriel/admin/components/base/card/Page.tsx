import { Box, Text, Divider, Heading, Image, ButtonGroup, Button } from "@chakra-ui/react";
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'

export default function Page() {
    return (
        <>
            {/* ***************************** || Title || ***************************** */}
            <Box p='measurement.40'>
                <Text color='black.100' textStyle='48.semibold'>Card</Text>
            </Box>
            <Divider />
            {/* ***************************** || Title || ***************************** */}
            <Box p='measurement.8'>
                <Card maxW='500px'>
                    <CardHeader>
                        <Heading size='md'>Client Report</Heading>
                    </CardHeader>
                    <CardBody>
                        <Image
                            src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                            alt='Green double couch with wooden legs'
                            borderRadius='lg'
                        />
                        <Text>View a summary of all your customers over the last month.</Text>
                    </CardBody>
                    <Divider />
                    <CardFooter>
                        <ButtonGroup spacing='2'>
                            <Button variant='solid' colorScheme='blue'>
                                Buy now
                            </Button>
                            <Button variant='ghost' colorScheme='blue'>
                                Add to cart
                            </Button>
                        </ButtonGroup>
                    </CardFooter>
                </Card>
            </Box>
        </>
    );
}
