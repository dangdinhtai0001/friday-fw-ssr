/* eslint-disable react/button-has-type */
import classNames from 'classnames';
import { tuple } from '../_util/type';
import React from 'react';
import LoadingIcon from './LoadingIcon';

const ButtonTypes = tuple('primary', 'secondary', 'success', 'danger', 'warning', 'info');
export type ButtonType = typeof ButtonTypes[number];

const ButtonHTMLTypes = tuple('submit', 'button', 'reset');
export type ButtonHTMLType = typeof ButtonHTMLTypes[number];

type Loading = number | boolean;

export interface BaseButtonProps {
  type?: ButtonType;
  icon?: React.ReactNode;
  disabled?: boolean;
  outline?: boolean;
  color?: string;
  loading?: boolean | { delay?: number };
  className?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
  children?: React.ReactNode;
}

// Typescript will make optional not optional if use Pick with union.
// Should change to `AnchorButtonProps | NativeButtonProps` and `any` to `HTMLAnchorElement | HTMLButtonElement` if it fixed.
// ref: https://github.com/ant-design/ant-design/issues/15930
export type AnchorButtonProps = {
  href: string;
  target?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
} & BaseButtonProps &
  Omit<React.AnchorHTMLAttributes<any>, 'type' | 'onClick'>;

export type NativeButtonProps = {
  htmlType?: ButtonHTMLType;
  onClick?: React.MouseEventHandler<HTMLElement>;
} & BaseButtonProps &
  Omit<React.ButtonHTMLAttributes<any>, 'type' | 'onClick'>;

export type ButtonProps = Partial<AnchorButtonProps & NativeButtonProps>;

const getColorClassName = (color, type) => {
  if (color) {
    return `bg-${color}`;
  } else {
    return `bg-th-${type}`;
  }
};

const InternalButton = React.forwardRef<unknown, ButtonProps>((props, ref) => {
  const {
    loading = false,
    type = 'primary',
    outline = false,
    color,
    disabled,
    className,
    children,
    icon,
    /** If we extract items here, we don't need use omit.js */
    // React does not recognize the `htmlType` prop on a DOM element. Here we pick it out of `rest`.
    htmlType = 'button' as ButtonProps['htmlType'],
    onClick,
    ...rest
  } = props;

  const buttonRef = (ref as any) || React.createRef<HTMLElement>();

  const [innerLoading, setLoading] = React.useState<Loading>(!!loading);

  // =============== Update Loading ===============
  const loadingOrDelay: Loading = typeof loading === 'boolean' ? loading : loading?.delay || true;
  const iconType = innerLoading ? 'loading' : icon;

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

  const classes = classNames(
    `border-[0.1rem] border-th-foreground 
    transition-all  hover:scale-105 transition-transform active:scale-[0.9]
    group btn relative inline-flex items-center justify-start overflow-hidden 
    cursor-pointer
    text-th-text-primary font-roboto font-[400] font-[0.875rem] leading-[1.5715rem]`,
    {
      ['opacity-50 cursor-not-allowed']: disabled,
      [`rounded-full px-[0.5rem] py-[0.5rem]`]: !children && children !== 0 && !!iconType,
      [`rounded px-[0.5rem] py-[0.2rem]`]: children,
      [getColorClassName(color, type)]: true,
    },
  );

  const iconNode =
    icon && !innerLoading ? (
      icon
    ) : (
      <LoadingIcon existIcon={!!icon} loading={!!innerLoading} className="ma-7" />
    );

  return (
    <button
      {...(rest as NativeButtonProps)}
      type={htmlType}
      className={classes}
      onClick={handleClick}
      disabled={disabled}
      ref={buttonRef}
    >
      <div className="w-0 h-full rounded bg-th-background absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full opacity-50 -z-1 "></div>
      <div className="flex items-center justify-center h-full border-2">
        {iconNode}
        {children}
      </div>
    </button>
  );
});
// const Button = (props: ButtonProps) => {
//   return (
//     <button
//       type="button"
//       className="px-[10px] py-[5px] bg-th-primary-medium rounded-md text-white outline-none hover:bg-th-primary-dark shadow-lg transform active:scale-75 hover:scale-110 transition-transform"
//     >
//       Button
//     </button>
//   );
// };

InternalButton.displayName = 'Button';

export default InternalButton;
