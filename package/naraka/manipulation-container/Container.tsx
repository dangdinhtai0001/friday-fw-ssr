import React from 'react';
import { ContainerProps } from './types';
import { WatcherPanel, DataPanel } from './panels'
import { useContainerContext } from './context/useContainerContext';
import { useFormContext, Controller } from 'react-hook-form';

export default function Container(props: ContainerProps) {
  const { handleSubmit, formState: { errors } } = useFormContext();
  const { context, contextApi } = useContainerContext();

  const { onSubmitSuccess, onSubmitError } = context;

  const onValid = async (data: unknown): Promise<void> => {
    // tăng số lần submit lên 
    contextApi.increaseSubmitCounter();

    await onSubmitSuccess(data, context, contextApi);
  }

  const onInvalid = async (errors: unknown): Promise<void> => {
    // tăng số lần submit lên 
    contextApi.increaseSubmitCounter();

    await onSubmitError(errors, context, contextApi);
  }


  return (
    <form onSubmit={handleSubmit(onValid, onInvalid)}>
      <input type="submit" />
      <DataPanel></DataPanel>
      <WatcherPanel></WatcherPanel>
    </form>
  );
}
