// react imports
import * as React from 'react';
// 3rd imports
import { useFieldArray } from 'react-hook-form';
// local imports
import { FieldArrayProps } from './Form.d';

function FieldArray(
    props: FieldArrayProps,
    ref: React.ForwardedRef<any>
): JSX.Element {

    const { name } = props;

    const { fields, append, prepend, remove, swap, move, insert } = useFieldArray({ name });

    return <></>;
}

export default React.forwardRef(FieldArray);
