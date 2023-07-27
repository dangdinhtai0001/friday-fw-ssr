import { forwardRef, ForwardedRef, useState } from 'react';
import Tabs from '@mui/base/Tabs';
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { v4 as uuidv4 } from 'uuid';
import { ITabsWrapperProps } from './types.d';
import { StyledTabsList, StyledTab, StyledTabPanel, StyledTabUnderline } from './StyledElements';
function TabsWrapper(props: ITabsWrapperProps, ref: ForwardedRef<unknown>) {
  const {
    tabDefs,
    defaultTab = tabDefs[0].id,
    value,
    onChange,
    orientation = 'horizontal'
  } = props;

  const [selectedTab, setSelectedTab] = useState<string | number | null>(defaultTab);

  const renderTab = () => {
    return tabDefs.map((tabDef, index) => {
      return (
        <StyledTab
          key={index}
          value={tabDef.id}
          disabled={tabDef.disabled}
          active={false}
          highlighted={false}
          selected={false}
        >
          {tabDef.title}
          {tabDef.id === selectedTab ? (
            <MotionTabUnderline layoutId="hihi" />
          ) : null}
        </StyledTab>
      )
    });
  };

  const renderTabPanel = () => {
    return tabDefs.map((tabDef, index) => {
      return (
        <StyledTabPanel key={index} value={tabDef.id}>

          <AnimatePresence >
            <motion.div
              key={index}
              variants={tabVariant}          // Sử dụng variant đã định nghĩa
              initial="initial"              // Trạng thái ban đầu
              animate="animate"              // Trạng thái khi hiển thị
              exit="exit"                    // Trạng thái khi thoát
              transition={{ duration: 0.2 }} // Thời gian animation
            >
              {tabDef.title} content
            </motion.div>
          </AnimatePresence>
        </StyledTabPanel>
      )
    });
  };

  const handleOnChangeTab = (_: any, value: string | number | null) => {
    setSelectedTab(value);
    onChange?.(value);
  }

  return (
    <Tabs
      defaultValue={defaultTab}
      value={value}
      onChange={handleOnChangeTab}
      orientation={orientation}
    >
      <StyledTabsList>
        <LayoutGroup id={uuidv4()}>
          {renderTab()}
        </LayoutGroup>
      </StyledTabsList>
      {renderTabPanel()}
    </Tabs>
  );
};

const MotionTabUnderline = motion(StyledTabUnderline);

// Định nghĩa các variant cho tab
const tabVariant = {
  initial: { x: -10, opacity: 0 },  // Trạng thái ban đầu, chuyển từ trái vào (x: -10)
  animate: { x: 0, opacity: 1 },    // Trạng thái khi hiển thị, hiển thị bình thường (x: 0)
  exit: { x: 10, opacity: 0 }       // Trạng thái khi thoát, chuyển ra phải (x: 10)
};

export default forwardRef(TabsWrapper);
