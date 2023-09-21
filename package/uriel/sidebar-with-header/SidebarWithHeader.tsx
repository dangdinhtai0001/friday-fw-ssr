"use client"
import { useEffect } from 'react';
import { motion, useAnimationControls } from 'framer-motion';
import { Box, Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, useDisclosure } from '@chakra-ui/react';
import { ISidebarWithHeaderProps } from './_types.d';
import Sidebar from './Sidebar';
import Header from './Header';

export default function SidebarWithHeader(props: ISidebarWithHeaderProps) {
    const { children } = props;

    const { isOpen, onOpen, onClose } = useDisclosure();

    const controls = useAnimationControls();

    useEffect(() => {
        controls.start({ marginLeft: isOpen ? "200px" : "50px" });
    }, [isOpen]);

    return (
        <Box>
            <Sidebar
                variant={'sidebar'}
                isOpen={isOpen}
                onClose={onClose}
            />
            <motion.div animate={controls} initial={{ marginLeft: '50px' }}>
                <Header
                    showSidebarButton={true}
                    onShowSidebar={onOpen}
                    onCloseSidebar={onClose}
                    isShowSidebar={isOpen}
                />
                <Box paddingLeft='20px' paddingTop='10px'>
                    {children}
                </Box>
            </motion.div>
        </Box>
    );
}
