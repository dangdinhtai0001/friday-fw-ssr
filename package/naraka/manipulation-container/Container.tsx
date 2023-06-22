import React, { forwardRef, useRef, useImperativeHandle, Ref } from 'react';
import { ContainerProps, ContainerRef } from './types';
import { WatcherPanel, DataPanel } from './panels';
import { useContainerContext } from './context/useContainerContext';
import { useFormContext, Controller } from 'react-hook-form';

const Container = forwardRef<ContainerRef, ContainerProps>((props, ref: Ref<ContainerRef>) => {
  const formRef = useRef<HTMLFormElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const { handleSubmit, getValues, setValue, trigger, reset } = useFormContext();
  const { context, contextApi } = useContainerContext();

  useImperativeHandle(ref, () => ({
    /**
     * Submit the form by programmatically clicking the button.
     */
    submitForm: () => {
      buttonRef.current?.click();
    },
    /**
     * Retrieve the current values of the form.
     * @returns {any} The current form values.
     */
    getFormValues(): any {
      return getValues();
    },
    /**
     * Update the value of a field and validate the form.
     * @param {string} name - The name of the field.
     * @param {unknown} value - The new value for the field.
     * @param {boolean} shouldValidate - (Optional) Specifies whether to perform validation. Default is true.
     */
    setFieldValues(name: string, value: unknown, shouldValidate?: boolean) {
      setValue(name, value, { shouldValidate: shouldValidate === undefined ? true : shouldValidate });

      // After setting the value, trigger validation for the form.
      if (shouldValidate) {
        trigger();
      }
    },
    /**
     * Reset the form values to their initial state.
     */
    resetFormValues() {
      reset();
    },
    applyFieldMessage(fields?: Record<string, { type: string, message: string }>) {
      contextApi.applyFieldMessage(fields);
    },
  }));

  const { onSubmitSuccess, onSubmitError } = context;

  const onValid = async (data: unknown): Promise<void> => {
    // tăng số lần submit lên 
    contextApi.increaseSubmitCounter();

    await onSubmitSuccess(data, context, contextApi);
  };

  const onInvalid = async (errors: unknown): Promise<void> => {
    // tăng số lần submit lên 
    contextApi.increaseSubmitCounter();

    await onSubmitError(errors, context, contextApi);
  };


  return (
    <form onSubmit={handleSubmit(onValid, onInvalid)} ref={formRef}>
      <button type="submit" ref={buttonRef} style={{ display: 'none' }} />
      <DataPanel />
      <WatcherPanel />
    </form>
  );
});

export default Container;
