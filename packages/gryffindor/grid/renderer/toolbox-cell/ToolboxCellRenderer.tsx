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
    <>
      {renderToolboxItem()}
    </>
  );
}

export default React.forwardRef(ToolboxCellRenderer);
