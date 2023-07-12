import { IInputWrapperProps } from '@/package/deva/input'

export interface IInputNumberWrapperProps extends IInputWrapperProps {
  min?: number
  max?: number
  step?: number
  precision?: number
};

export interface IInputHandlerProps {
}