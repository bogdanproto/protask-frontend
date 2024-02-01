import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toFilter } from 'utils/filter';
import iconsSet from 'utils/icons';
import { Contact } from 'components/Contact/Contact';
import { ContactListStyled, ContactsListText } from './ContactList.styled';
import { fetchContacts } from 'redux/contacts/operations';
import {
  selectContacts,
  selectFilter,
  selectLoader,
} from 'redux/contacts/selectors';

export const ContactList = () => {
  const items = useSelector(selectContacts);
  const isLoading = useSelector(selectLoader);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    const controller = new AbortController();
    dispatch(fetchContacts(controller.signal));

    return () => {
      controller.abort();
    };
  }, [dispatch]);

  const filtredContacts = toFilter(items, filter);

  return (
    <ContactListStyled>
      {Boolean(items.length) &&
        (filtredContacts.length ? (
          filtredContacts.map(({ id, name, number }, idx) => (
            <Contact
              key={id}
              id={id}
              name={name}
              phone={number}
              avatar={iconsSet[idx % iconsSet.length]}
            />
          ))
        ) : (
          <ContactsListText>Contacts not found</ContactsListText>
        ))}
      {!items.length && !isLoading && (
        <ContactsListText>Contacts list is empty</ContactsListText>
      )}
    </ContactListStyled>
  );
};
