// react imports
import * as React from 'react';
// 3rd imports
import { Container } from 'react-grid-system';
// local imports
import { GridLayoutProps } from './GridLayout.d';
import { convert1dArrTo2dArr, convertItemtable2Grid, findAllGridItemProps } from './GridLayoutUtils';

function GridLayout(
  props: GridLayoutProps,
  ref: React.ForwardedRef<any>
): JSX.Element {
  const { columnCount, children } = props;

  let allItemProps = findAllGridItemProps(children!);
  let itemTableProps = convert1dArrTo2dArr(allItemProps!, columnCount!);
  console.log(itemTableProps);

  return (
    <Container>
      {/* <Row>
        <Col sm={4}>
          One of three columns
        </Col>
        <Col sm={4}>
          One of three columns
        </Col>
        <Col sm={4}>
          One of three columns
        </Col>
      </Row> */}
      {convertItemtable2Grid(itemTableProps)}
    </Container>
  );
}

export default React.forwardRef(GridLayout);
