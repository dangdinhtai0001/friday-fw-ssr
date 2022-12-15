// react imports
import * as React from 'react';
// 3rd imports
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import {
  AnimatePresence,
  motion,
  useAnimation,
} from 'framer-motion';
// local imports
import { TabPanelProps } from './Tabs.d';
import { useTabsContext } from './TabsContext';

const variants = {
  initial: { x: 100, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: 100, opacity: 0 },
};

function TabPanel(
  props: TabPanelProps,
  ref: React.ForwardedRef<any>
): JSX.Element {
  const controls = useAnimation();

  const { context } = useTabsContext();

  React.useEffect(() => {
    controls.start('animate');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [context.activedId]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={props.value}
        variants={variants}
        initial="initial"
        exit="exit"
        animate={controls}
        transition={{
          duration: 0.2,
          type: 'spring',
          damping: 25,
          stiffness: 500,
        }}
      >
        <TabPanelUnstyled
          {...props}
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
