import { useRef } from 'react';

import { ContainerProvider as FormContainerProvider } from '@/package/naraka/manipulation-container';
import { DefaultDataBlock } from '@/package/naraka/manipulation-container-ext';
import { ContainerRef } from '@/package/naraka/manipulation-container/types';
import { useContainerContext } from '@/package/naraka/searchable-container';
import Button from '@mui/base/Button';
import Box from '@mui/system/Box';
import { StyledBox } from './StyledElements'
import { IDefaultFilterBlockProps } from './types.d'


// TODO: Viết lại block này cho đúng style code
export default function FilterBlock(props: IDefaultFilterBlockProps) {
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
    <StyledBox sx={{ display: 'grid', gap: 1 }}>
      <FormContainerProvider
        {...props}
        fieldDefs={context.filterDefs ? context.filterDefs : []}
        dataBlockComponent={DefaultDataBlock}
        onSubmitSuccess={handleOnSubmitSucces}
        onSubmitError={handleOnSubmitErrors}
        ref={formRef}
      />
      <Box sx={{ textAlign: 'right' }}>
        <Button onClick={handleOnclick}>apply filter</Button>
      </Box>
    </StyledBox>
  );
}