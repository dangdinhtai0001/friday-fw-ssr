// react imports
import { Button } from '@packages/slytherin';
import * as React from 'react';
// 3rd imports
// local imports
import { defaultToolboxKey } from '../../Grid.d';
import { useGridContext } from '../../GridContext';
import { ToolboxCellRendererHooks, ToolboxCellRendererProps, ToolboxItem } from './ToolboxCellRenderer.d';

const useToolboxCellRenderer = (props: ToolboxCellRendererProps): ToolboxCellRendererHooks => {
    const { data, api: gridApi, node, toolboxDisabledRule, toolboxVisibleRule, toolboxItemDefs } = props;

    const { context, helper } = useGridContext();

    const disabledStatus = React.useMemo(() =>
        toolboxDisabledRule?.({ gridContext: context, data, gridApi, node }
        ), [context, data, gridApi, node, toolboxDisabledRule]);
    const visibleStatus = React.useMemo(() =>
        toolboxVisibleRule?.({ gridContext: context, data, gridApi, node })
        , [context, data, gridApi, node, toolboxVisibleRule]);

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
                    ? <Button key={index}>__edit</Button>
                    : null;
                break;
            case '__remove':
                itemComponent = visibleStatus?.['__remove']
                    ? <Button key={index}>__remove</Button>
                    : null;
                break;
            case '__details':
                itemComponent = visibleStatus?.['__details']
                    ? <Button key={index}>__details</Button>
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

        toolboxItems = toolboxItemDefs?.map((itemDef, index) => {
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