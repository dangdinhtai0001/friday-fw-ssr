// react imports
import * as React from 'react';
// 3rd imports
import ButtonUnstyled from '@mui/base/ButtonUnstyled';
import classNames from 'classnames';
import { motion, useAnimation } from "framer-motion";
// local imports
import { ButtonProps, Loading } from './Button.d';

const coverVariants = {
    initial: {
        x: "-100%",
        scale: 1,
        opacity: 0.3,
        borderRadius: "0%"
    },
    hover: {
        x: "0",
        scale: [1, 1.1],
    },
    tap: {
        opacity: [0.5, 0],
        scale: [1.1, 0.5, 0],
        borderRadius: "100%"

    },
    exit: {
        opacity: 0,
    },
};

function Button(props: ButtonProps, ref: React.ForwardedRef<any>): JSX.Element {
    const { children, rounded, icon, disabled, loading = false, block, onClick, color, style = {}, theme, } = props;

    const { useBorder = true, ..._props } = props;

    const [innerLoading, setLoading] = React.useState<Loading>(!!loading);

    const controls = useAnimation();

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

        //Kích hoạt animation `tap`
        controls.start('tap');

        (onClick as React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>)?.(e);
    };

    const classes = classNames(
        `
            h-fit
            group btn relative overflow-hidden 
            inline-flex items-center justify-start 
            cursor-pointer
            text-th-text-primary font-roboto font-[500] text-[0.9rem] leading-[1.5715rem]
        `,
        {
            ['opacity-50 cursor-not-allowed']: disabled || innerLoading,
            ['transition-all  hover:scale-105 transition-transform active:scale-[0.9]']: !disabled && !innerLoading,
            [`rounded-full px-[0.5rem] py-[0.5rem]`]: (!children && children !== 0 && !!iconType) || rounded,
            [`rounded px-[0.3rem] py-[0.05rem]`]: children,
            [`w-full`]: block,
            [`w-fit`]: !block,
            [`bg-th-${theme}`]: theme,
            [`border-[0.1rem] border-th-foreground `]: useBorder
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


        onMouseEnter={async () => {
            await controls.start("hover");
        }}
        onMouseLeave={async () => {
            controls.stop();
            await controls.start("initial");
        }}
        ref={ref}
    >
        <motion.div
            transition={{
                duration: 0.2,
                type: 'spring',
                damping: 25,
                stiffness: 500,
            }}
            variants={coverVariants}
            initial="initial"
            exit="exit"
            animate={controls}
            className='bg-black w-full h-full absolute top-0 left-0 '
        />
        {icon ? icon : children}
    </ButtonUnstyled>;
}

export default React.forwardRef(Button);