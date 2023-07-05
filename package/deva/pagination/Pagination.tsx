import * as React from 'react';
import { motion } from 'framer-motion';
import { IPaginationProps } from './type.d';
import { StyledPageNavigationContainer, StyledPageNumber, StyledPaginationRoot } from './StyledElement';
import usePagination, { DOTS } from './usePagination';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faAnglesLeft, faAnglesRight } from '@fortawesome/free-solid-svg-icons';

export default function Pagination(props: IPaginationProps) {

  const { currentPage, pageSize, totalCount, defaultCurrentPage = 1, defaultPageSize = 10, siblingCount = 1 } = props;

  const paginationRange = usePagination({ totalCount, pageSize, siblingCount, currentPage });

  const handleOnPageChange = (pageNumber: string | number) => {
    console.log('pageNumber', pageNumber);
  }

  return (
    <StyledPaginationRoot>
      <div>Pagination 1 </div>
      <StyledPageNavigationContainer>
        <motion.div whileTap={{ scale: pageNumberHoverScale }} >
          <StyledPageNumber>
            <FontAwesomeIcon icon={faAngleLeft} />
          </StyledPageNumber>
        </motion.div>
        <motion.div whileTap={{ scale: pageNumberHoverScale }} >
          <StyledPageNumber>
            <FontAwesomeIcon icon={faAnglesLeft} />
          </StyledPageNumber>
        </motion.div>
        {/* -------------- */}
        {paginationRange?.map((page, index) => (
          <motion.div key={index} whileTap={{ scale: pageNumberHoverScale }} >
            <StyledPageNumber isCurrentPage={page === currentPage} onClick={() => { handleOnPageChange(page); }} >
              {page}
            </StyledPageNumber>
          </motion.div>
        ))}
        {/* -------------- */}
        <motion.div whileTap={{ scale: pageNumberHoverScale }} >
          <StyledPageNumber>
            <FontAwesomeIcon icon={faAngleRight} />
          </StyledPageNumber>
        </motion.div>
        <motion.div whileTap={{ scale: pageNumberHoverScale }} >
          <StyledPageNumber>
            <FontAwesomeIcon icon={faAnglesRight} />
          </StyledPageNumber>
        </motion.div>
      </StyledPageNavigationContainer>
      <div>Pagination 3 </div>
    </StyledPaginationRoot>
  );
}

const pageNumberHoverScale = 0.7;

