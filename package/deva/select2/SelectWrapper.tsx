import { useRef, useState, useEffect, forwardRef } from 'react';
import { ISelectWrapperProps, ItemProps } from './types';
import useSelect, { UseSelectReturnValue, SelectProvider } from '@mui/base/useSelect';
import { InputWrapper } from '../input';
import { StyledListbox } from './StyledSelectWrapper';




function SelectWrapper<TValue, Multiple extends boolean>(
  props: ISelectWrapperProps<TValue, Multiple>,
  ref: React.ForwardedRef<HTMLDivElement>
) {

  const { useSelectParams } = props;

  const listboxRef = useRef<HTMLUListElement>(null);
  const inputRef = useRef<HTMLDivElement>(null);
  const [listboxVisible, setListboxVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleOnOpenChange = (open: boolean) => {
    setListboxVisible(open);
  }

  const handleOnInputChange = (event: any) => {
    setInputValue(event.target.value);
  }

  const { getButtonProps, getListboxProps, contextValue, value, disabled } = useSelect<
    TValue,
    Multiple
  >({
    ...useSelectParams,
    listboxRef,
    onOpenChange: handleOnOpenChange,
    open: listboxVisible,
  });

  useEffect(() => {
    if (listboxVisible) {
      listboxRef.current?.focus();
    }
  }, [listboxVisible]);

  return (
    <div>
      <InputWrapper
        onChange={handleOnInputChange}
        value={inputValue}
        disabled={disabled}
        readOnly={props.readOnly}
        hidden={props.hidden}
        ref={inputRef}
      />
      <StyledListbox
        {...getListboxProps()}
        aria-hidden={!listboxVisible}
        className={listboxVisible ? '' : 'hidden'}
      >
        <SelectProvider value={contextValue}>

        </SelectProvider>
      </StyledListbox>
    </div>
  );
};

const renderOption = (items: ItemProps[]) => {
  if (items?.length) {
    return items.map((item: ItemProps, index: number) => {
      if (item.itemDefs && item.itemDefs.length) {
        return (<StyledOptionGroup {...item} key={index}>
          {renderOption(item.itemDefs)}
        </StyledOptionGroup>);
      } else {
        return <StyledOption {...item} key={index}>{item.label}</StyledOption>
      }
    })
  }

  return null;
};

export default forwardRef(SelectWrapper);