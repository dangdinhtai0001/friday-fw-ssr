import { useRef } from 'react';
import { IFilterBlockProps } from '@/package/naraka/searchable-container/types';
import { ContainerProvider as FormContainerProvider } from '@/package/naraka/manipulation-container';
import { DefaultDataBlock } from '@/package/naraka/manipulation-container-ext';
import { ContainerProviderProps, ContainerRef } from '@/package/naraka/manipulation-container/types';
import { useContainerContext } from '@/package/naraka/searchable-container';
import { ContextHookValue } from '@/package/naraka/searchable-container/types';
import Button from '@mui/base/Button';

export interface FilterBlock extends IFilterBlockProps, ContainerProviderProps {
}

export default function FilterBlock(props: FilterBlock) {
  const { context, contextApi } = useContainerContext();

  const formRef = useRef<ContainerRef>(null);

  const { onFilterModified } = props;

  const handleOnclick = () => {
    formRef.current?.submitForm();
  };

  const handleOnSubmitSucces = (values: any) => {
    let filterInstance = [...context.filterInstance];

    const keys = Object.keys(values);
    const newFilters = keys.map((key) => ({ key: key, value: values[key] }));

    filterInstance.push(...newFilters);

    onFilterModified({
      filterInstance: filterInstance,
      type: 'FilterBlock',
    });
  };


  const handleOnSubmitErrors = (errors: any) => {
    console.log("Lỗi cmnr");
  }

  return (
    <div>
      Filter block
      <FormContainerProvider
        {...props}
        fieldDefs={context.filterDefs ? context.filterDefs : []}
        dataBlockComponent={DefaultDataBlock}
        onSubmitSuccess={handleOnSubmitSucces}
        onSubmitError={handleOnSubmitErrors}
        ref={formRef}
      ></FormContainerProvider>
      <Button onClick={handleOnclick}>apply filter</Button>
    </div>
  );
}
