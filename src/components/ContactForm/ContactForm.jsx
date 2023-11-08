import React, { useState } from 'react';
import { FofmBasic } from './ContactFormStyle';

import Input from 'components/Input/Input';
import AddContactBtn from 'components/Button/AddContactBtn';

const ContactForm = ({ onSubmitHendler }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleFormInput = e => {
    const inputNameValue = e.target.value;
    const inputName = e.target.name;
    switch (inputName) {
      case 'name': {
        setName(inputNameValue);
        return;
      }
      case 'number': {
        setNumber(inputNameValue);
        return;
      }
      default:
        return;
    }
  };

  const handlerSubmitForm = e => {
    e.preventDefault();
    onSubmitHendler({ name, number });
    resetState();
  };

  const resetState = () => {
    setName('');
    setNumber('');
  };

  return (
    <FofmBasic onSubmit={handlerSubmitForm}>
      <Input
        onChange={handleFormInput}
        value={name}
        type="text"
        name="name"
        required="required"
      ></Input>
      <Input
        value={number}
        onChange={handleFormInput}
        type="tel"
        name="number"
        required="required"
      ></Input>
      <AddContactBtn text="add contact" />
    </FofmBasic>
  );
};

export default ContactForm;
