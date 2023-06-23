import { useState, forwardRef, Ref, MouseEvent, KeyboardEvent, FocusEvent } from 'react';
import Select from '@mui/base/Select';
import Option from '@mui/base/Option';
import { ISelectorProps } from './Selector.d';

export default forwardRef(function Selector(props: ISelectorProps, ref: Ref<HTMLButtonElement>) {

  const handleOnChange = (event: MouseEvent | KeyboardEvent | FocusEvent | null, value: any): void => {
    props?.onChange(value);
  };

  return (
    <>
      <Select {...props} onChange={handleOnChange} ref={ref}>
        <Option value="option1">Option 1</Option>
        <Option value="option2">Option 2</Option>
      </Select>
      <div>Selected value: {JSON.stringify(props.value)}</div>
    </>
  );
});
