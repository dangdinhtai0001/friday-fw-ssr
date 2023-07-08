import { useRef, useState, useEffect, forwardRef } from 'react';
import useSelect, {
  SelectProvider,
  SelectValue,
} from '@mui/base/useSelect';
import { ISelectWrapperProps, ItemProps } from './types.d';
import { StyledRoot, StyledToggle, StyledListBox } from './StyledElement';
import { useDatasource } from '@/package/preta/intergration';
import { motion } from 'framer-motion';
import OptionWrapper from './OptionWrapper';
import OptionGroupWrapper from './OptionGroupWrapper';
import { slideDownVariant } from '@/package/preta/constant';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
function SelectWrapper<TValue, Multiple extends boolean>(
  props: ISelectWrapperProps<TValue, Multiple>,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  // TODO: Chuyển sang dùng i18n cho giá trị mặc dịnh của placeholder
  const { datasourceConfig, maxListBoxHeight = 256, onChange, renderSelectedValue, placeholder = "Chọn giá trị...", multiple, value } = props;

  const datasource = useDatasource(datasourceConfig);

  const listboxRef = useRef<HTMLUListElement>(null);
  const [listboxVisible, setListboxVisible] = useState(false);

  const handleOnOptionChange = (event: React.MouseEvent | React.KeyboardEvent | React.FocusEvent | null,
    value: SelectValue<TValue, Multiple>) => {
    // gọi sự kiện onchange đuwọc cấu hình
    onChange?.(value);
  };

  const { getButtonProps, getListboxProps, contextValue, value: selectedOption, options, dispatch } = useSelect<
    TValue,
    Multiple
  >({
    multiple,
    listboxRef,
    onOpenChange: setListboxVisible,
    onChange: handleOnOptionChange,
    open: listboxVisible,
  });

  useEffect(() => {
    console.log("Valued changed", value, selectedOption, contextValue);

  }, [value]);

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

  const renderSelectedVal = (): any => {
    if (renderSelectedValue) {
      return renderSelectedValue?.(selectedOption, options);
    }
    if (Array.isArray(selectedOption) && selectedOption.length === 0) {
      return placeholder;
    }
    return selectedOption;
  };


  return (
    <StyledRoot>
      <StyledToggle {...getButtonProps()}>
        {renderSelectedVal()}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: 0 }}
            animate={{ opacity: 1, scale: 1, rotate: listboxVisible ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <FontAwesomeIcon icon={faChevronDown} />
          </motion.div>
        </motion.div>
      </StyledToggle>
      <motion.div
        initial={listboxVisible ? 'open' : 'closed'}
        animate={listboxVisible ? 'open' : 'closed'}
        variants={slideDownVariant}
      >
        <StyledListBox  {...getListboxProps()} maxHeight={maxListBoxHeight}>
          <SelectProvider value={contextValue}>
            {renderOptionItems()}
          </SelectProvider>
        </StyledListBox>
      </motion.div>
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