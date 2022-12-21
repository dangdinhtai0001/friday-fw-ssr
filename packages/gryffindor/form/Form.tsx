// react imports
import * as React from 'react';
// 3rd imports
import classNames from 'classnames';
import { Col, Container, Row } from 'react-grid-system';
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
    <Container>
      <Row>
        <Col sm={4}>
          <div className='bg-sky-600 w-full h-[50px]'></div>
        </Col>
        <Col sm={4}>
          <div className='bg-sky-600 w-full h-[50px]'></div>
        </Col>
        <Col sm={4}>
          <div className='bg-sky-600 w-full h-[50px]'></div>
        </Col>
      </Row>
    </Container>
  </>;
}

export default React.forwardRef(Form);
