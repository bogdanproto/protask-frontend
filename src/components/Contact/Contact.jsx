import { useDispatch, useSelector } from 'react-redux';
import { useRef } from 'react';
import {
  ContactItem,
  ContactBox,
  DeleteIconStyled,
  PhoneContact,
  NameContact,
  ContactBoxText,
  Avatar,
} from './Contact.styled';
import { deleteContact } from 'redux/contacts/operations';
import { selectLoader } from 'redux/contacts/selectors';

export const Contact = ({ id, name, phone, avatar }) => {
  const isLoading = useSelector(selectLoader);
  const dispatch = useDispatch();
  const ref = useRef();

  const handleDelete = evt => {
    ref.current = evt.currentTarget.id;
    dispatch(deleteContact(ref.current));
  };

  return (
    <ContactItem>
      <ContactBox>
        <Avatar>{avatar}</Avatar>
        <ContactBoxText>
          <NameContact>{name}</NameContact>
          <PhoneContact>{phone} </PhoneContact>
        </ContactBoxText>
      </ContactBox>
      <button
        id={id}
        type="button"
        onClick={handleDelete}
        disabled={isLoading && ref.current === id}
      >
        <DeleteIconStyled />
      </button>
    </ContactItem>
  );
};
