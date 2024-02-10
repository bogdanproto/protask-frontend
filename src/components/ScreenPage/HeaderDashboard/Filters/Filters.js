import { FilterIcon } from 'components/common/IconsLibrary/index';
import { FiltersButton } from './Filters.styled';

export const Filters = () => {
  return (
    <FiltersButton>
      <FilterIcon size={16} />
      <p>Filters</p>
    </FiltersButton>
  );
};
