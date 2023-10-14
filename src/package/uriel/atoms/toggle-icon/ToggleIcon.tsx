import { Flex, Icon } from '@chakra-ui/react';
import { motion } from 'framer-motion';

import { IToggleIconProps } from './_types.d';

export default function ToggleIcon(props: IToggleIconProps) {
    const { openIcon, closeIcon, isOpen, iconProps } = props;

    return (
        <>
            <Flex
                as={motion.span}
                animate={isOpen ? toggleIconClosed : toggleIconOpen}

                alignItems='center'
                alignContent='center'
                gap='measurement.12'
            >
                <Icon as={openIcon} {...iconProps} />
            </Flex>

            <Flex
                as={motion.span}
                animate={isOpen ? toggleIconOpen : toggleIconClosed}

                alignItems='center'
                alignContent='center'
                gap='measurement.12'
            >
                <Icon as={closeIcon} {...iconProps} />
            </Flex>
        </>
    );
};

const toggleIconClosed = {
    rotate: 180,
    scale: 0,
    opacity: 0,
    transition: {
        duration: 0.2,
    },
    display: 'none',
}

const toggleIconOpen = {
    rotate: 0,
    scale: 1,
    opacity: 1,
    transition: {
        duration: 0.2,
    }
}
