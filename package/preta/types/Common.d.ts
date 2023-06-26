export interface IControllerComponentProps {
  value: unknown;
  disabled: boolean;
  readOnly: boolean;
  hidden: boolean;
  onChange: (value: any) => void | Promise<void>;
  ref: any;
}