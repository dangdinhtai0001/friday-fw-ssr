import { Box, Flex } from '@chakra-ui/react';
import { ISpinnerProps } from './_types.d';
import './Spinner.scss';

// source: https://codepen.io/jeremywynn/pen/ZEywNW

export default function Spinner(props: ISpinnerProps) {
    const { color='black.40', height='6px', width='18px' } = props;

    return (
        <Flex position='relative'>
            {Array.from({ length: 12 }, (_, index) => (
                <Box
                    key={index}
                    className="sheath"
                    position='absolute'
                    transformOrigin='50% 50%'
                >
                    <Box
                        className="segment"
                        bgColor={color}
                        height={height}
                        width={width}
                        borderRadius='measurement.28'
                        transformOrigin='0% 0%'
                    ></Box>
                </Box>
            ))}
        </Flex>
    );
};
