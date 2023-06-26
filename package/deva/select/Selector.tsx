import { forwardRef, Ref, MouseEvent, KeyboardEvent, FocusEvent } from 'react';
import { ISelectorProps, ItemProps } from './Selector.d';
import { StyledSelect, StyledOptionGroup, StyledOption } from './StyledSelector';
import { useDatasource } from '@/package/preta/intergration';

export default forwardRef(function Selector(props: ISelectorProps, ref: Ref<HTMLButtonElement>) {

  const { data } = useDatasource({
    url: "http://127.0.0.1:3658/m1/370198-0-default/fr/component/select/options",
    swrOptions: {
      refreshInterval: 0,
    }
  });

  const handleOnChange = (event: MouseEvent | KeyboardEvent | FocusEvent | null, value: any): void => {
    props?.onChange(value);
  };

  const renderOption = (items: ItemProps[]) => {
    if (items?.length > 0) {
      return items.map((item: ItemProps, index: number) => {
        if (item.itemDefs) {
          return (<StyledOptionGroup {...item} key={index}>
            {renderOption(item.itemDefs)}
          </StyledOptionGroup>);
        } else {
          return <StyledOption {...item} key={index}>{item.label}</StyledOption>
        }
      })
    } else {
      return null;
    }
  };

  const renderOptionByProps = () => {
    return renderOption(props.itemDefs);
  }

  const renderOptionByDatasources = () => {
    if (data) {
      return renderOption(data);
    }

    return null;
  }


  return (
    <>
      <StyledSelect {...props} onChange={handleOnChange} ref={ref}>
        {/* {renderOptionByProps()} */}
        {renderOptionByDatasources()}
      </StyledSelect>
      <div>Selected value: {JSON.stringify(props.value)}</div>
    </>
  );
});
