import * as React from 'react';
import { IDataFieldBlockProps, IFieldItemProps, IDataFieldLabelProps, DataFieldLabel_Status, DataFieldLabel_TextAlign, IDataFieldMessageProps } from '../types';
import { useContainerContext } from '../context/useContainerContext';
import FieldItem from '../items/DataFieldItem';
import Box from '@mui/system/Box';
import { fontSize, styled } from '@mui/system';
import { useController, useFormContext } from 'react-hook-form';
import { useAnimate } from "framer-motion";
import useAsyncEffect from "@n1ru4l/use-async-effect";

export default function DataFieldBlock(props: IDataFieldBlockProps) {
  const { fieldItemProps } = props;
  const { context } = useContainerContext();
  const { formState: { errors } } = useController(fieldItemProps);
  const [scope, animate] = useAnimate();

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

        animate(scope.current, { opacity: [0, 1], x: [-50, 0] }, { duration: 0.2 });
      }

      else {
        if (scope.current !== null) {
          yield animate(scope.current, { opacity: [1, 0], x: [0, 50] }, { duration: 0.2 })
        }
        setFieldStatus(undefined);
        setFieldMesage(undefined);
      }

    } catch (error) {
      console.error('Error occurred:', error);
    }
  }, [errors]);

  const renderDataFieldBlock = () => {
    let { fieldDef: { label, required } } = fieldItemProps;

    if (label) {
      return (
        <Box sx={{ display: 'grid', gridTemplateColumns: '30% 70%', columnGap: 1 }}>
          <Box sx={{ gridRow: '1' }}>
            <DataFieldLabel status={fieldStatus} textAlign={'left'}>
              {label}
              {required ? <RequiredIcon>*</RequiredIcon> : null}
            </DataFieldLabel>
          </Box>
          <Box sx={{ gridRow: '1', display: 'grid', gap: 0.3 }}>
            {renderControlContainer()}
            <DataFieldMessage ref={scope} status={fieldStatus}>{fieldMesage}</DataFieldMessage>
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
