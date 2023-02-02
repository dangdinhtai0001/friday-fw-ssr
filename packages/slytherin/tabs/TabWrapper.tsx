// react imports
import * as React from 'react';
// 3rd imports
// local imports
import TabUnstyled from '@mui/base/TabUnstyled';
import classNames from 'classnames';
import { motion } from 'framer-motion';
import { TabWrapperProps } from './Tabs.d';

function TabWrapper(
    props: TabWrapperProps,
    ref: React.ForwardedRef<any>
): JSX.Element {
    const { isActivedTab, ..._props } = props;

    const classes = classNames(
        `inline-block p-[0.4rem] mx-[0.1rem] rounded-t-lg `
    );

    return (
        <div className="w-fit">
            <TabUnstyled
                {..._props}
                slotProps={{
                    root: () => ({
                        className: classes,
                    }),
                }}
                ref={ref}
            />
            {isActivedTab ? (
                <motion.div
                    className="bg-th-primary h-[0.2rem] rounded-full w-full"
                    layoutId="underline"
                />
            ) : null}
        </div>
    );
}

export default React.forwardRef(TabWrapper);
