import { Component } from 'react';
import { nanoid } from 'nanoid';

import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handlerFormSubmit = ({ name, number }) => {
    const { contacts } = this.state;
    const normalizeName = name.toLowerCase();
    const ArrayNames = contacts.find(
      contact => contact.name.toLowerCase() === normalizeName
    );

    if (ArrayNames) {
      alert(`${name} вже є в книзі`);
      return;
    }

    this.setState(({ contacts }) => {
      return {
        contacts: [{ id: nanoid(), name: name, number: number }, ...contacts],
      };
    });
  };

  handlerInputFilter = e => this.setState({ filter: e.currentTarget.value });

  getContacts = () => {
    const { filter, contacts } = this.state;
    const normalizeFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };

  clickDeletBtn = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };
  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parseContacts = JSON.parse(contacts);
    if (parseContacts) {
      this.setState({ contacts: parseContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const { filter } = this.state;
    const contactElem = this.getContacts();

    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm onSubmitHendler={this.handlerFormSubmit}></ContactForm>
        <h2>Contacts</h2>
        <Filter
          text="Find contacts by name"
          value={filter}
          onChange={this.handlerInputFilter}
        />
        <ContactList
          contacts={contactElem}
          text="Delete"
          onClick={this.clickDeletBtn}
        />
      </>
    );
  }
}
