import { useMemo, useState } from 'react';
import {
  IUsePaginationProps,
  IUsePaginationReturns,
} from './type.d';

/**
 * Hook sử dụng cho phân trang.
 * @param {IUsePaginationProps} props - Các thuộc tính của phân trang.
 * @returns {number[]} - Mảng chứa các số trang cần hiển thị.
 */
export default function usePagination(
  props: IUsePaginationProps
): IUsePaginationReturns {
  const { totalCount, pageSize, siblingCount, currentPage } = props;

  const totalPageCount = Math.ceil(totalCount / pageSize);

  const shouldDisplayPrevious = currentPage > 1;
  const shouldDisplayNext = currentPage < totalPageCount;
  const shouldDisplayJumpNext =
    currentPage + 1 * siblingCount <= totalPageCount;
  const shouldDisplayJumpPrevious =
    currentPage - 1 * siblingCount >= 1;

  const paginationRange = useMemo(() => {
    // Số lượng trang được tính bằng tổng số trang lề + trang đầu + trang cuối + trang hiện tại + 2*DOTS
    const totalPageNumbers = siblingCount + 5;

    /**
     * Trường hợp 1:
     * Nếu số lượng trang nhỏ hơn số trang chúng ta muốn hiển thị trong thành phần phân trang,
     * chúng ta trả về khoảng [1..totalPageCount]
     */
    if (totalPageNumbers >= totalPageCount) {
      return range(1, totalPageCount);
    }

    /**
     * Tính toán chỉ số của sibling trái và sibling phải và đảm bảo chúng nằm trong khoảng 1 đến totalPageCount
     */
    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(
      currentPage + siblingCount,
      totalPageCount
    );

    /**
     * Chúng ta không hiển thị dấu chấm khi chỉ có một số trang được chèn giữa các cực trị của sibling và các giới hạn trang, tức là 1 và totalPageCount. Do đó, chúng ta sử dụng leftSiblingIndex > 2 và rightSiblingIndex < totalPageCount - 2
     */
    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots =
      rightSiblingIndex < totalPageCount - 2;

    const firstPageIndex = 1;
    const lastPageIndex = totalPageCount;

    /**
     * Trường hợp 2: Không hiển thị dấu chấm trái, nhưng hiển thị dấu chấm phải
     */
    if (!shouldShowLeftDots && shouldShowRightDots) {
      let leftItemCount = 3 + 2 * siblingCount;
      let leftRange = range(1, leftItemCount);

      return [...leftRange, DOTS, totalPageCount];
    }

    /**
     * Trường hợp 3: Không hiển thị dấu chấm phải, nhưng hiển thị dấu chấm trái
     */
    if (shouldShowLeftDots && !shouldShowRightDots) {
      let rightItemCount = 3 + 2 * siblingCount;
      let rightRange = range(
        totalPageCount - rightItemCount + 1,
        totalPageCount
      );
      return [firstPageIndex, DOTS, ...rightRange];
    }

    /**
     * Trường hợp 4: Hiển thị cả dấu chấm trái và dấu chấm phải
     */
    if (shouldShowLeftDots && shouldShowRightDots) {
      let middleRange = range(leftSiblingIndex, rightSiblingIndex);
      return [
        firstPageIndex,
        DOTS,
        ...middleRange,
        DOTS,
        lastPageIndex,
      ];
    }
  }, [totalCount, pageSize, siblingCount, currentPage]);

  return {
    paginationRange,
    shouldDisplayPrevious,
    shouldDisplayNext,
    shouldDisplayJumpNext,
    shouldDisplayJumpPrevious,
    totalPageCount,
  };
}

/**
 * Tạo một mảng chứa các số từ start đến end.
 * @param {number} start - Giá trị số bắt đầu của mảng.
 * @param {number} end - Giá trị số kết thúc của mảng.
 * @returns {number[]} - Mảng chứa các số từ start đến end.
 */
const range = (start: number, end: number) => {
  let length = end - start + 1;
  /*
    Tạo một mảng có độ dài nhất định và đặt các phần tử trong đó từ giá trị start đến giá trị end.
  */
  return Array.from({ length }, (_, idx) => idx + start);
};

export const DOTS = '...';
