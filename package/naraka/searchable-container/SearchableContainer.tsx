import React from 'react';
import { useContainerContext } from './container-context/useContainerContext';

const SearchableContainer: React.FC = () => {
  const { context } = useContainerContext();

  console.log(context);

  return (
    <div>
      SearchableContainer
    </div>
  );
};

export default SearchableContainer;
