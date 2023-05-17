
import * as React from 'react';
import Button from '@mui/base/Button';
import { useContainerContext } from "@/package/naraka/searchable-container";
import { ContainerContextType } from '@/package/naraka/searchable-container/types';

const FilterBlock: React.FC = (props: any) => {

  const { context, helper }: ContainerContextType.ContextHookValue = useContainerContext();

  const { onFilterModified } = props;

  const handleOnclick = () => {
    let filterInstance = [...context.filterInstance];

    filterInstance.push({ key: "key0", value: "val0" });

    onFilterModified({ filterInstance: filterInstance, type: "FilterBlock" });
  }

  return (
    <div>
      Filter block
      <Button onClick={handleOnclick}>apply filter</Button>
      {context.filterInstance.map((item, index) => (
        <p key={index}>{item.key}</p>
      ))}
    </div>
  );
}

export default FilterBlock;