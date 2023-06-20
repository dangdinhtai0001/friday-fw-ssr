import * as React from 'react';
import { IDataFieldBlockProps, IFieldItemProps, IDataFieldLabelProps, DataFieldLabel_Status, DataFieldLabel_TextAlign, IDataFieldMessageProps } from '../types';
import { useContainerContext } from '../context/useContainerContext';
import FieldItem from '../items/DataFieldItem';
import Box from '@mui/system/Box';
import { styled } from '@mui/system';
import { useController, useFormContext } from 'react-hook-form';
import { useAnimate, motion, useAnimation } from "framer-motion";
import useAsyncEffect from "@n1ru4l/use-async-effect";

const shakeAnimation = {
  opacity: [0, 1],
  y: [-50, 0],
  transition: {
    duration: 0.2,
    type: "spring",
    bounce: 0.2,
  },
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

export default function DataFieldBlock(props: IDataFieldBlockProps) {
  const { fieldItemProps } = props;
  const { context } = useContainerContext();
  const { formState: { errors } } = useController(fieldItemProps);
  const controls = useAnimation();

  const [fieldStatus, setFieldStatus] = React.useState<DataFieldLabel_Status | undefined>();
  const [fieldMesage, setFieldMesage] = React.useState<string | undefined>();

  const renderControlContainer = () => {
    return <FieldItem {...fieldItemProps}></FieldItem>
  };


  useAsyncEffect(function* (onCancel, cast) {
    try {
      if (errors && errors.hasOwnProperty(fieldItemProps.name)) {
        setFieldStatus('error');
        setFieldMesage(errors[fieldItemProps.name]?.message as string);

        controls.start('animate'); // Kích hoạt animation
      }

      else {
        yield controls.start('exit');

        setFieldStatus(undefined);
        setFieldMesage(undefined);
      }

    } catch (error) {
      console.error('Error occurred:', error);
    }
  }, [errors]);

  const renderDataFieldBlock = () => {
    let { fieldDef: { label } } = fieldItemProps;

    if (label) {
      return (
        <Box sx={{ display: 'grid', gridTemplateColumns: '30% 70%', columnGap: 1 }}>
          <Box sx={{ gridRow: '1' }}>
            <DataFieldLabel status={fieldStatus} textAlign={'left'}>{label}</DataFieldLabel>
          </Box>
          <Box sx={{ gridRow: '1', display: 'grid', gap: 0.3 }}>
            {renderControlContainer()}
            <motion.div
              animate={controls}
              initial="initial"
              variants={fieldMessageVariants}
            >
              <DataFieldMessage status={fieldStatus}>
                {fieldMesage}
              </DataFieldMessage>
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
