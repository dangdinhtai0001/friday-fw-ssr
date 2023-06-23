import { useState, forwardRef, Ref } from 'react';
import Select from '@mui/base/Select';
import Option from '@mui/base/Option';
import { MouseEvent, KeyboardEvent, FocusEvent } from 'react';
import { ISelectorProps } from './Selector.d';

export default forwardRef(function Selector(props: ISelectorProps, ref: Ref<HTMLButtonElement>) {
  const handleOnChange = (event: any, value: any): void => {
    // Code logic inside the function
    console.log(event, value)
  };

  return (
    <>
      <Select {...props} onChange={handleOnChange} ref={ref}>
        <Option value="option1">Option 1</Option>
        <Option value="option2">Option 2</Option>
      </Select>
      <div>Selected value: {props.value}</div>
    </>
  );
});

