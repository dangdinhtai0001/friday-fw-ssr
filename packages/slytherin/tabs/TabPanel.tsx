// react imports
import * as React from 'react';
// 3rd imports
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import {
  AnimatePresence,
  motion
} from 'framer-motion';
// local imports
import { TabPanelProps } from './Tabs.d';
import { TabVariants } from './TabsUtils';

function TabPanel(
  props: TabPanelProps,
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

export default React.forwardRef(TabPanel);
