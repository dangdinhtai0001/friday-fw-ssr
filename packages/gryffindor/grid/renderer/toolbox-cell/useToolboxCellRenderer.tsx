// react imports
import { Button } from '@packages/slytherin';
import * as React from 'react';
// 3rd imports
import { MdDelete, MdInfo, MdSettings } from 'react-icons/md';
// local imports
import { defaultToolboxKey, ToolboxItem } from '@packages/gryffindor/grid/common-types.d';
import { useGridContext } from '../../GridContext';
import { ToolboxCellRendererHooks, ToolboxCellRendererProps } from './ToolboxCellRenderer.d';

const useToolboxCellRenderer = (props: ToolboxCellRendererProps): ToolboxCellRendererHooks => {
    const { data, api: gridApi, node, toolboxDef } = props;

    const { disableRule, visibleRule } = toolboxDef;

    const { context, helper } = useGridContext();

    const disabledStatus = React.useMemo(() => {
        return disableRule?.({ gridContext: context, data, gridApi, node })
    }, [context, data, disableRule, gridApi, node]);

    const visibleStatus = React.useMemo(() => {
        let r = visibleRule?.({ gridContext: context, data, gridApi, node })
        console.log("visibleStatus", r);

        return r;
    }, [context, data, gridApi, node, visibleRule]);

    const handleOnClickToolbox = async (itemDef: ToolboxItem): Promise<void> => {
        let key: string | defaultToolboxKey = itemDef.key;

        switch (key) {
            case '__edit':
                break;
            case '__remove':
                break;
            case '__details':
                break;
            default:
                break;
        }
    };

    const renderDefaultToolboxItem = (itemDef: ToolboxItem, index: number): JSX.Element | null => {
        let key: string | defaultToolboxKey = itemDef.key;
        let itemComponent: JSX.Element | null;

        switch (key) {
            case '__edit':
                itemComponent = visibleStatus?.['__edit']
                    ? <Button key={index} theme='primary' icon={<MdSettings className="scale-[1.1] mx-[0.2rem] my-[0.2rem] " />} useBorder={false} rounded={false} noPadding />
                    : null;
                break;
            case '__remove':
                itemComponent = visibleStatus?.['__remove']
                    ? <Button key={index} theme='danger' icon={<MdDelete className="scale-[1.1] mx-[0.2rem] my-[0.2rem] " />} useBorder={false} rounded={false} noPadding />
                    : null;
                break;
            case '__details':
                itemComponent = visibleStatus?.['__details']
                    ? <Button key={index} icon={<MdInfo className="scale-[1.3] fill-th-primary mx-[0.2rem] my-[0.2rem] " />} useBorder={true} rounded={false} noPadding />
                    : null;
                break;
            default:
                itemComponent = null;
                break;
        }

        return itemComponent;
    }

    const renderToolboxItem = (): JSX.Element | JSX.Element[] | null => {
        let toolboxItems: any;

        toolboxItems = toolboxDef.itemDefs.map((itemDef, index) => {
            if (itemDef.isDefault) {
                return renderDefaultToolboxItem(itemDef, index);
            }

            return <></>;
        });


        return toolboxItems;
    }

    return {
        renderToolboxItem
    };
};

export default useToolboxCellRenderer;