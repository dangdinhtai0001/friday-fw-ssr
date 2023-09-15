import * as React from 'react';
import { IFieldItemComponentProps } from '@/package/naraka/form-container/types';

export interface ICustomFieldProps
  extends IFieldItemComponentProps {}

export default React.forwardRef(function CustomField(
  props: ICustomFieldProps,
  ref
) {
  React.useImperativeHandle(ref, () => ({
    doSomething: () => {
      // Logic của phương thức doSomething
      console.log('CustomField doSomething...');
    },
  }));

  return (
    <div>
      This is custom field |
      <span>{JSON.stringify(props.disabled)}</span> |
      <span>{JSON.stringify(props.readOnly)}</span> |
      <span>{JSON.stringify(props.hidden)}</span> |
    </div>
  );
});
