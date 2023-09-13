import { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleLeft,
  faAngleRight,
  faAnglesLeft,
  faAnglesRight,
} from '@fortawesome/free-solid-svg-icons';
import { IPaginationWrapperProps } from './type';
import {
  StyledPageControlContainer,
  StyledPageNavigationContainer,
  StyledPageNumber,
  StyledPaginationRoot,
  StyledTotalItemCountContainer,
  StyledPaginationText,
} from './StyledElement';
import usePagination, { DOTS } from './usePagination';
import SelectWrapper, {
  ISelectWrapperProps,
} from '@/package/deva/select';
import InputNumberWrapper, {
  IInputNumberWrapperProps,
} from '@/package/deva/input-number';

export default function PaginationWrapper(
  props: IPaginationWrapperProps
) {
  const {
    currentPage,
    pageSize,
    totalCount,
    defaultCurrentPage = 1,
    defaultPageSize = 10,
    siblingCount = 2,
    onPageChange,
    onPageSizeChange,
  } = props;

  const {
    paginationRange,
    totalPageCount,
    shouldDisplayJumpNext,
    shouldDisplayJumpPrevious,
    shouldDisplayNext,
    shouldDisplayPrevious,
  } = usePagination({
    totalCount,
    pageSize,
    siblingCount,
    currentPage,
  });

  const [jumperPage, setJumperPage] = useState<number>(1);

  const handleOnPageChange = (pageNumber: string | number) => {
    onPageChange?.(pageNumber);
  };

  const handleOnChangePageSize = (
    value: number
  ): void | Promise<void> => {
    onPageSizeChange?.(value);
  };

  const handleOnChangeJumpPage = (
    value: number
  ): void | Promise<void> => {
    setJumperPage(value);
    onPageChange?.(Number(value));
  };

  return (
    <StyledPaginationRoot>
      {/* ------------------------------------------------------------------------------------------ */}
      {/* TODO: SỬ dụng i18n cho total item. */}
      <StyledTotalItemCountContainer>
        {' '}
        Tổng {totalCount}{' '}
      </StyledTotalItemCountContainer>
      {/* ------------------------------------------------------------------------------------------ */}
      <StyledPageNavigationContainer>
        {shouldDisplayPrevious && (
          <motion.div
            whileTap={{ scale: pageNumberHoverScale }}
            onClick={() => {
              handleOnPageChange(currentPage - 1);
            }}
          >
            <StyledPageNumber>
              <FontAwesomeIcon icon={faAngleLeft} />
            </StyledPageNumber>
          </motion.div>
        )}
        {shouldDisplayJumpPrevious && (
          <motion.div
            whileTap={{ scale: pageNumberHoverScale }}
            onClick={() => {
              handleOnPageChange(currentPage - siblingCount);
            }}
          >
            <StyledPageNumber>
              <FontAwesomeIcon icon={faAnglesLeft} />
            </StyledPageNumber>
          </motion.div>
        )}
        {/* -------------- */}
        {paginationRange?.map((page, index) => {
          if (page === DOTS) {
            return (
              <StyledPaginationText key={index}>
                {page}
              </StyledPaginationText>
            );
          }

          return (
            <motion.div
              key={index}
              whileTap={{ scale: pageNumberHoverScale }}
              onClick={() => {
                handleOnPageChange(page);
              }}
            >
              <StyledPageNumber isCurrentPage={page === currentPage}>
                {page}
              </StyledPageNumber>
            </motion.div>
          );
        })}
        {/* -------------- */}
        {shouldDisplayJumpNext && (
          <motion.div
            whileTap={{ scale: pageNumberHoverScale }}
            onClick={() => {
              handleOnPageChange(currentPage + siblingCount);
            }}
          >
            <StyledPageNumber>
              <FontAwesomeIcon icon={faAnglesRight} />
            </StyledPageNumber>
          </motion.div>
        )}
        {shouldDisplayNext && (
          <motion.div
            whileTap={{ scale: pageNumberHoverScale }}
            onClick={() => {
              handleOnPageChange(currentPage + 1);
            }}
          >
            <StyledPageNumber>
              <FontAwesomeIcon icon={faAngleRight} />
            </StyledPageNumber>
          </motion.div>
        )}
      </StyledPageNavigationContainer>
      {/* ------------------------------------------------------------------------------------------ */}
      <StyledPageControlContainer>
        <StyledPaginationText>Go to page: </StyledPaginationText>
        <InputNumberWrapper
          hidden={false}
          onChange={handleOnChangeJumpPage}
          value={jumperPage}
          disabled={false}
          readOnly={false}
          type={'number'}
          min={1}
          max={totalPageCount}
          width="fit-content"
        />
        <SelectWrapper
          onChange={handleOnChangePageSize}
          multiple={false}
          value={pageSize}
          disabled={false}
          readOnly={false}
          hidden={false}
          itemDefs={[
            { label: '10', value: 10 },
            { label: '20', value: 20 },
            { label: '30', value: 30 },
          ]}
          toggleWidth="4rem"
        />
        {/* TODO: Dùng i18n thay thế / page (item per pages)  */}
        <StyledPaginationText> /trang</StyledPaginationText>
      </StyledPageControlContainer>
    </StyledPaginationRoot>
  );
}

const pageNumberHoverScale = 0.7;
