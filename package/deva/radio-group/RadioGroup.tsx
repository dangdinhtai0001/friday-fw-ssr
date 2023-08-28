import { forwardRef, ForwardedRef } from 'react';
import Grid from '@mui/system/Unstable_Grid';
import { v4 as uuidv4 } from 'uuid';

import { IRadioGroupProps, IRadioGroupOptions, IRadioGroupRef } from './types.d';
import {
  StyledRadioGroupOption,
  StyledRadioGroupOptionLabel,
  StyledRadioGroupOptionCheckbox
} from './StyledElements';


function RadioGroup(props: IRadioGroupProps, ref: ForwardedRef<IRadioGroupRef>) {
  const {
    options,
    name = uuidv4(),
    disabled,
    onChange,
    ...gridProps
  } = props;

  const renderRadioOption = (option: IRadioGroupOptions, index: number) => {
    const {
      id = uuidv4(),
      value,
      label,
      ...optionGridProps
    } = option;

    let _disabled = disabled ? true : option.disabled;

    const handleOnChange = (value: any) => {
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
            value={value}
            disabled={_disabled}
            onChange={(e) => { handleOnChange(e.target.value) }}
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