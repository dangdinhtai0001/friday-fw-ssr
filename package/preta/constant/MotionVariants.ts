export const slideDownVariant = {
  closed: {
    opacity: 0,
    scaleY: 0,
    transition: {
      opacity: { duration: 0.2 },
      scaleY: { duration: 0.2, ease: [0.4, 0, 0.2, 1] }
    }
  },
  open: {
    opacity: 1,
    scaleY: 1,
    transition: {
      opacity: { duration: 0.2 },
      scaleY: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
    }
  }
};