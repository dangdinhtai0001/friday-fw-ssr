import { Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';

import { IIconSwitcherProps } from './_types.d';

export default function IconSwitcher(props: IIconSwitcherProps) {
    const { openIcon, closeIcon, isOpen, flexProps } = props;

    return (
        <>
            <Flex
                as={motion.div}
                animate={isOpen ? variantClosed : variantOpen}

                alignItems='center'
                alignContent='center'
                gap='measurement.12'
                {...flexProps}
            >
                {openIcon}
            </Flex>
            <Flex
                as={motion.div}
                animate={isOpen ? variantOpen : variantClosed}

                alignItems='center'
                alignContent='center'
                gap='measurement.12'
                {...flexProps}
            >
                {closeIcon}
            </Flex>
        </>
    );
};

const variantClosed = {
    rotate: 180,
    scale: 0,
    opacity: 0,
    transition: {
        type: 'spring',
        duration: 0.5,
    },
   display: "none"
}

const variantOpen = {
    rotate: 360,
    scale: 1,
    opacity: 1,
    transition: {
        type: 'spring',
        duration: 0.5,
    },
}

