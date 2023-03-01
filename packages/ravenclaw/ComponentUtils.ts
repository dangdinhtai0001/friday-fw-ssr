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
 * Tìm tất cả các children của một component React cụ thể có kiểu và props nhất định, và áp dụng một hàm ánh xạ để chuyển đổi mỗi child thành một component React.
 *
 * @template T Kiểu component cần tìm.
 * @param children Các children cần tìm.
 * @param type Component cần tìm kiếm.
 * @param matchFunc Một hàm nhận vào các props của component và trả về boolean xác định xem component đó có nên được bao gồm trong kết quả hay không.
 * @param mappingFunc Một hàm nhận vào một component tìm thấy và trả về phiên bản đã chuyển đổi của component đó.
 * @returns Một mảng các component React có kiểu T thỏa mãn các điều kiện đã cho.
 */
function findChildrenByTypeAndProps<T extends React.ReactNode>(
  children: React.ReactNode,
  type: React.ComponentType<T>,
  matchFunc: (props: any) => boolean,
  mappingFunc: (child: T) => React.ReactNode
): React.ReactNode[] {
  const matches: React.ReactNode[] = [];

  React.Children.forEach(children, (child) => {
    if (React.isValidElement<T>(child) && child.type === type) {
      let match = matchFunc(child.props);

      if (match) {
        matches.push(mappingFunc(child as T));
      }
    }
  });

  return matches;
}

export { getChildrenByType, getAllChildrenByType, findChildrenByTypeAndProps };
