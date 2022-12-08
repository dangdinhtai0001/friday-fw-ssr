import * as React from 'react';

function getChildrenByType(
  children: JSX.Element | JSX.Element[],
  type: any
) {
  if (!children) return null;

  let _result = null;

  React.Children.forEach(children, child => {
    if (child.type === type) {
      let { props } = child;
      _result = props.children;

      return _result;
    }
  });

  return _result;
}

export { getChildrenByType };
