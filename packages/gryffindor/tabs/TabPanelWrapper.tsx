// react imports
import * as React from 'react';
// 3rd imports
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import {
    AnimatePresence,
    motion
} from 'framer-motion';
// local imports
import { TabPanelWrapperProps } from './Tabs.d';

const TabVariants = {
    initial: { x: 0, opacity: 1 },
    animate: { x: [100, 0], opacity: [0.5, 1] },
    exit: { x: 100, opacity: 0 },
};

function TabPanelWrapper(
    props: TabPanelWrapperProps,
    ref: React.ForwardedRef<any>
): JSX.Element {
    const { tabAnimationControls, ..._props } = props;

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={props.value}
                variants={TabVariants}
                initial="initial"
                exit="exit"
                animate={tabAnimationControls}
                transition={{
                    duration: 0.2,
                    type: 'spring',
                    damping: 25,
                    stiffness: 500,
                }}
            >
                <TabPanelUnstyled
                    {..._props}
                    slotProps={{
                        root: () => ({
                            className: 'bg-th-background',
                        })
                    }}
                />
            </motion.div>
        </AnimatePresence>
    );
}

export default React.forwardRef(TabPanelWrapper);
