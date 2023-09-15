import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '@mui/system';

import { ContainerProvider as FormContainerProvider } from '@/package/naraka/form-container';
import DefaultDataBlock from '@/package/naraka/form-container-ext';
import { useContainerContext } from '@/package/naraka/searchable-container';
import { FilterCriteria } from '@/package/naraka/searchable-container/types';
import { ContainerRef } from '@/package/naraka/form-container/types';
import { IFilterBlockExtProps } from './types.d';
import {
  StyledFilterBlockContainer,
  StyledFilterBlockHeader,
  StyledFilterBlockHeaderAction,
  StyledFilterBlockContent,
} from './StyledElements';

import Collapsible from '@/package/deva/Collapsible';
import ButtonWrapper, { IButtonWrapperProps, } from '@/package/deva/button';
import { IDefaultTheme } from '@/package/preta/types';

function FilterBlock(props: IFilterBlockExtProps) {
  const {
    label = '',
    defaultCollapsed = true,
    formProps,
    onFilterModified
  } = props;

  const { context, contextApi } = useContainerContext();
  const formRef = useRef<ContainerRef>(null);

  const [isOpen, setIsOpen] = useState(defaultCollapsed);

  const theme = useTheme<IDefaultTheme>();

  const handleOnToggle = () => {
    setIsOpen(!isOpen);
  }

  const handleOnSubmit = () => {
    formRef.current?.submitForm();
  };

  const handleOnSubmitSucces = (values: any) => {
    let filterInstance = [...context.filterInstance];

    const keys = Object.keys(values);
    const newFilters = keys.map(
      (key): FilterCriteria => ({
        key: key,
        value: values[key],
        operator: '',
      })
    );

    filterInstance.push(...newFilters);

    onFilterModified?.({
      filterInstance: filterInstance,
      type: 'FilterBlock',
    });
  };

  const handleOnSubmitErrors = (errors: any) => {
    console.log('Lỗi cmnr');
  };

  return (
    <StyledFilterBlockContainer className="styled-filter-block">
      <Collapsible
        open={isOpen}
        defaultOpen={defaultCollapsed}
        contentHeight='100px'
        header={
          <StyledFilterBlockHeader className="styled-filter-block--header">
            <div className='styled-filter-block--header-label'>
              {label}
            </div>
            <StyledFilterBlockHeaderAction className='styled-filter-block--header-action'>
              <ButtonWrapper onClick={handleOnSubmit}>
                {/* TODO: DÙng i18n ở đây */}
                Áp dụng
              </ButtonWrapper>
              <ButtonWrapper
                icon={
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5, rotate: 0 }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      rotate: isOpen ? 0 : 180,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      color={theme.palette.text.primary}
                    />
                  </motion.div>
                }
                onClick={handleOnToggle}
                color='transparent'
                border={false}
                animationDisabled
              />
            </StyledFilterBlockHeaderAction>
          </StyledFilterBlockHeader>
        }
      >
        <StyledFilterBlockContent className="styled-filter-block--content">
          <FormContainerProvider
            {...formProps}
            fieldDefs={context.filterDefs ? context.filterDefs : []}
            dataBlockComponent={DefaultDataBlock}
            onSubmitSuccess={handleOnSubmitSucces}
            onSubmitError={handleOnSubmitErrors}
            ref={formRef}
          />
        </StyledFilterBlockContent>
        <div style={{ height: '300px' }}></div>
      </Collapsible>
    </StyledFilterBlockContainer>
  );
}

export default FilterBlock;
