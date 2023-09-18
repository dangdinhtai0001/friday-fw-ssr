import {
  forwardRef,
  ForwardedRef,
  useImperativeHandle,
} from 'react';
import {
  FilterChangedEvent,
  IAfterGuiAttachedParams,
} from 'ag-grid-community';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import {
  ITextFloatingFilterProps as IFloatingFilterProps,
  ITextFloatingFilterRef,
} from './types';
import ButtonWrapper from '@/package/deva/button/ButtonWrapper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  StyledFloatingFilterContainer,
  StyledDisplayContainer,
} from './StyledComponents';

import useFilter from '@/package/naraka/searchable-container-ext/data-block/filter/useFilter';
import { FilterCriteria } from '@/package/naraka/searchable-container/types';

import { textOperationSymbol } from '@/package/naraka/searchable-container-ext/data-block/constant';

function FloatingFilter(
  props: IFloatingFilterProps,
  ref: ForwardedRef<ITextFloatingFilterRef>
) {
  const { showParentFilter, column } = props;

  const { getDisplayedCriteriaAsString } = useFilter({ column });

  // expose AG Grid Filter Lifecycle callbacks
  useImperativeHandle(ref, () => {
    return {
      // Gets called every time the parent filter changes. Your floating
      // filter would typically refresh its UI to reflect the new filter
      // state. The provided parentModel is what the parent filter returns
      // from its getModel() method. The event is the FilterChangedEvent
      // that the grid fires.
      onParentModelChanged(
        parentModel: number | null,
        event: FilterChangedEvent
      ) { },

      // Gets called every time the popup is shown, after the GUI returned in
      // getGui is attached to the DOM. If the filter popup is closed and re-opened, this method is
      // called each time the filter is shown. This is useful for any logic that requires attachment
      // before executing, such as putting focus on a particular DOM element.
      afterGuiAttached(params?: IAfterGuiAttachedParams) { },
    };
  });

  return (
    <StyledFloatingFilterContainer className="styled-floating-filter-container">
      <StyledDisplayContainer className="styled-display-container">
        {getDisplayedCriteriaAsString()}
      </StyledDisplayContainer>
      <ButtonWrapper
        width="fit-content"
        animationDisabled
        icon={<FontAwesomeIcon icon={faFilter} />}
        onClick={() => {
          showParentFilter();
        }}
      />
    </StyledFloatingFilterContainer>
  );
}

export default forwardRef(FloatingFilter);
