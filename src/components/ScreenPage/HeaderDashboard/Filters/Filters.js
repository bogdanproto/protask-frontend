import { FiFilter } from 'react-icons/fi';
import { FiltersButton } from './Filters.styled';

export const Filters = () => {
  return (
    <FiltersButton>
      <FiFilter size={16} />
      Filters
    </FiltersButton>
  );
};
