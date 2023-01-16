// react imports
import * as React from 'react';
// 3rd imports
import ButtonUnstyled from '@mui/base/ButtonUnstyled';
import classNames from 'classnames';
// local imports
import { ButtonProps, Loading } from './Button.d';

function Button(props: ButtonProps, ref: React.ForwardedRef<any>): JSX.Element {
    const { children, rounded, icon, disabled, loading = false, block, onClick, color, style = {}, theme, } = props;

    const { useBorder = true, ..._props } = props;

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

    const handleClick = async (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>) => {
        // https://github.com/ant-design/ant-design/issues/30207
        if (innerLoading || disabled) {
            e.preventDefault();
            return;
        }

        await (onClick as React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>)?.(e);
    };

    const classes = classNames(
        `
            h-fit
            group btn relative overflow-hidden 
            inline-flex items-center justify-start 
            cursor-pointer
            text-th-text-primary font-roboto font-[500] text-[0.9rem] leading-[1.5715rem]
            transform hover:translate-y-[-0.2rem]
            shadow hover:shadow-xl shadow-inherit
        `,
        {
            ['opacity-50 cursor-not-allowed']: disabled || innerLoading,
            ['transition-all  hover:scale-105 transition-transform active:scale-[0.9]']: !disabled && !innerLoading,
            [`rounded-full px-[0.5rem] py-[0.5rem]`]: (!children && children !== 0 && !!iconType) || rounded,
            [`rounded px-[0.3rem] py-[0.05rem]`]: children,
            [`w-full`]: block,
            [`w-fit`]: !block,
            [`bg-th-${theme}`]: theme,
            [`border-[0.1rem] border-th-foreground`]: useBorder
        },
    );

    return <ButtonUnstyled
        {..._props}
        slotProps={{
            root: () => ({
                className: classes,
                onClick: handleClick,
                style: {
                    ...style,
                    background: color ? color : 'null'
                }
            }),
        }}
        ref={ref}
    >
        {icon ? icon : children}
    </ButtonUnstyled>;
}

export default React.forwardRef(Button);