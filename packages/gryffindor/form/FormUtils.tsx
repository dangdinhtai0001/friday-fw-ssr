// react imports
import * as React from 'react';
// 3rd imports
import { uniqueId } from 'lodash';
// local imports
import {
  GridItem
} from '@packages/slytherin/grid-layout';
import { ContextState, FormProps } from './Form.d';
import FormField from './FormField';

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

function generateGridItemFromFields(props: FormProps) {
  const { fields, formLayout } = props;
  const { field } = formLayout!;

  return fields.map((_field, index) => {
    return (
      <GridItem key={uniqueId(`__fd-${index}-`)}>
        <FormField {...field} label={_field.name}>
          {React.createElement(_field.component, _field.componentParams)}
        </FormField>
      </GridItem>
    );
  });
}

export { createFormInitialContext, generateGridItemFromFields };

