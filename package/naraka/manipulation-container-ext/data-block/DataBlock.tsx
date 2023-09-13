import * as React from 'react';
import { IDataFieldBlockProps } from './types.d';

import { useController } from 'react-hook-form';
import {
  motion,
  useAnimation,
  AnimationControls,
} from 'framer-motion';
import useAsyncEffect from '@n1ru4l/use-async-effect';
import { useContainerContext } from '@/package/naraka/manipulation-container/context/useContainerContext';
import FieldItem from '@/package/naraka/manipulation-container/items/DataFieldItem';
import {
  StyledLabel,
  StyledRequiredIcon,
  StyledMessage,
  StyledDataBlockRoot,
} from './StyledElements';

export default function DataFieldBlock(props: IDataFieldBlockProps) {
  const { fieldDef, name } = props;

  const {
    context: {
      fieldMessage,
      defaultFieldLabelAlign,
      defaultFieldRaito,
      fieldHidden,
    },
  } = useContainerContext();
  const {
    formState: { errors },
  } = useController({ name: name });

  const errorMsgControls = useAnimation();
  const customMsgControls = useAnimation();

  const [errorMessage, setErrorMessage] = React.useState<
    string | undefined
  >();
  const [message, setMessage] = React.useState<string | undefined>();

  const renderControlContainer = () => {
    return <FieldItem fieldDef={fieldDef} name={name}></FieldItem>;
  };

  /**
   * Trigger the change event for errors, which will activate animation and update error message.
   * @param {Function} onCancel - The cancel function for the effect.
   * @param {Function} cast - The generator function for the effect.
   * @param {Object} errors - The object containing error messages.
   * @param {string} fieldName - The name of the field.
   * @param {Object} controls - The controls for animation.
   */
  useAsyncEffect(
    function* (onCancel, cast) {
      useMessageHandling(
        setErrorMessage,
        errors,
        name,
        errorMsgControls
      );
    },
    [errors]
  );

  useAsyncEffect(
    function* (onCancel, cast) {
      useMessageHandling(
        setMessage,
        fieldMessage,
        name,
        customMsgControls
      );
    },
    [fieldMessage]
  );

  const renderDataFieldBlock = () => {
    let { label, required, fieldRaito, labelAlign } = fieldDef;

    // TODO: Check lại xem vì sao không có label thì nó không render cả control luôn
    if (label) {
      return (
        <StyledDataBlockRoot
          className="styled-data-block-root"
          fieldRaito={fieldRaito ? fieldRaito : defaultFieldRaito}
        >
          <div>
            <StyledLabel
              status={errorMessage ? 'error' : undefined}
              textAlign={
                labelAlign ? labelAlign : defaultFieldLabelAlign
              }
            >
              {label}
              {required ? (
                <StyledRequiredIcon>*</StyledRequiredIcon>
              ) : null}
            </StyledLabel>
          </div>
          <div>
            {renderControlContainer()}
            <motion.div
              animate={errorMsgControls}
              initial="initial"
              variants={fieldMessageVariants}
            >
              <StyledMessage status="error">
                {errorMessage}
              </StyledMessage>
            </motion.div>
            <StyledMessage status="warning">{message}</StyledMessage>
          </div>
        </StyledDataBlockRoot>
      );
    } else {
      return <div>{renderControlContainer()}</div>;
    }
  };

  return renderDataFieldBlock();
}

const fieldMessageVariants = {
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
      type: 'spring',
      bounce: 0.2,
    },
  },
  exit: {
    opacity: 0,
    y: -50,
    transition: {
      duration: 0.2,
      type: 'spring',
      bounce: 0.2,
    },
  },
  initial: {
    opacity: 0,
    y: -50,
  },
};

/**
 * Handle the message based on the provided conditions and update the corresponding state.
 * @param {Function} setMessage - The state setter function for the message.
 * @param {Object} messageObj - The object containing the messages.
 * @param {string} fieldName - The name of the field.
 * @param {AnimationControls} controls - The controls for animation.
 */
const useMessageHandling = async (
  setMessage: React.Dispatch<
    React.SetStateAction<string | undefined>
  >,
  messageObj: Record<string, any>,
  fieldName: string,
  controls: AnimationControls
) => {
  try {
    if (messageObj && messageObj.hasOwnProperty(fieldName)) {
      setMessage(messageObj[fieldName]?.message as string);
      controls.start('animate');
    } else {
      await controls.start('exit');
      setMessage(undefined);
    }
  } catch (error) {
    console.error('Error occurred:', error);
  }
};
