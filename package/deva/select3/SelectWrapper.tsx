import { useRef, useState, useEffect, forwardRef, useMemo } from 'react';
import useSelect, {
  UseSelectReturnValue,
  SelectProvider,
  SelectValue,
} from '@mui/base/useSelect';
import { ISelectWrapperProps, ItemProps } from './types.d';
import { StyledRoot, StyledToggle, StyledListBox } from './StyledElement';
import { IDatasourceReturn } from '@/package/preta/types';
import { useDatasource } from '@/package/preta/intergration';
import { motion } from 'framer-motion';
import OptionWrapper from './OptionWrapper';
import OptionGroupWrapper from './OptionGroupWrapper';

function SelectWrapper<TValue, Multiple extends boolean>(
  props: ISelectWrapperProps<TValue, Multiple>,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  const { useSelectParams, datasourceConfig } = props;

  const datasource = useDatasource(datasourceConfig);

  const listboxRef = useRef<HTMLUListElement>(null);
  const [listboxVisible, setListboxVisible] = useState(false);

  const { getButtonProps, getListboxProps, contextValue, value } = useSelect<
    string,
    false
  >({
    listboxRef,
    onOpenChange: setListboxVisible,
    open: listboxVisible,
  });

  useEffect(() => {
    if (listboxVisible) {
      listboxRef.current?.focus();
    }
  }, [listboxVisible]);

  const renderOptionItems = () => {
    return props.itemDefs
      ? renderOption(props.itemDefs)
      : datasource?.data
        ? renderOption(datasource.data)
        : null;
  };

  return (
    <StyledRoot>
      <StyledToggle {...getButtonProps()}>
        {JSON.stringify(value)}
      </StyledToggle>

      <StyledListBox  {...getListboxProps()}>
        <SelectProvider value={contextValue}>
          {renderOptionItems()}
        </SelectProvider>
      </StyledListBox>
    </StyledRoot>
  );
};

const renderOption = (items: ItemProps[]) => {
  if (items?.length) {
    return items.map((item: ItemProps, index: number) => {
      if (item.itemDefs && item.itemDefs.length) {
        return (
          <OptionGroupWrapper {...item} key={index}>
            {renderOption(item.itemDefs)}
          </OptionGroupWrapper>
        );
      } else {
        return (
          <OptionWrapper {...item} key={index}>
            {item.label}
          </OptionWrapper>
        );
      }
    });
  }

  return null;
};

export default forwardRef(SelectWrapper);