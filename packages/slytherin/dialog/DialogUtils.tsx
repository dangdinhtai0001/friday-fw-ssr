// react imports
import * as React from 'react';
// 3rd imports
// local imports
import { getChildrenByType } from '@packages/ravenclaw';
import { Button } from '@packages/slytherin/button';
import { ActionDef, DialogProps } from './Dialog.d';
import DialogActivator from './sub-components/DialogActivator';
import DialogContent from './sub-components/DialogContent';
import DialogExtraHeader from './sub-components/DialogExtraHeader';

const getDialogInitialContext = (props: DialogProps) => {
  const {
    minHeight,
    maxHeight,
    minWidth,
    maxWidth,
    initialHeight,
    initialWidth,
    title,
    actions,
  } = props;

  return {
    opened: false,
    title: title,
    actions: actions,
    minHeight: minHeight ? minHeight : 200,
    maxHeight: maxHeight ? maxHeight : 800,
    minWidth: minWidth ? minWidth : 600,
    maxWidth: maxWidth ? maxWidth : 1000,
    initialHeight: initialHeight ? initialHeight : 300,
    initialWidth: initialWidth ? initialWidth : 600,
  };
};

function getActivator(
  children: JSX.Element | JSX.Element[]
): JSX.Element | null {
  return getChildrenByType(children, DialogActivator);
}

function getContent(
  children: JSX.Element | JSX.Element[]
): JSX.Element | null {
  return getChildrenByType(children, DialogContent);
}

function getExtraHeader(
  children: JSX.Element | JSX.Element[]
): JSX.Element | null {
  return getChildrenByType(children, DialogExtraHeader);
}

function renderDialogActions(actions?: ActionDef[], handleOnActiveAction?: (event: React.MouseEvent<unknown, MouseEvent>, key: string) => void): JSX.Element[] | null {
  if (!actions || actions.length <= 0) {
    return null;
  }

  return actions.map((actionDef) => {
    const { key, component, disabled, visible, label, others } = actionDef;
    if (component) {
      return (
        <div key={key}>
          visible && {React.cloneElement(component, { ...others, onClick: handleOnActiveAction, disabled })}
        </div>
      );
    } else {
      return (
        <div key={key}>
          {visible && <Button
            {...others}
            onClick={(e) => { handleOnActiveAction?.(e, key) }}
            disabled={disabled}
          >
            {label}
          </Button>}
        </div>
      );
    }

  });
}

const containerVariants = {
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

export {
  getDialogInitialContext,
  getActivator,
  getContent,
  getExtraHeader,
  containerVariants,
  renderDialogActions
};

