import * as React from 'react';
import { _childrenType } from './global-interface';

function getChildrenByType(
  children: _childrenType,
  type: any,
  mappingFunc?: (child: JSX.Element) => _childrenType
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
  children: JSX.Element | JSX.Element[] | null,
  type: any,
  mappingFunc?: (
    child: JSX.Element,
    index?: number
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


/**
 * Tìm kiếm tất cả các children của một component React dựa vào kiểu children và một hàm điều kiện matchFunc.
 * Hàm cũng hỗ trợ một hàm mappingFunc tùy chọn để thực hiện transform children sang component khác.
 * 
 * @param children Children cần tìm kiếm
 * @param type Kiểu component của children cần tìm kiếm
 * @param matchFunc Hàm điều kiện để xác định khi nào lấy children ra
 * @param mappingFunc Hàm tùy chọn để thực hiện transform children sang component khác
 * 
 * @returns Danh sách các children tìm thấy
 */
function findChildrenByTypeAndProps<T extends React.ReactNode>(
  children: React.ReactNode,
  type: React.ComponentType<T>,
  matchFunc: (props: any) => boolean,
  mappingFunc?: (child: T) => React.ReactNode
): React.ReactNode[] {
  const matches: React.ReactNode[] = [];

  React.Children.forEach(children, (child) => {
    if (React.isValidElement<T>(child) && child.type === type) {
      let match = matchFunc(child.props);

      if (match) {
        matches.push(mappingFunc ? mappingFunc(child as T) : child);
      }
    }
  });

  return matches;
}

export { getChildrenByType, getAllChildrenByType, findChildrenByTypeAndProps };
