import * as React from 'react';
import { IDataFieldBlockProps, IFieldItemProps, IDataFieldLabelProps, DataFieldLabel_Status, DataFieldLabel_TextAlign } from '../types';
import { useContainerContext } from '../context/useContainerContext';
import FieldItem from '../items/DataFieldItem';
import Box from '@mui/system/Box';
import { styled } from '@mui/system';
import { useController, useFormContext } from 'react-hook-form';

export default function DataFieldBlock(props: IDataFieldBlockProps) {
  const { fieldItemProps } = props;
  const { context } = useContainerContext();
  const { formState: { errors } } = useController(fieldItemProps);

  const renderControlContainer = () => {
    return <FieldItem {...fieldItemProps}></FieldItem>
  };

  const renderDataFieldBlock = () => {
    let { fieldDef: { label } } = fieldItemProps;

    let status: DataFieldLabel_Status | undefined;
    if (errors && errors.hasOwnProperty(fieldItemProps.name)) {
      status = 'error'
    }

    if (label) {
      return (
        <Box sx={{ display: 'grid', gridTemplateColumns: '50% 50%', columnGap: 1 }}>
          <Box sx={{ gridRow: '1' }}>
            <DataFieldLabel status={status}>{label}</DataFieldLabel>
          </Box>
          <Box sx={{ gridRow: '1' }}>
            {renderControlContainer()}
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
  shouldForwardProp: (prop) => prop !== 'status'
})<IDataFieldLabelProps>(({ theme, status }) => ({
  color: status === 'error' ? theme.palette.error.main :
    status === 'warning' ? theme.palette.warning.main : 'inherit',
  textAlign: 'left'
}));
