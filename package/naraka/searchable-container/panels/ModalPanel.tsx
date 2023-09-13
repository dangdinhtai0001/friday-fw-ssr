import * as React from 'react';
import {
  IModalPanelProps,
  ContextHookValue,
  IModalBlockProps,
} from '../types';
import { useContainerContext } from '../context/useContainerContext';
import useTask from '../task/useTask';
import { DefaultTaskName } from '../Constant';

function ModalPanel(props: IModalPanelProps) {
  const { context }: ContextHookValue = useContainerContext();
  const { onCreateTaskChain } = useTask();

  const handleOnCloseModal = (): void => {
    onCreateTaskChain([{ name: DefaultTaskName.HIDDEN_MODAL }]);
  };

  const createModalBlock = () => {
    if (context.modalBlockComponent) {
      const params = {
        ...context.modalBlockParams,
        onCloseModal: handleOnCloseModal,
        onCreateTaskChain,
      };

      return React.createElement(
        context.modalBlockComponent!,
        params
      );
    } else {
      return <></>;
    }
  };

  return createModalBlock();
}

export default ModalPanel;
