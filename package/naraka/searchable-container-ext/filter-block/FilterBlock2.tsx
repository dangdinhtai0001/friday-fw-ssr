import { IFilterBlockExtProps } from './types.d';
import { StyledFilterBlockContainer, StyledFilterBlockHeader, StyledFilterBlockContent } from './StyledElements'

function FilterBlock(props: IFilterBlockExtProps) {
  return (
    <StyledFilterBlockContainer className='styled-filter-block'>
      <StyledFilterBlockHeader className='styled-filter-block--header'>
        FilterBlock2 header
      </StyledFilterBlockHeader>
      <StyledFilterBlockContent className='styled-filter-block--content'>
        FilterBlock2 content
      </StyledFilterBlockContent>
    </StyledFilterBlockContainer>
  );
}

export default FilterBlock;