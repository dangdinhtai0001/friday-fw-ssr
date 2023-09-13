import OptionGroup from '@mui/base/OptionGroup';
import { IOptionGroupWrapperProps } from './types.d';
import {
  StyledOptionGroupLabel,
  StyledOptionGroupList,
  StyledOptionGroupRoot,
} from './StyledElements';

export default function OptionGroupWrapper(
  props: IOptionGroupWrapperProps
) {
  const slots: IOptionGroupWrapperProps['slots'] = {
    label: StyledOptionGroupLabel,
    list: StyledOptionGroupList,
    root: StyledOptionGroupRoot,
  };

  return <OptionGroup {...props} slots={slots} />;
}
