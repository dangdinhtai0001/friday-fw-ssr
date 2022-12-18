import * as React from 'react';

function getChildrenByType(
  children: JSX.Element | JSX.Element[],
  type: any,
  mappingFunc?: (
    child: JSX.Element
  ) => JSX.Element | JSX.Element[] | null
) {
  if (!children) return null;

  let _result = null;

  React.Children.forEach(children, child => {
    if (child.type === type) {
      if (mappingFunc) {
        return mappingFunc(child);
      }

      let { props } = child;
      _result = props.children;

      return _result;
    }
  });

  return _result;
}

function getAllChildrenByType(
  children: JSX.Element | JSX.Element[],
  type: any,
  mappingFunc?: (
    child: JSX.Element
  ) => JSX.Element | JSX.Element[] | null
) {
  if (!children) return null;

  return React.Children.map(children, child => {
    if (child.type === type) {
      if (mappingFunc) {
        return mappingFunc(child);
      }

      let { props } = child;
      return props.children;
    }
  });
}

export { getChildrenByType, getAllChildrenByType };
