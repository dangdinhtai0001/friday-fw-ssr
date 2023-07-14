import * as React from 'react';
import Button from '@mui/base/Button';
import Input from '@mui/base/Input';
import { useContainerContext } from '@/package/naraka/searchable-container';
import { ContextHookValue } from '@/package/naraka/searchable-container/types';
import PaginationWrapper from '@/package/deva/pagination';

const PaginationBlock: React.FC = (props: any) => {
  const { context, contextApi }: ContextHookValue = useContainerContext();

  const { onNextPage, onPreviousPage, onGo2Page, onChangeItemsPerPage } = props;

  const [targetPage, setTargetPage] = React.useState(context.paginationInstance.currentPage);
  const [itemsPerPage, setItemsPerPage] = React.useState(context.paginationInstance.itemsPerPage);

  const handleOnNextPage = () => {
    onNextPage();
  };

  const handleOnPreviousPage = () => {
    onPreviousPage();
  };

  const handleOnGo2Page = () => {
    onGo2Page(targetPage);
  };

  const handleOnChangeItemsPerPage = () => {
    onChangeItemsPerPage(itemsPerPage);
  };

  return (
    <div>
      Pagination block
      <PaginationWrapper
        currentPage={context.paginationInstance.currentPage}
        pageSize={context.paginationInstance.itemsPerPage}
        totalCount={context.paginationInstance.totalItems}
        onPageChange={onGo2Page}
        onPageSizeChange={onChangeItemsPerPage}
      />
      <br />
      <Button onClick={handleOnNextPage}>next</Button>
      <Button onClick={handleOnPreviousPage}>prev</Button>
      <div>
        <label htmlFor="target_page" >Go to page:</label>
        <Input
          name="target_page"
          type="number"
          value={targetPage}
          onChange={(e) => { setTargetPage(parseInt(e.target.value)) }}
        ></Input>
        <Button onClick={handleOnGo2Page}>go to page</Button>
      </div>
      <div>
        <label htmlFor="items_per_page" >Items per page:</label>
        <Input
          name="items_per_page"
          type="number"
          value={itemsPerPage}
          onChange={(e) => { setItemsPerPage(parseInt(e.target.value)) }}
        ></Input>
        <Button onClick={handleOnChangeItemsPerPage}>Item per page</Button>
      </div>
    </div>
  );
};

export default PaginationBlock;
