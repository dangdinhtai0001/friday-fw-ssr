import { IInputWrapperProps } from '@/package/deva/input';

export interface IInputNumberWrapperProps<TValue>
  extends IInputWrapperProps<TValue> {
  min?: number;
  max?: number;
  step?: number;
  precision?: number;
  value: number;
}

export interface INumberControlProps {}
