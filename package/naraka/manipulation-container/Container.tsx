import React from 'react';
import { ContainerProps } from './types';
import { WatcherPanel, DataPanel } from './panels'
import { useFormContext, Controller } from 'react-hook-form';

export default function Container(props: ContainerProps) {
  const { register, handleSubmit, formState: { errors } } = useFormContext();

  const onValid = async (data: unknown): Promise<void> => {
    console.log("onValid submit", data);
  }

  const onInvalid = async (errors: unknown): Promise<void> => {
    console.log("onInValid submit", errors);
  }


  return (
    <>
      <form onSubmit={handleSubmit(onValid, onInvalid)}>
        <input type="submit" />
        <DataPanel></DataPanel>
        <WatcherPanel></WatcherPanel>
      </form>
      <div>
        <div>errors: {JSON.stringify(errors)}</div>
      </div>
    </>
  );
}
