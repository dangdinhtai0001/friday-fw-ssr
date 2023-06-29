import { forwardRef, Ref, MouseEvent, KeyboardEvent, FocusEvent } from 'react';
import { ISelectWrapperProps, ItemProps } from './SelectWrapper.d';
import { StyledSelect, StyledOptionGroup, StyledOption, StyledButton, StyledListbox, StyledPopper, InputAsSelectRootSlot } from './StyledSelector';
import { useDatasource } from '@/package/preta/intergration';
import { IDatasourceReturn } from '@/package/preta/types';
import Select, { SelectProps } from '@mui/base/Select'

const SelectWrapper = <TValue extends {}, Multiple extends boolean>(props: ISelectWrapperProps<TValue, Multiple>, ref: Ref<HTMLButtonElement>) => {

  let datasource: IDatasourceReturn;
  if (props.datasourceConfig) {
    datasource = useDatasource(props.datasourceConfig);
  }

  const { itemDefs, datasourceConfig, ...selectProps } = props;

  const slots: SelectProps<TValue, Multiple>['slots'] = {
    // root: StyledButton,
    root: InputAsSelectRootSlot,
    listbox: StyledListbox,
    popper: StyledPopper,
    ...props.slots,
  };

  const handleOnChange = (event: MouseEvent | KeyboardEvent | FocusEvent | null, value: any): void => {
    props?.onChange?.(value);
  };

  const renderOptionItems = () => {
    return props.itemDefs ? renderOption(props.itemDefs) : datasource.data ? renderOption(datasource.data) : null;
  }

  return (
    <>
      <Select {...selectProps} onChange={handleOnChange} ref={ref} slots={slots}>
        {renderOptionItems()}
      </Select>
      <div>Selected value: {JSON.stringify(props.value)}</div>
    </>
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
