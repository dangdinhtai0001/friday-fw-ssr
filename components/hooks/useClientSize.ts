import React, { useState, useLayoutEffect } from 'react';
export interface Props {
  ref: React.RefObject<any>;
}

const getClientSize = (
  ref: React.RefObject<any>,
  useOffset?: boolean,
): { height: number; width: number } => {
  if (useOffset) {
    return { height: ref.current.offsetHeight, width: ref.current.offsetWidth };
  } else {
    return { height: ref.current.clientHeight, width: ref.current.clientWidth };
  }
};

const useClientSize = (props: Props) => {
  const { ref } = props;

  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    let size = getClientSize(ref, true);
    setHeight(size.height);
    setWidth(size.width);
  }, []);

  return { height, width, getClientSize };
};

export default useClientSize;
