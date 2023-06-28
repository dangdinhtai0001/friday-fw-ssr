import * as React from 'react';
import { Box } from '@mui/system';
export interface ITypographyProps {
}

export default function Typography(props: ITypographyProps) {
  return (
    <div>
      <div className='display'>Display</div>
      <div className='title-large'>Title Large</div>
      <div className='title-0'>Title 0</div>
      <div className='title-1'>Title 1</div>
      <div className='title-2'>Title 2</div>
      <div className='subtitle-0'>Subtitle 0: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur</div>
      <div className='subtitle-1'>Subtitle 1: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur</div>
      <div className='body-0'>Body 0: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur</div>
      <div className='body-1'>Body 1: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur</div>
      <div className='button'>button</div>
      <div className='caption'>caption: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur</div>


      <Box sx={{
        width: 100,
        height: 100,
        bgcolor: 'primary.main',
      }} className='corner-radius-circle' />
    </div>
  );
}
