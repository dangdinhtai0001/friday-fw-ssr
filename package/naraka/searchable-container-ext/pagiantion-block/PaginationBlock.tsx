import * as React from 'react';
import PaginationWrapper from '@/package/deva/pagination';
import { useContainerContext } from '@/package/naraka/searchable-container';
import { ContextHookValue } from '@/package/naraka/searchable-container/types';
import { IPaginationBlockProps } from './types.d';
import { StyledPaginationBlockRoot } from './StyledElements'

export default function PaginationBlock(props: IPaginationBlockProps) {

  const { onGo2Page, onChangeItemsPerPage } = props;

  const { context, contextApi }: ContextHookValue = useContainerContext();

  return (
    <StyledPaginationBlockRoot>
      <PaginationWrapper
        currentPage={context.paginationInstance.currentPage}
        pageSize={context.paginationInstance.itemsPerPage}
        totalCount={context.paginationInstance.totalItems}
        onPageChange={onGo2Page}
        onPageSizeChange={onChangeItemsPerPage}
      />
    </StyledPaginationBlockRoot>
  );
}
