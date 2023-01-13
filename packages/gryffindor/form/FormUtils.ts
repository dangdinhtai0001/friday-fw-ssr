const fieldMessageVariant = {
  hidden: {
    y: '-100%',
    opacity: 0,
  },
  visible: {
    y: '0',
    opacity: 1,
    transition: {
      duration: 0.1,
      type: 'spring',
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: '100%',
    opacity: 1,
    transition: {
      duration: 0.25,
      type: 'spring',
    },
  },
};

const fieldContainerLeftVariant = {
  hidden: {
    y: '-100%',
    height: '0',
    opacity: 1,
  },
  visible: {
    y: '0',
    height: 'inherit',
    opacity: 1,
  },
};

const fieldContainerTransition = {
  duration: 0.1,
  type: 'spring',
  damping: 25,
  stiffness: 500,
};

export {
  fieldMessageVariant,
  fieldContainerTransition,
  fieldContainerLeftVariant,
};
