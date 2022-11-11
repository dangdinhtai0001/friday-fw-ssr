/* eslint-disable react/button-has-type */
import React from 'react';
// ----------------
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
// ----------------
import { tuple } from '../_util/type';

const ButtonTypes = tuple('primary', 'success', 'danger', 'warning', 'info');
export type ButtonType = typeof ButtonTypes[number];

const ButtonHTMLTypes = tuple('submit', 'button', 'reset');
export type ButtonHTMLType = typeof ButtonHTMLTypes[number];

type Loading = number | boolean;

export interface BaseButtonProps {
  type?: ButtonType;
  icon?: React.ReactNode;
  block?: boolean;
  disabled?: boolean;
  rounded?: boolean;
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

const getColorClassName = (type: string, outline: boolean): string => {
  // Do cơ chế Just-in-time (JIT) của tailwind mà phải viết như này thay vì viết 1 phép concat chuỗi
  // Nếu không sẽ gây nên hiện tượng, có tên class nhưng ko apply được hiệu ứng

  if (outline) {
    return `bg-transparent`;
  }

  switch (type) {
    case 'primary':
      return `bg-th-primary`;
    case 'secondary':
      return `bg-th-secondary`;
    case 'success':
      return `bg-th-success`;
    case 'danger':
      return `bg-th-danger`;
    case 'warning':
      return `bg-th-warning`;
    case 'info':
      return `bg-th-info`;
  }

  return '';
};

const InternalButton = React.forwardRef<unknown, ButtonProps>((props, ref) => {
  const {
    loading = false,
    type = 'primary',
    outline = false,
    rounded = false,
    block = false,
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
    
    group btn relative overflow-hidden 
    inline-flex items-center justify-start 
    cursor-pointer
    text-th-text-primary font-roboto font-[500] text-[0.9rem] leading-[1.5715rem]`,
    {
      ['opacity-50 cursor-not-allowed']: disabled || innerLoading,
      ['transition-all  hover:scale-105 transition-transform active:scale-[0.9]']:
        !disabled && !innerLoading,
      [`rounded-full px-[0.5rem] py-[0.5rem]`]:
        (!children && children !== 0 && !!iconType) || rounded,
      [`rounded px-[0.3rem] py-[0.05rem]`]: children,
      [getColorClassName(type, outline)]: true,
      [`w-full`]: block,
      [`w-fit`]: !block
    },
  );

  const renderIconNode = () => {
    if (innerLoading) {
      return <FontAwesomeIcon icon={faSpinner} spin className="mr-[0.3rem]" />;
    } else {
      if (children || children == 0) {
        return icon ? <div className="mr-[0.3rem]">{icon}</div> : null;
      } else {
        return icon ? icon : null;
      }
    }
  };

  return (
    <button
      {...(rest as NativeButtonProps)}
      type={htmlType}
      className={classes}
      onClick={handleClick}
      disabled={disabled}
      ref={buttonRef}
    >
      {!disabled && !innerLoading && (
        <div className="w-0 h-full rounded bg-th-background absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full opacity-30 -z-1 "></div>
      )}
      <div className="flex items-center justify-center h-full ">
        {renderIconNode()}
        {children}
      </div>
    </button>
  );
});

InternalButton.displayName = 'Button';

export default InternalButton;
