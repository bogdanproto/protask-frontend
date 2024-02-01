import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ButtonBox, ContactFormStyled, Label } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { selectContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';
import { schemaContactForm } from 'utils/shema';

export const ContactForm = ({ closeCreateContact, isCreateMenuOpen }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaContactForm),
  });

  const items = useSelector(selectContacts);
  const dispatch = useDispatch();

  const onSubmit = async preData => {
    const data = {
      name: preData.name,
      number: preData.phone,
    };
    const isContactExist = items.some(
      ({ name }) => name.toLowerCase() === data.name.toLowerCase()
    );

    if (isContactExist) {
      toast.error(`${data.name} is already in contacts`);
      return;
    }

    const isFullField = await dispatch(addContact(data));
    if (isFullField) {
      closeCreateContact();
    }

    reset();
  };

  return (
    <ContactFormStyled
      onSubmit={handleSubmit(onSubmit)}
      $isCreateMenuOpen={isCreateMenuOpen}
    >
      <Label>
        FullName
        <input {...register('name')} />
        <p>{errors.name?.message}</p>
      </Label>
      <Label>
        Phone
        <input {...register('phone')} />
        <p>{errors.phone?.message}</p>
      </Label>
      <ButtonBox>
        <button type="submit">Create</button>
        <button type="button" onClick={closeCreateContact}>
          Close
        </button>
      </ButtonBox>
    </ContactFormStyled>
  );
};
