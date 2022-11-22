// react imports
import React from 'react';
// 3rd imports
import { motion, AnimatePresence } from "framer-motion";
// local imports
import { TabDefine } from './interface';

const TabPanel = (props: TabDefine) => {
    // ------------------------- || render function || -------------------------
    return (
        <AnimatePresence mode='wait' key={`${props._key}-${props.index}`}>
            <motion.div
                key={props._key}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className='w-full h-full p-[0.2rem] overflow-auto'
            >
                {props.children}
            </motion.div>
        </AnimatePresence>
    );
}

export default TabPanel;