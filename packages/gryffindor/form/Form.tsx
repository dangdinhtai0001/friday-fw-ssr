// react imports
import * as React from 'react';
// 3rd imports
import { uniqueId } from 'lodash';
import { FieldValues, useFormState } from 'react-hook-form';
// local imports
import { Divider } from '@packages/slytherin';
import { GridItem, GridLayout } from '@packages/slytherin/grid-layout';
import { FormProps } from './Form.d';
import FormField from './FormField';
import useFormAction from './useFormAction';

let mounted = false;
function Form<T extends FieldValues>(
  props: FormProps<T>,
  ref: React.ForwardedRef<any>
): JSX.Element {
  const { useFormMethods, ..._props } = props;
  const { formLayout, fields } = _props;
  const { handleSubmit } = useFormMethods!;

  const formRef = React.useRef<HTMLFormElement>(null);

  const { handleOnSubmitSuccess, handleOnSubmitError, handleOnChange, handleOnMounted } = useFormAction(_props, useFormMethods!);

  const formState = useFormState();

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    handleSubmit(handleOnSubmitSuccess, handleOnSubmitError)(event)
  }

  const generateGridItemFromFields = () => {
    const { field } = formLayout!;

    return fields.map((_field, index) => {
      // xử lý trong TH là divider
      if (_field.isDivider) {
        return (
          <GridItem key={uniqueId(`__fd-${index}-`)} xs={12} sm={12} md={12} lg={12}>
            <Divider content={_field.label ? _field.label : _field.name} />
          </GridItem>
        )
      }
      return (
        <GridItem key={uniqueId(`__fd-${index}-`)}>
          <FormField
            {...field}
            label={_field.label ? _field.label : _field.name}
            fieldDef={_field}
            useFormMethods={useFormMethods}
            onChange={handleOnChange}
          >
            {React.createElement(
              _field.component,
              _field.componentParams
            )}
          </FormField>
        </GridItem>
      );
    });
  };

  /**
 * Sự kiện diễn ra khi mount form
 */
  React.useEffect(() => {
    let ignore = false;

    async function handleOnMountForm() {
      await handleOnMounted();
    };

    if (!ignore && !mounted) {
      handleOnMountForm();
    }

    mounted = true;
    return () => {
      ignore = true;
      mounted = false;
    }
  }, []);


  React.useImperativeHandle(ref, () => {
    return {
      submit(): void {
        formRef.current?.dispatchEvent(
          new Event("submit", { bubbles: true, cancelable: true })
        )
      },
      getValues() {
        return useFormMethods?.getValues();
      },
      getFormState() {
        return formState;
      }
    }
  }, []);

  return (
    <form onSubmit={handleOnSubmit} ref={formRef}>
      <GridLayout fluid columnCount={formLayout?.column}>
        {generateGridItemFromFields()}
      </GridLayout>
    </form>
  );
}

export default React.forwardRef(Form);
