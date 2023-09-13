export interface IControllerComponentProps<TValue> {
  value?: TValue;
  disabled?: boolean;
  readOnly?: boolean;
  hidden?: boolean;
  onChange?: (value: TValue) => void | Promise<void>;
  ref?: any;
}
