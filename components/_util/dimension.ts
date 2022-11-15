function getDimensionByRef(
  ref: React.RefObject<any>,
  useOffset?: boolean,
): { height: number; width: number } {
  if (useOffset) {
    return { height: ref.current.offsetHeight, width: ref.current.offsetWidth };
  } else {
    return { height: ref.current.clientHeight, width: ref.current.clientWidth };
  }
}

export { getDimensionByRef };
