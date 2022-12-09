// react imports
import * as React from 'react';
// 3rd imports
import classnames from 'classnames';
// local imports

function Backdrop(props: { open?: boolean; className: string }, ref: React.ForwardedRef<any>): JSX.Element {
    const { open, className, ...other } = props;

    const classname = classnames(
        `
            ${className}
            fixed top-0 left-0 left-0 right-0 bottom-0 bg-black opacity-50 h-full w-full
        `,
        { [`MuiBackdrop-open`]: open }
    )

    return (
        <div
            className={classname}
            ref={ref}
            style={{
                WebkitTapHighlightColor: 'transparent'
            }}
        // {...other}
        />
    );
}

export default React.forwardRef(Backdrop);