import { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import { ContainerProvider as FormContainerProvider } from '@/package/naraka/manipulation-container';
import DefaultDataBlock from '@/package/naraka/manipulation-container-ext';
import { ContainerRef } from '@/package/naraka/manipulation-container/types';
import { useContainerContext } from '@/package/naraka/searchable-container';
import { StyledFilterBlock, StyledFilterBlockButton } from './StyledElements'
import { IFilterBlockExtProps } from './types.d';
import ButtonWrapper from '@/package/deva/button'
import { FilterCriteria } from '../../searchable-container/types';


export default function FilterBlock(props: IFilterBlockExtProps) {
  const { context, contextApi } = useContainerContext();

  const formRef = useRef<ContainerRef>(null);

  const { onFilterModified } = props;

  const handleOnclick = () => {
    formRef.current?.submitForm();
  };

  const handleOnSubmitSucces = (values: any) => {
    let filterInstance = [...context.filterInstance];

    const keys = Object.keys(values);
    const newFilters = keys.map((key): FilterCriteria => ({ key: key, value: values[key], operator: '' }));

    filterInstance.push(...newFilters);

    onFilterModified?.({
      filterInstance: filterInstance,
      type: 'FilterBlock',
    });
  };


  const handleOnSubmitErrors = (errors: any) => {
    console.log("Lỗi cmnr");
  }

  return (
    <StyledFilterBlock className='styled-filter-block'>
      <FormContainerProvider
        {...props}
        fieldDefs={context.filterDefs ? context.filterDefs : []}
        dataBlockComponent={DefaultDataBlock}
        onSubmitSuccess={handleOnSubmitSucces}
        onSubmitError={handleOnSubmitErrors}
        ref={formRef}
      />
      <StyledFilterBlockButton>
        {/* TODO: chuyển sang dùng i18n */}
        <ButtonWrapper
          icon={<FontAwesomeIcon icon={faMagnifyingGlass} />}
          onClick={handleOnclick}
          width="fit-content"
        >
          Áp dụng
        </ButtonWrapper>
      </StyledFilterBlockButton>
    </StyledFilterBlock>
  );
}