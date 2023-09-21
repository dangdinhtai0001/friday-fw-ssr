import { useEffect } from 'react';
import { Box, Collapse, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Slide } from '@chakra-ui/react';
import { ISidebarProps } from './_types.d';
import SidebarContent from './SidebarContent';
import { motion, useAnimationControls } from 'framer-motion';

export default function Sidebar(props: ISidebarProps) {
    const { isOpen, variant, onClose } = props;

    const controls = useAnimationControls();

    useEffect(() => {
        controls.start({ width: isOpen ? "200px" : "50px" });
    }, [isOpen]);

    return variant === 'sidebar' ? (
        <Box
            position="fixed"
            left={0}
            p={5}
            top={0}
            h="100%"
            bg="#dfdfdf"
        >
            <motion.div animate={controls} initial={{ width: '50px' }}>
                <SidebarContent />
            </motion.div>
        </Box>
    ) : (
        <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
            <DrawerOverlay>
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Chakra-UI</DrawerHeader>
                    <DrawerBody>
                        <SidebarContent />
                    </DrawerBody>
                </DrawerContent>
            </DrawerOverlay>
        </Drawer>
    )
}
