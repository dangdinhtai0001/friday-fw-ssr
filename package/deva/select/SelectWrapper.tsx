import { forwardRef, useState, useRef } from 'react';
import Select, { SelectProps, SelectRootSlotPropsOverrides } from '@mui/base/Select';
import { SelectValue } from '@mui/base/useSelect';
import { SelectOption } from '@mui/base/useOption';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { ISelectWrapperProps, ItemProps, IListboxWrapperProps, IStyledToggleProps } from './types';
import { useDatasource } from '@/package/preta/intergration';
import { StyledOption, StyledPopper, StyledValue } from './StyledElements';
import ListboxWrapper from './ListboxWrapper';
import OptionGroupWrapper from './OptionGroupWrapper';
import ButtonWrapper, { IButtonWrapperProps } from '@/package/deva/button'

function SelectWrapper<TValue extends {}, Multiple extends boolean>(
  props: ISelectWrapperProps<TValue, Multiple>,
  ref: React.ForwardedRef<HTMLButtonElement>
) {

  // TODO: Chuyển sang dùng i18n cho giá trị mặc dịnh của placeholder
  const { datasourceConfig,
    maxListBoxHeight = 256,
    onChange,
    renderSelectedValue,
    placeholder = "Select an option...",
    multiple,
    value,
    toggleWidth
  } = props;

  const toggleRef = useRef<HTMLButtonElement>(null);

  const datasource = useDatasource(datasourceConfig);

  const [listboxOpen, setListboxOpen] = useState(false);

  const handleOnListboxOpenChange = (isOpen: boolean) => {
    setListboxOpen(isOpen);
  }

  const handleOnOptionChange = (
    event: React.MouseEvent | React.KeyboardEvent | React.FocusEvent | null,
    value: SelectValue<TValue, Multiple>) => {
    onChange?.(value);
  };

  const slots: SelectProps<TValue, Multiple>['slots'] = {
    root: ButtonWrapper,
    listbox: ListboxWrapper,
    popper: StyledPopper,
  };

  const slotProps: SelectProps<TValue, Multiple>['slotProps'] = {
    listbox: {
      maxHeight: maxListBoxHeight,
      open: listboxOpen,
      width: Number(toggleRef.current?.offsetWidth),
    } as IListboxWrapperProps,
    root: {
      ref: toggleRef,
      icon: (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: 0 }}
          animate={{ opacity: 1, scale: 1, rotate: listboxOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <FontAwesomeIcon icon={faChevronDown} />
        </motion.div>
      ),
      width: toggleWidth,
      color: 'transparent',
      textColor: 'primary',
      border: true,
      className: 'select-wrapper-toggle',
    } as IButtonWrapperProps,
    popper: { keepMounted: true },
  };

  const renderOptionItems = () => {
    return props.itemDefs
      ? renderOption(props.itemDefs)
      : datasource?.data
        ? renderOption(datasource.data)
        : null;
  };

  function renderValue(option: SelectValue<SelectOption<TValue>, Multiple> | null) {
    if (option == null || (Array.isArray(option) && option.length === 0)) {
      return <span>{placeholder}</span>;
    }

    return (
      <StyledValue>
        {Array.isArray(option) ? option.map((opt) => opt.label).join(', ') : option.label}
      </StyledValue>
    );
  }


  return (
    <Select
      value={value as SelectValue<TValue, Multiple>}
      listboxOpen={listboxOpen}
      onListboxOpenChange={handleOnListboxOpenChange}
      onChange={handleOnOptionChange}
      renderValue={renderValue}
      multiple={multiple}
      slots={slots}
      slotProps={slotProps}
      ref={ref}
    >
      {renderOptionItems()}
    </Select>
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
          <StyledOption {...item} key={index}>
            {item.label}
          </StyledOption>
        );
      }
    });
  }

  return null;
};

export default forwardRef(SelectWrapper);
