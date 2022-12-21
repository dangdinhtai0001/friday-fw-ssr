// react imports
import * as React from 'react';
// 3rd imports
import classNames from 'classnames';
import { Col, Grid, Row } from 'react-flexbox-grid/dist/react-flexbox-grid';
// local imports
import { FormProps } from './Form.d';
import useForm from './useForm';


function Form(
  props: FormProps,
  ref: React.ForwardedRef<any>
): JSX.Element {
  const { formLayout } = props;

  const { } = useForm(props);

  const classes = classNames(
    `
      grid grid-cols-${formLayout?.column} gap-4
    `,
    {
    }
  );

  return <>
    <Grid fluid>
      <Row>
        <Col xs={12} sm={3} md={2} lg={1} ><div className='bg-sky-600 w-full h-[50px]'></div></Col>
        <Col xs={6} sm={6} md={8} lg={10} ><div className='bg-sky-600 w-full h-[50px]'></div></Col>
        <Col xs={6} sm={3} md={2} lg={1} ><div className='bg-sky-600 w-full h-[50px]'></div></Col>
      </Row>
    </Grid>
  </>;
}

export default React.forwardRef(Form);
