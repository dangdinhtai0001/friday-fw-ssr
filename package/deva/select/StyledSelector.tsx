import Select from '@mui/base/Select';
import styled from '@mui/system/styled';
import OptionGroup from '@mui/base/OptionGroup';
import Option from '@mui/base/Option';

export const StyledSelect = styled(Select, {
  shouldForwardProp: prop => prop !== 'itemDefs',
})(() => ({

}));

export const StyledOptionGroup = styled(OptionGroup, {
  shouldForwardProp: prop => prop !== 'itemDefs',
})(() => ({

}));

export const StyledOption = styled(Option, {
  shouldForwardProp: prop => prop !== 'itemDefs',
})(() => ({

}));