import { createElement } from 'react';
import Box from '@mui/system/Box';
import { useTheme } from '@mui/system';

import {
  IDataPanelProps,
  IFieldItemProps,
  IDataFieldBlockProps,
} from '../types';
import { useContainerContext } from '../context/useContainerContext';
import { IDefaultTheme } from '@/package/preta/types';

export default function DataPanel(props: IDataPanelProps) {
  const { context } = useContainerContext();
  const theme = useTheme<IDefaultTheme>();

  const createDataBlock = () => {
    if (!context.fieldDefs) {
      return <></>;
    }

    return context.fieldDefs.map((item, index) => {
      let _props: IDataFieldBlockProps = {
        fieldDef: item,
        name: item.name,
      };

      return context.dataBlockComponent
        ? createElement<IDataFieldBlockProps>(
            context.dataBlockComponent,
            { ..._props, key: index }
          )
        : null;
    });
  };

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: `repeat(${context.defaultCols}, 1fr)`,
        rowGap: theme.components.spacing.sx,
        columnGap: theme.components.spacing.s,
      }}
      className="data-panel"
    >
      {createDataBlock()}
    </Box>
  );
}
