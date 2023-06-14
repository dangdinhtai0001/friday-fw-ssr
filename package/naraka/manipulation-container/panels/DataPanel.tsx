import * as React from 'react';
import { IDataPanelProps, IFieldItemProps } from '../types';
import { useContainerContext } from '../context/useContainerContext';
import FieldItem from '../items/DataFieldItem';
import DataFieldBlock from '../blocks/DataBlock';
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

      return <DataFieldBlock key={index} fieldItemProps={_props}></DataFieldBlock>;
    })
  };

  return (
    <div>
      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', rowGap: 0.7, columnGap: 1 }}>
        {creatFieldItems()}
      </Box>
    </div>
  );
}
