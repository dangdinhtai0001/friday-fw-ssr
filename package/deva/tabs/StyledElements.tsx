import styled from '@mui/system/styled';
import Tabs from '@mui/base/Tabs';
import TabsList from '@mui/base/TabsList';
import Tab, { TabOwnerState } from '@mui/base/Tab';
import TabPanel from '@mui/base/TabPanel';
import { IDefaultTheme } from '@/package/preta/types';
import { IStyledTabUnderlineProps, IStyledTabProps } from './types.d';
import { defaultComponentContainer, typographyCaption1Strong, typographyCaption2 } from '@/package/preta/styled-shared';

export const StyledTabs = styled(Tabs, {})(({ theme }: { theme?: IDefaultTheme }) => ({
  height: '100%',
}));

export const StyledTabsList = styled(TabsList, {})(({ theme }: { theme?: IDefaultTheme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'start',
}));

export const StyledTab = styled(Tab, {})<IStyledTabProps>(({ theme, disabled }: IStyledTabProps) => ({
  ...defaultComponentContainer({ theme, noneBorder: true }),
  width: 'fit',
  cursor: disabled ? 'not-allowed' : 'pointer',
  color: disabled ? theme?.palette?.text?.disabled : theme?.palette?.text?.primary,
}));

export const StyledTabPanel = styled(TabPanel, {})(({ theme }: { theme?: IDefaultTheme }) => ({
  border: '3px solid red',
  height: '100%',

  overflow: 'auto',
}));

// --------------------

export const StyledTabUnderline = styled('div', {})<IStyledTabUnderlineProps>(({ theme }: IStyledTabUnderlineProps) => ({
  bottom: '-1px',
  left: '0',
  right: 0,
  height: '3px',
  background: theme?.palette?.primary?.main,
}
));

