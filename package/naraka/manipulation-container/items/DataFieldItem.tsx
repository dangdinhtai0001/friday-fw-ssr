import * as React from 'react';
import { IFieldItemProps, IFieldItemComponentProps } from '../types';
import { useContainerContext } from '../context/useContainerContext';
import { useController, useFormContext } from 'react-hook-form';


export default function FieldItem(props: IFieldItemProps) {
  const { fieldDef } = props;
  const { field } = useController(props);
  const { getValues } = useFormContext();
  const { context, contextApi } = useContainerContext();

  const handleOnFieldChange = async (value: any) => {

    let tValue = value
    let allValues = getValues();

    // Kiểm tra xem value này có phải lấy từ đối tượng input hay ko , nếu đúng thì set giá trị của transformedValue
    if (value?.nativeEvent instanceof Event) {
      tValue = value.target.value;
    }

    // TODO: xem xét xem có nên đặt hàm transform ở đây hay không 

    // Gọi sự kiện thay đổi
    await context.onValueChange?.({
      changedValue: tValue,
      allValues,
      fieldName: fieldDef.name,
      context,
      contextApi,
      refs: context.fieldRefs
    });

    console.log(tValue, value);

    // Sự kiện onChange của RHF
    field.onChange(tValue);
  }

  const renderFieldItem = () => {
    if (!fieldDef) {
      return null;
    }

    let { component, componentParams, name } = fieldDef;

    let _params: IFieldItemComponentProps = {
      ...field,
      onChange: handleOnFieldChange,
      disabled: context.fieldDisabled[name],
      readOnly: context.fieldReadOnly[name],
      hidden: context.fieldHidden[name],
      ref: (ref: any) => (context.fieldRefs.current[name] = ref),
      ...componentParams!
    }
    return React.createElement<IFieldItemComponentProps>(component, _params);
  };

  return renderFieldItem();
}