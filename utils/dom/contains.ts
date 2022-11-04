export default function contains(root: Node | null | undefined, _node: Node | null) {
  if (!root) {
    return false;
  }

  // Use native if support
  if (root.contains) {
    return root.contains(_node);
  }

  // `document.contains` not support with IE11
  let node = _node;
  while (node) {
    if (node === root) {
      return true;
    }
    node = node.parentNode;
  }

  return false;
}
