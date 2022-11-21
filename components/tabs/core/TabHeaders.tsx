// react imports
import React from 'react';
// 3rd imports
import { motion, AnimatePresence } from "framer-motion";
// local imports
import { TabHeaderProps, TabDefine } from './interface';
import { useTabContext } from './TabContext'

const TabHeader = (props: TabHeaderProps) => {


    const { context, updateActiveKey } = useTabContext();
    const { tabs, activeKey } = context;

    const handleOnClickTab = (item: TabDefine) => {
        updateActiveKey(item.key);
    }

    // ------------------------- || render function || -------------------------
    return (
        <div className="text-center text-ellipsis">
            <nav>
                <ul className="flex flex-wrap -mb-px " id="__fd-tab-header" >
                    {tabs.map((item, index) => (
                        <li
                            key={`${item.key ? item.key : ''}-${index}`}
                            onClick={() => handleOnClickTab(item)}
                        >
                            <a href="#" className="inline-block p-[0.3rem] px-[1rem] hover:text-th-primary hover:bg-transparent">
                                {item.label}
                            </a>
                            {item.key === activeKey ? (
                                <motion.div className="bg-th-primary h-[0.2rem] rounded-full border-th-primary" layoutId="underline" />
                            ) : null}
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}

export default TabHeader;