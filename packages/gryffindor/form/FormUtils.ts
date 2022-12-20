// react imports
// 3rd imports
// local imports
import { ContextState, FormProps } from './Form.d';

function createFormInitialContext(props: FormProps): ContextState {
  let { fields } = props;

  let _initialValues: { [key: string]: any } = {};
  let _disabled: { [key: string]: boolean } = {};
  let _visible: { [key: string]: boolean } = {};

  fields.forEach(fieldDef => {
    _initialValues[fieldDef.name] = fieldDef.initialValue;
    _disabled[fieldDef.name] = false;
    _visible[fieldDef.name] = true;
  });

  return {
    initialValues: _initialValues,
    fields,
    disabled: _disabled,
    visible: _visible,
    rawValues: _initialValues,
    submitCount: 0,
    errors: {},
    status: 'initial',
  };
}

export { createFormInitialContext };
