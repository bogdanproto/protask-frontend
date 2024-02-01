import { useSelector } from 'react-redux';
import { useState } from 'react';
import {
  AddButton,
  AddIconStyled,
  PhoneBookHeader,
  PhoneBookStyled,
} from './PhoneBook.styled';

import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { LogOut } from 'components/LogOut/LogOut';
import { selectStatusAuth } from 'redux/userAuth/selectors';
import { ContactForm } from 'components/ContactForm/ContactForm';

const PhoneBook = () => {
  const [isCreateMenuOpen, setCreateMenuOpen] = useState(false);
  const { isLoggedIn } = useSelector(selectStatusAuth);

  const hadleCloseMenu = () => setCreateMenuOpen(!isCreateMenuOpen);

  return (
    <PhoneBookStyled>
      <PhoneBookHeader>
        <h3>PHONEBOOK</h3>
        <LogOut />
      </PhoneBookHeader>
      <Filter />

      <ContactForm
        closeCreateContact={hadleCloseMenu}
        isCreateMenuOpen={isCreateMenuOpen}
      />

      <p>Contacts</p>
      {isLoggedIn && <ContactList />}
      <AddButton onClick={hadleCloseMenu}>
        <AddIconStyled />
      </AddButton>
    </PhoneBookStyled>
  );
};

export default PhoneBook;
