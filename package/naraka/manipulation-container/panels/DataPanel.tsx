import * as React from 'react';
import { IDataPanelProps, IFieldItemProps } from '../types';
import { useContainerContext } from '../context/useContainerContext';
import FieldItem from '../items/DataFieldItem'

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
      return <FieldItem key={index} {..._props}></FieldItem>
    })
  };

  return (
    <div>
      <div>DataPanel</div>
      {creatFieldItems()}
    </div>
  );
}
