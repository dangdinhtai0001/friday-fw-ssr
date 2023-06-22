import { useRef } from 'react';
import { IFilterBlockProps } from '@/package/naraka/searchable-container/types';
import { ContainerProvider as FormContainerProvider } from '@/package/naraka/manipulation-container';
import { DefaultDataBlock } from '@/package/naraka/manipulation-container-ext';
import { ContainerProviderProps, ContainerRef } from '@/package/naraka/manipulation-container/types';
import { useContainerContext } from '@/package/naraka/searchable-container';
import { ContextHookValue } from '@/package/naraka/searchable-container/types';
import Button from '@mui/base/Button';
import Box from '@mui/system/Box';
import styled from '@mui/system/styled';

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
    <BoxStyled sx={{ display: 'grid', gap: 1 }}>
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
    </BoxStyled>
  );
}

const BoxStyled = styled(Box, {})(({ theme }) => ({
  // border: `0.1rem solid ${theme.palette.primary.main}`,
  padding: `0.5rem 0.5rem 0.5rem 0.5rem`
}));