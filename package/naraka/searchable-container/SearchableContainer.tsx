import React from 'react';
import { useContainerContext } from './container-context/useContainerContext';
import { SearchableContainerType, ContainerContextType } from './types'
// panel import
import { FilterPanel } from './panels';


let mounted = false;
let initialized = false;

const SearchableContainer: React.FC<SearchableContainerType.SearchableContainerProps> = (props: SearchableContainerType.SearchableContainerProps) => {

  const { } = props;

  const { context, helper }: ContainerContextType.ContextHookValue = useContainerContext();

  React.useEffect(() => {
    mounted = true;
    // Hàm này sẽ chỉ chạy khi component đã mount vào
    if (!initialized) {
      helper.createContextFromProps(props);
      initialized = true;
    }
    return () => {
      // Hàm này sẽ chỉ chạy khi component unmount khỏi DOM
      // Thực hiện các hành động trước khi component unmount ở đây
      mounted = false;
    };
  }, []);

  console.log(context)

  return (
    <div>
      SearchableContainer
      <FilterPanel ></FilterPanel>
    </div>
  );
};

export default SearchableContainer;
