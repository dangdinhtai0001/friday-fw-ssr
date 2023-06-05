import * as React from 'react';
import Button from '@mui/base/Button';
import { useContainerContext } from '@/package/naraka/searchable-container';
import { ContextHookValue } from '@/package/naraka/searchable-container/types';
import JSONPretty from 'react-json-prettify';

const FilterBlock: React.FC = (props: any) => {
  const { context, contextApi }: ContextHookValue = useContainerContext();

  const { onFilterModified } = props;

  const handleOnclick = () => {
    let filterInstance = [...context.filterInstance];

    filterInstance.push({ key: 'key0', value: 'val0' });

    onFilterModified({
      filterInstance: filterInstance,
      type: 'FilterBlock',
    });
  };

  return (
    <div>
      Filter block
      <Button onClick={handleOnclick}>apply filter</Button>
      <JSONPretty json={context.filterInstance} />
    </div>
  );
};

export default FilterBlock;