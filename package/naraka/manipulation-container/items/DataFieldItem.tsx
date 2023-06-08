import * as React from 'react';
import { IFieldItemProps } from '../types';
import { useContainerContext } from '../context/useContainerContext';
import { useController, useFormContext } from 'react-hook-form';


export default function FieldItem(props: IFieldItemProps) {
  const { fieldDef } = props;
  const { field, fieldState } = useController(props);
  const { getValues } = useFormContext();
  const { context, contextApi } = useContainerContext();

  const handleOnFieldChange = async (value: any) => {

    let tValue = value
    let allValues = getValues();

    // Kiểm tra xem value này có phải lấy từ đối tượng input hay ko , nếu đúng thì set giá trị của transformedValue
    if (value.nativeEvent instanceof Event) {
      tValue = value.target.value;
    }

    // TODO: xem xét xem có nên đặt hàm transform ở đây hay không 

    // Sự kiện onChange của RHF
    field.onChange(tValue);

    // Gọi sự kiện thay đổi
    await context.onValueChange({
      changedValue: tValue,
      allValues,
      fieldName: fieldDef.name,
      context,
      contextApi
    });
  }

  const renderFieldItem = () => {
    if (!fieldDef) {
      return <></>;
    }

    let { component, componentParams } = fieldDef;

    let _params = {
      ...field,
      onChange: handleOnFieldChange,
      ...componentParams!
    }
    return React.createElement(component, _params);
  };

  return (
    <>{renderFieldItem()}</>
  );
}
