import React, { forwardRef, useRef, useImperativeHandle, Ref } from 'react';
import { ContainerProps, ContainerRef } from './types';
import { WatcherPanel, DataPanel } from './panels';
import { useContainerContext } from './context/useContainerContext';
import { useFormContext, Controller } from 'react-hook-form';

const Container = forwardRef<ContainerRef, ContainerProps>((props, ref: Ref<ContainerRef>) => {
  const formRef = useRef<HTMLFormElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const { handleSubmit, getValues } = useFormContext();
  const { context, contextApi } = useContainerContext();

  useImperativeHandle(ref, () => ({
    submitForm: () => {
      buttonRef.current?.click();
    },
    getFormValues() {
      return getValues();
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
