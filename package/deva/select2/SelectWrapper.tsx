import { useRef, useState, useEffect, forwardRef, useMemo } from 'react';
import { ISelectWrapperProps, ItemProps } from './types';
import useSelect, {
  UseSelectReturnValue,
  SelectProvider,
  SelectValue,
} from '@mui/base/useSelect';
import { InputWrapper } from '../input';
import { StyledListbox } from './StyledSelectWrapper';
import OptionWrapper from './OptionWrapper';
import OptionGroupWrapper from './OptionGroupWrapper';
import { IDatasourceReturn } from '@/package/preta/types';
import { useDatasource } from '@/package/preta/intergration';
import { motion } from 'framer-motion';

function SelectWrapper<TValue, Multiple extends boolean>(
  props: ISelectWrapperProps<TValue, Multiple>,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  const { useSelectParams, datasourceConfig, onChange } = props;

  const listboxRef = useRef<HTMLUListElement>(null);
  const inputRef = useRef<HTMLDivElement>(null);
  const [listboxVisible, setListboxVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleOnOpenChange = (open: boolean) => {
    setListboxVisible(open);
  };

  const handleOnInputChange = (event: any) => {
    setInputValue(event.target.value);
  };

  const handleOnOptionChange = (event: React.MouseEvent | React.KeyboardEvent | React.FocusEvent | null,
    value: SelectValue<TValue, Multiple>) => {
    // gọi sự kiện onchange từ bên ngoài
    onChange?.(value);
  }

  const {
    getButtonProps,
    getListboxProps,
    contextValue,
    value,
    disabled,
  } = useSelect<TValue, Multiple>({
    ...useSelectParams,
    listboxRef,
    onOpenChange: handleOnOpenChange,
    onChange: handleOnOptionChange,
    open: listboxVisible,
  });

  useEffect(() => {
    if (listboxVisible) {
      listboxRef.current?.focus();
    }
  }, [listboxVisible]);

  const datasource = useDatasource(datasourceConfig);

  const renderOptionItems = () => {
    return props.itemDefs
      ? renderOption(props.itemDefs)
      : datasource?.data
        ? renderOption(datasource.data)
        : null;
  };

  return (
    <div style={{ position: 'relative' }}>
      <InputWrapper
        onChange={handleOnInputChange}
        value={inputValue}
        disabled={disabled}
        readOnly={props.readOnly}
        hidden={props.hidden}
        {...getButtonProps()}
        ref={inputRef}
      />
      <motion.div
        initial={listboxVisible ? 'open' : 'closed'}
        animate={listboxVisible ? 'open' : 'closed'}
        variants={listBoxVariants}
        style={{
          zIndex: !listboxVisible ? 100 : -1,
          position: 'absolute',
        }}
      >
        <StyledListbox
          {...getListboxProps()}
          hidden={!listboxVisible}
        >
          <SelectProvider value={contextValue}>
            {renderOptionItems()}
          </SelectProvider>
        </StyledListbox>
      </motion.div>
    </div>
  );
}

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

const listBoxVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: 'easeInOut' },
  },
  closed: {
    opacity: 0,
    y: -10,
    transition: { duration: 0.3, ease: 'easeInOut' },
  },
};

export default forwardRef(SelectWrapper);
