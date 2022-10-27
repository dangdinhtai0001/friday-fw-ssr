import styles from './button.module.scss';
import { tuple } from '../_util/type';
import React from 'react';

const ButtonTypes = tuple('primary', 'secondary', 'success', 'danger', 'warning', 'info');
export type ButtonType = typeof ButtonTypes[number];

type Loading = number | boolean;

export interface ButtonProps {
  type?: ButtonType;
  icon?: React.ReactNode;
  disabled?: boolean;
  loading?: boolean | { delay?: number };
  className?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
  children?: React.ReactNode;
}

const InternalButton: React.ForwardRefRenderFunction<unknown, ButtonProps> = (props, ref) => {
  const { loading = false, type = 'default', disabled, className, children, icon, onClick } = props;

  const buttonRef = (ref as any) || React.createRef<HTMLElement>();

  const [innerLoading, setLoading] = React.useState<Loading>(!!loading);

  // =============== Update Loading ===============
  const loadingOrDelay: Loading = typeof loading === 'boolean' ? loading : loading?.delay || true;

  React.useEffect(() => {
    let delayTimer: number | null = null;

    if (typeof loadingOrDelay === 'number') {
      delayTimer = window.setTimeout(() => {
        delayTimer = null;
        setLoading(loadingOrDelay);
      }, loadingOrDelay);
    } else {
      setLoading(loadingOrDelay);
    }

    return () => {
      if (delayTimer) {
        // in order to not perform a React state update on an unmounted component
        // and clear timer after 'loadingOrDelay' updated.
        window.clearTimeout(delayTimer);
        delayTimer = null;
      }
    };
  }, [loadingOrDelay]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>) => {
    const { onClick } = props;
    // https://github.com/ant-design/ant-design/issues/30207
    if (innerLoading || disabled) {
      e.preventDefault();
      return;
    }
    (onClick as React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>)?.(e);
  };
};
const Button = (props: ButtonProps) => {
  return (
    <button
      type="button"
      className="px-[10px] py-[5px] bg-th-primary-medium rounded-md text-white outline-none hover:bg-th-primary-dark shadow-lg transform active:scale-75 hover:scale-110 transition-transform"
    >
      Button
    </button>
  );
};

export default InternalButton;
