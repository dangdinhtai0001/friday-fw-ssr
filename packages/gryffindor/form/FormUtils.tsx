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

const fieldMessageVariant = {
  hidden: {
    y: '-100%',
    opacity: 0,
  },
  visible: {
    y: '0',
    opacity: 1,
    transition: {
      duration: 0.1,
      type: 'spring',
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: '100%',
    opacity: 1,
    transition: {
      duration: 0.25,
      type: 'spring',
    },
  },
};

export { createFormInitialContext, fieldMessageVariant };

