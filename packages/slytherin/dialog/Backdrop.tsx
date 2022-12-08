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
            absolute top-0 left-0 bg-black opacity-50 h-screen w-screen 
        `,
        { [`MuiBackdrop-open`]: open }
    )

    return (
        <div
            className={classname}
            ref={ref}
        // {...other}
        />
    );
}

export default React.forwardRef(Backdrop);