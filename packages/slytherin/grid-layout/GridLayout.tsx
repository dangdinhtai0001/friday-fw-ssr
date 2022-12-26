// react imports
import * as React from 'react';
// 3rd imports
import { Container } from 'react-grid-system';
// local imports
import { GridLayoutProps } from './GridLayout.d';
import { convertListItems2Grid } from './GridLayoutUtils';

function GridLayout(
  props: GridLayoutProps,
  ref: React.ForwardedRef<any>
): JSX.Element {
  const { children, fluid } = props;

  return (
    <Container fluid={fluid}>
      {Array.isArray(children) && convertListItems2Grid(children, props)}
    </Container>
  );
}

export default React.forwardRef(GridLayout);
