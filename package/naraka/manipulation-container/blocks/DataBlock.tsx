import * as React from 'react';
import { IDataFieldBlockProps, IDataFieldLabelProps, DataFieldLabel_Status, IDataFieldMessageProps } from '../types';
import { useContainerContext } from '../context/useContainerContext';
import FieldItem from '../items/DataFieldItem';
import Box from '@mui/system/Box';
import { styled } from '@mui/system';
import { useController } from 'react-hook-form';
import { motion, useAnimation, AnimationControls } from "framer-motion";
import useAsyncEffect from "@n1ru4l/use-async-effect";

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
      console.log("hehehehe", messageObj[fieldName]?.message as string)
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


export default function DataFieldBlock(props: IDataFieldBlockProps) {
  const { fieldItemProps } = props;
  const { context: { fieldWarning, fieldInfo } } = useContainerContext();
  const { formState: { errors } } = useController(fieldItemProps);
  const controls = useAnimation();

  const [errorMessage, setErrorMessage] = React.useState<string | undefined>();
  const [infoMessage, setInfoMessage] = React.useState<string | undefined>();
  const [warningMessage, setWarningMessage] = React.useState<string | undefined>();

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
    useMessageHandling(setErrorMessage, errors, fieldItemProps.name, controls);
  }, [errors]);


  /**
   * Trigger the change event for fieldWarning, which will activate animation and update warning message.
   * @param {Function} onCancel - The cancel function for the effect.
   * @param {Function} cast - The generator function for the effect.
   * @param {Object} fieldWarning - The object containing warning messages.
   * @param {string} fieldName - The name of the field.
   * @param {Object} controls - The controls for animation.
   */
  useAsyncEffect(function* (onCancel, cast) {
    useMessageHandling(setWarningMessage, fieldWarning, fieldItemProps.name, controls);
  }, [fieldWarning]);


  /**
   * Trigger the change event for fieldInfo, which will activate animation and update info message.
   * @param {Function} onCancel - The cancel function for the effect.
   * @param {Function} cast - The generator function for the effect.
   * @param {Object} fieldInfo - The object containing info messages.
   * @param {string} fieldName - The name of the field.
   * @param {Object} controls - The controls for animation.
   */
  useAsyncEffect(function* (onCancel, cast) {
    useMessageHandling(setInfoMessage, fieldInfo, fieldItemProps.name, controls);
  }, [fieldInfo]);


  const renderDataFieldBlock = () => {
    let { fieldDef: { label, required } } = fieldItemProps;

    if (label) {
      return (
        <Box sx={{ display: 'grid', gridTemplateColumns: '30% 70%', columnGap: 1 }}>
          <Box sx={{ gridRow: '1' }}>
            <DataFieldLabel status={errorMessage ? 'error' : warningMessage ? 'warning' : undefined} textAlign={'left'}>
              {label}
              {required ? <RequiredIcon>*</RequiredIcon> : null}
            </DataFieldLabel>
          </Box>
          <Box sx={{ gridRow: '1', display: 'grid', gap: 0.3 }}>
            {renderControlContainer()}
            <motion.div
              animate={controls}
              initial="initial"
              variants={fieldMessageVariants}
            >
              {/* {errorMessage && <DataFieldMessage status='error'>{errorMessage}</DataFieldMessage>}
              {warningMessage && <DataFieldMessage status='warning'>{warningMessage}</DataFieldMessage>}
              {infoMessage && <DataFieldMessage>{infoMessage}</DataFieldMessage>} */}
              <DataFieldMessage status='error'>{errorMessage}</DataFieldMessage>
              <DataFieldMessage status='warning'>{warningMessage}</DataFieldMessage>
              <DataFieldMessage>{infoMessage}</DataFieldMessage>
            </motion.div>
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

  return (
    <>
      {renderDataFieldBlock()}
    </>
  );
};


const DataFieldLabel = styled('div', {
  // Configure which props should be forwarded on DOM
  shouldForwardProp: (prop) => prop !== 'status' && prop !== 'textAlign'
})<IDataFieldLabelProps>(({ theme, status, textAlign }) => ({
  color: status === 'error' ? theme.palette.error.main :
    status === 'warning' ? theme.palette.warning.main : 'inherit',
  textAlign: textAlign
}));

const DataFieldMessage = styled('div', {
  // Configure which props should be forwarded on DOM
  shouldForwardProp: (prop) => prop !== 'status'
})<IDataFieldMessageProps>(({ theme, status }) => ({
  color: status === 'error' ? theme.palette.error.main :
    status === 'warning' ? theme.palette.warning.main : 'inherit',
}));

const RequiredIcon = styled('span', {})(({ theme }) => ({
  color: theme.palette.error.main,
  fontSize: '1rem',
  marginLeft: '0.1rem'
}));
