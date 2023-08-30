import { forwardRef, ForwardedRef } from 'react';
import Grid from '@mui/system/Unstable_Grid';
import { v4 as uuidv4 } from 'uuid';

import { IRadioGroupProps, IRadioGroupOptions, IRadioGroupRef } from './types.d';
import {
  StyledRadioGroupOption,
  StyledRadioGroupOptionLabel,
  StyledRadioGroupOptionCheckbox
} from './StyledElements';


function RadioGroup<TValue>(props: IRadioGroupProps<TValue>, ref: ForwardedRef<IRadioGroupRef>) {
  const {
    options,
    name = uuidv4(),
    disabled,
    value,
    onChange,
    ...gridProps
  } = props;

  const renderRadioOption = (option: IRadioGroupOptions, index: number) => {
    const {
      id = uuidv4(),
      label,
      ...optionGridProps
    } = option;

    let _disabled = disabled ? true : option.disabled;
    let _checked = value === option.value ? true : false;

    const handleOnChange = (value: TValue) => {
      onChange?.(value);
    }

    return (
      <Grid key={index} {...optionGridProps}>
        <StyledRadioGroupOption className='styled-radio-group-option'>
          <StyledRadioGroupOptionCheckbox
            className='styled-radio-group-option--checkbox'
            type="radio"
            id={id}
            name={name}
            value={option.value}
            disabled={_disabled}
            onChange={(e) => { handleOnChange(e.target.value as TValue) }}
            checked={_checked}
          />
          {label &&
            <StyledRadioGroupOptionLabel
              className='styled-radio-group-option--label'
              htmlFor={id}
            >
              {label}
            </StyledRadioGroupOptionLabel>
          }
        </StyledRadioGroupOption>
      </Grid>
    );
  }

  return (
    <div>
      <Grid
        container
        {...gridProps}
      >
        {
          options.map((option, index) => (
            renderRadioOption(option, index)
          ))
        }
      </Grid>
    </div >
  );
}

export default forwardRef(RadioGroup)