import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/contacts/filterSlice';
import { FilterIcons, Label } from './Filter.styled';
import { selectFilter } from 'redux/contacts/selectors';

export const Filter = () => {
  const { filter } = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleFilter = evt => dispatch(setFilter(evt.target.value));

  return (
    <Label>
      <FilterIcons />
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={handleFilter}
        placeholder="Search by Name or Phone"
      />
    </Label>
  );
};
