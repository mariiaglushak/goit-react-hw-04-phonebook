import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';

import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const contacts = localStorage.getItem('contacts');
    const parseContacts = JSON.parse(contacts);
    return parseContacts;
  });

  const [filter, setFilter] = useState('');

  const handlerFormSubmit = ({ name, number }) => {
    const normalizeName = name.toLowerCase();
    const ArrayNames = contacts.find(
      contact => contact.name.toLowerCase() === normalizeName
    );
    if (ArrayNames) {
      alert(`${name} вже є в книзі`);
      return;
    }
    if (contacts) {
      setContacts([{ id: nanoid(), name: name, number: number }, ...contacts]);
    }
  };

  const handlerInputFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getContacts = () => {
    const normalizeFilter = filter.toLowerCase();
    // return setFilter(
    //   contacts.filter(contact =>
    //     contact.name.toLowerCase().includes(normalizeFilter)
    //   )
    // );

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };

  const clickDeletBtn = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const contactElem = getContacts();

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onSubmitHendler={handlerFormSubmit}></ContactForm>
      <h2>Contacts</h2>
      <Filter
        text="Find contacts by name"
        value={filter}
        onChange={handlerInputFilter}
      />
      <ContactList
        contacts={contactElem}
        text="Delete"
        onClick={clickDeletBtn}
      />
    </>
  );
};

export default App;
