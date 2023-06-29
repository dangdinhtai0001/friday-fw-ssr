import * as React from 'react';
import Box from '@mui/system/Box';
import { useController } from 'react-hook-form';
import { motion, useAnimation, AnimationControls } from "framer-motion";
import useAsyncEffect from "@n1ru4l/use-async-effect";
import { IDataFieldBlockProps } from '@/package/naraka/manipulation-container/types';
import { useContainerContext } from '@/package/naraka/manipulation-container/context/useContainerContext';
import FieldItem from '@/package/naraka/manipulation-container/items/DataFieldItem';
import { DataFieldLabel, DataFieldMessage, RequiredIcon } from './StyledComponents';

export default function DataFieldBlock(props: IDataFieldBlockProps) {
  const { fieldItemProps } = props;
  const { context: { fieldMessage, defaultFieldLabelAlign, defaultFieldRaito } } = useContainerContext();
  const { formState: { errors } } = useController(fieldItemProps);
  const errorMsgControls = useAnimation();
  const customMsgControls = useAnimation();

  const [errorMessage, setErrorMessage] = React.useState<string | undefined>();
  const [message, setMessage] = React.useState<string | undefined>();

  const renderControlContainer = () => {
    return <FieldItem {...fieldItemProps}></FieldItem>
  };

  /**
   * Trigger the change event for errors, which will activate animation and update error message.
   * @param {Function} onCancel - The cancel function for the effect.
   * @param {Function} cast - The generator function for the effect.
   * @param {Object} errors - The object containing error messages.
   * @param {string} fieldName - The name of the field.
   * @param {Object} controls - The controls for animation.
   */
  useAsyncEffect(function* (onCancel, cast) {
    useMessageHandling(setErrorMessage, errors, fieldItemProps.name, errorMsgControls);
  }, [errors]);

  useAsyncEffect(function* (onCancel, cast) {
    useMessageHandling(setMessage, fieldMessage, fieldItemProps.name, customMsgControls);
  }, [fieldMessage]);


  const renderDataFieldBlock = () => {
    let { fieldDef: { label, required, fieldRaito, labelAlign } } = fieldItemProps;

    // TODO: Check lại xem vì sao không có label thì nó không render cả control luôn 
    if (label) {
      return (
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: fieldRaito ? fieldRaito : defaultFieldRaito,
          }}
          className='data-field-block'
        >
          <Box sx={{ gridRow: '1' }} className='data-filed-block--label'>
            <DataFieldLabel status={errorMessage ? 'error' : undefined} textAlign={labelAlign ? labelAlign : defaultFieldLabelAlign}>
              {label}
              {required ? <RequiredIcon>*</RequiredIcon> : null}
            </DataFieldLabel>
          </Box>
          <Box
            sx={{
              gridRow: '1',
              display: 'grid',
              width: '100%',
            }}
            className='data-filed-block--control'
          >
            {renderControlContainer()}
            <motion.div
              animate={errorMsgControls}
              initial="initial"
              variants={fieldMessageVariants}
            >
              <DataFieldMessage status='error'>{errorMessage}</DataFieldMessage>
            </motion.div>
            <DataFieldMessage status='warning'>{message}</DataFieldMessage>
          </Box>
        </Box>
      );
    } else {
      return (
        <Box sx={{ display: 'grid', }}>
          {renderControlContainer()}
        </Box>
      );
    }
  }

  return renderDataFieldBlock();

};

const fieldMessageVariants = {
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
      type: "spring",
      bounce: 0.2,
    },
  },
  exit: {
    opacity: 0,
    y: -50,
    transition: {
      duration: 0.2,
      type: "spring",
      bounce: 0.2,
    },
  },
  initial: {
    opacity: 0,
    y: -50
  }
};

/**
 * Handle the message based on the provided conditions and update the corresponding state.
 * @param {Function} setMessage - The state setter function for the message.
 * @param {Object} messageObj - The object containing the messages.
 * @param {string} fieldName - The name of the field.
 * @param {AnimationControls} controls - The controls for animation.
 */
const useMessageHandling = async (
  setMessage: React.Dispatch<React.SetStateAction<string | undefined>>,
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
