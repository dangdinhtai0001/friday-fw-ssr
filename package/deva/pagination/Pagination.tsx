import * as React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faAnglesLeft, faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import { IPaginationProps } from './type.d';
import { StyledPageControlContainer, StyledPageNavigationContainer, StyledPageNumber, StyledPaginationRoot, StyledTotalItemCountContainer } from './StyledElement';
import usePagination, { DOTS } from './usePagination';
import { SelectWrapper, ISelectWrapperProps } from '@/package/deva/select'

export default function Pagination(props: IPaginationProps) {

  const { currentPage, pageSize, totalCount, defaultCurrentPage = 1, defaultPageSize = 10, siblingCount = 2 } = props;

  const { paginationRange, shouldDisplayJumpNext, shouldDisplayJumpPrevious, shouldDisplayNext, shouldDisplayPrevious } = usePagination({ totalCount, pageSize, siblingCount, currentPage });

  const handleOnPageChange = (pageNumber: string | number) => {
    console.log('pageNumber', pageNumber);
  }

  const handleOnChangePageSize = (value: number): void | Promise<void> => {

  }

  return (
    <StyledPaginationRoot>
      {/* ------------------------------------------------------------------------------------------ */}
      {/* TODO: SỬ dụng i18n cho total item. */}
      <StyledTotalItemCountContainer> Tổng {totalCount} </StyledTotalItemCountContainer>
      {/* ------------------------------------------------------------------------------------------ */}
      <StyledPageNavigationContainer>
        {shouldDisplayPrevious && (
          <motion.div whileTap={{ scale: pageNumberHoverScale }} >
            <StyledPageNumber>
              <FontAwesomeIcon icon={faAngleLeft} />
            </StyledPageNumber>
          </motion.div>
        )}
        {shouldDisplayJumpPrevious && (
          <motion.div whileTap={{ scale: pageNumberHoverScale }} >
            <StyledPageNumber>
              <FontAwesomeIcon icon={faAnglesLeft} />
            </StyledPageNumber>
          </motion.div>
        )}
        {/* -------------- */}
        {paginationRange?.map((page, index) => {
          if (page === DOTS) {
            return (
              <div key={index}>{page}</div>
            );
          }

          return (
            <motion.div key={index} whileTap={{ scale: pageNumberHoverScale }} onClick={() => { handleOnPageChange(page); }}>
              <StyledPageNumber isCurrentPage={page === currentPage}  >
                {page}
              </StyledPageNumber>
            </motion.div>
          );
        })}
        {/* -------------- */}
        {shouldDisplayJumpNext && (
          <motion.div whileTap={{ scale: pageNumberHoverScale }} >
            <StyledPageNumber>
              <FontAwesomeIcon icon={faAnglesRight} />
            </StyledPageNumber>
          </motion.div>
        )}
        {shouldDisplayNext && (
          <motion.div whileTap={{ scale: pageNumberHoverScale }} >
            <StyledPageNumber>
              <FontAwesomeIcon icon={faAngleRight} />
            </StyledPageNumber>
          </motion.div>
        )}
      </StyledPageNavigationContainer>
      {/* ------------------------------------------------------------------------------------------ */}
      <StyledPageControlContainer>
        <SelectWrapper
          onChange={handleOnChangePageSize}
          multiple={false}
          value={pageSize}
          disabled={false}
          readOnly={false}
          hidden={false}
          itemDefs={[
            { label: "1", value: 1 },
            { label: "2", value: 2 },
            { label: "10", value: 10 },
          ]}
        ></SelectWrapper>
      </StyledPageControlContainer>
    </StyledPaginationRoot>
  );
}

const pageNumberHoverScale = 0.7;

