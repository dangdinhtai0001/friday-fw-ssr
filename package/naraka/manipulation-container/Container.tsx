import React from 'react';
import { ContainerProps } from './types';
import { WatcherPanel, DataPanel } from './panels'
import { FieldValues, SubmitHandler, useFormContext, Controller, useFormState } from 'react-hook-form';

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
        <Controller
          name="foo"
          render={({ field }) => (
            <input type="text" placeholder="foo" {...field} />
          )}
        />
        <input type="text" placeholder="First name" {...register("First name", { required: true, maxLength: 80 })} />
        <input type="text" placeholder="Last name" {...register("Last name", { required: true, maxLength: 100 })} />
        <input type="text" placeholder="Email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} />
        <input type="tel" placeholder="Mobile number" {...register("Mobile number", { required: true, minLength: 6, maxLength: 12 })} />
        <select {...register("Title", { required: true })}>
          <option value="Mr">Mr</option>
          <option value="Mrs">Mrs</option>
          <option value="Miss">Miss</option>
          <option value="Dr">Dr</option>
        </select>

        <input {...register("Developer", { required: true })} type="radio" value="Yes" />
        <input {...register("Developer", { required: true })} type="radio" value="No" />

        <input type="submit" />
      </form>
      <DataPanel></DataPanel>
      <WatcherPanel></WatcherPanel>
      <div>
        <div>errors: {JSON.stringify(errors)}</div>
      </div>
    </>
  );
}
