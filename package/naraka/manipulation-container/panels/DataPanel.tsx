import * as React from 'react';
import { IDataPanelProps, IFieldItemProps } from '../types';
import { useContainerContext } from '../context/useContainerContext';
import Box from '@mui/system/Box';

export default function DataPanel(props: IDataPanelProps) {
  const { context } = useContainerContext();

  const creatFieldItems = () => {
    if (!context.fieldDefs) {
      return <></>
    };

    return context.fieldDefs.map((item, index) => {
      let _props: IFieldItemProps = {
        fieldDef: item,
        name: item.name,
      };

      return context.dataBlockComponent ? React.createElement(context.dataBlockComponent, { key: index, fieldItemProps: _props }) : null;
    })
  };

  return (
    <div>
      <Box sx={{ display: 'grid', gridTemplateColumns: `repeat(${context.defaultCols}, 1fr)`, rowGap: 1, columnGap: 4 }}>
        {creatFieldItems()}
      </Box>
    </div>
  );
}
