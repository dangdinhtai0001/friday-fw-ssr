// react imports
import * as React from 'react';
// 3rd imports
// local imports
import { ToolboxCellRendererProps } from './ToolboxCellRenderer.d';
import useToolboxCellRenderer from './useToolboxCellRenderer';

function ToolboxCellRenderer(
  props: ToolboxCellRendererProps,
  ref: React.ForwardedRef<any>
): JSX.Element {
  const { renderToolboxItem } = useToolboxCellRenderer(props);

  return (
    <div className='flex justify-center items-center gap-x-[0.4rem] h-full'>
      {renderToolboxItem()}
    </div>
  );
}

export default React.forwardRef(ToolboxCellRenderer);
