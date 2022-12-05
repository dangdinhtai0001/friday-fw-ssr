// react imports
import * as React from 'react';
// 3rd imports
import TabUnstyled from '@mui/base/TabUnstyled';
import classNames from 'classnames';
import { motion } from 'framer-motion';
// local imports
import { TabProps } from './Tabs.d';
import { useTabsContext } from './TabsContext';

function Tab(props: TabProps, ref: React.ForwardedRef<any>): JSX.Element {

    const { value } = props;
    const { context } = useTabsContext();

    const classes = classNames(`inline-block p-[0.4rem] mx-[0.1rem] rounded-t-lg `);

    return (
        <div className="w-fit">
            <TabUnstyled
                {...props}
                slotProps={{
                    root: () => ({
                        className: classes,
                    }),
                }} ref={ref}
            />
            {value === context.activedId ? (<motion.div className="bg-red-100 h-[0.2rem] rounded-full w-full" layoutId="underline" />) : null}
        </div>
    )
}

export default React.forwardRef(Tab);