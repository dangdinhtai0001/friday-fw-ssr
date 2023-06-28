import * as React from 'react';
import { Box, useTheme } from '@mui/system';
export interface ITypographyProps {
}

export default function Typography(props: ITypographyProps) {
  const theme = useTheme<any>();

  return (
    <div>
      <div className='display'>Display</div>
      <div className='large-title'>Large title</div>
      <div className='title-1'>Title 1</div>
      <div className='title-2'>Title 2</div>
      <div className='title-3'>Title 3</div>
      <div className='subtitle-1'>Subtitle 1: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur</div>
      <div className='subtitle-2-stronger'>Subtitle 2: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur</div>
      <div className='subtitle-2'>Subtitle 2: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur</div>
      <div className='body-2'>Body 2: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur</div>
      <div className='body-1-stronger'>Body 1: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur</div>
      <div className='body-1-strong'>Body 1: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur</div>
      <div className='body-1'>Body 1: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur</div>
      <div className='caption-1-stronger'>Caption 1: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur</div>
      <div className='caption-1-strong'>Caption 1: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur</div>
      <div className='caption-1'>Caption 1: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur</div>
      <div className='caption-1'>Caption 1: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur</div>
      <div className='caption-2-strong'>Caption 2: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur</div>
      <div className='caption-2'>Caption 2: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur</div>

      <br></br>
      <div className='title-1'>Corner radius</div>
      <Box sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(6, 1fr)',
        justifyContent: 'center',
        alignItems: 'center',
        bgcolor: 'background.paper',
        padding: '10px',
        columnGap: '10px',
      }}>
        <Box
          sx={{
            width: '100%',
            height: 50,
            borderRadius: theme.components.cornerRadius.none,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            bgcolor: 'primary.main',
          }}
        >
          corner-radius-none
        </Box>
        <Box
          sx={{
            width: '100%',
            height: 50,
            borderRadius: theme.components.cornerRadius.small,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            bgcolor: 'primary.main',
          }}
        >
          corner-radius-small
        </Box>
        <Box
          sx={{
            width: '100%',
            height: 50,
            borderRadius: theme.components.cornerRadius.medium,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            bgcolor: 'primary.main',
          }}
        >
          corner-radius-medium
        </Box>
        <Box
          sx={{
            width: '100%',
            height: 50,
            borderRadius: theme.components.cornerRadius.large,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            bgcolor: 'primary.main',
          }}
        >
          corner-radius-large
        </Box>
        <Box
          sx={{
            width: '100%',
            height: 50,
            borderRadius: theme.components.cornerRadius.xLarge,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            bgcolor: 'primary.main',
          }}
        >
          corner-radius-xlarge
        </Box>
        <Box
          sx={{
            width: 70,
            height: 70,
            borderRadius: theme.components.cornerRadius.circle,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            bgcolor: 'primary.main',
          }}
        >
          circle
        </Box>
      </Box>

      <br></br>
      <div className='title-1'>Stroke</div>
      <Box sx={{
        display: 'grid',
        columnGap: '10px',
        height: 60,
        gridTemplateColumns: 'repeat(5, 1fr)',
        justifyContent: 'center',
        alignItems: 'center',
        bgcolor: 'background.paper',
        padding: '10px'
      }}>
        <Box
          sx={{
            width: '100%',
            height: '100%',
            borderRadius: theme.components.cornerRadius.medium,
            borderWidth: theme.components.strokeWidth.none,
            borderStyle: 'solid',
            borderColor: 'secondary.contrastText',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            bgcolor: 'primary.main',
          }}
        >
          stroke-width-none
        </Box>
        <Box
          sx={{
            width: '100%',
            height: '100%',
            borderRadius: theme.components.cornerRadius.medium,
            borderWidth: theme.components.strokeWidth.thin,
            borderStyle: 'solid',
            borderColor: 'secondary.contrastText',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            bgcolor: 'primary.main',
          }}
        >
          stroke-width-thin
        </Box>
        <Box
          sx={{
            width: '100%',
            height: '100%',
            borderRadius: theme.components.cornerRadius.medium,
            borderWidth: theme.components.strokeWidth.thick,
            borderStyle: 'solid',
            borderColor: 'secondary.contrastText',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            bgcolor: 'primary.main',
          }}
        >
          stroke-width-thick
        </Box>
        <Box
          sx={{
            width: '100%',
            height: '100%',
            borderRadius: theme.components.cornerRadius.medium,
            borderWidth: theme.components.strokeWidth.thicker,
            borderStyle: 'solid',
            borderColor: 'secondary.contrastText',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            bgcolor: 'primary.main',
          }}
        >
          stroke-width-thicker
        </Box>
        <Box
          sx={{
            width: '100%',
            height: '100%',
            borderRadius: theme.components.cornerRadius.medium,
            borderWidth: theme.components.strokeWidth.thickest,
            borderStyle: 'solid',
            borderColor: 'secondary.contrastText',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            bgcolor: 'primary.main',
          }}
        >
          stroke-width-thickest
        </Box>
      </Box>
    </div>
  );
}
