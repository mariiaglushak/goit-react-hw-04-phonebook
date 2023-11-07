import { Component } from 'react';
import { FofmBasic } from './ContactFormStyle';

import Input from 'components/Input/Input';
import AddContactBtn from 'components/Button/AddContactBtn';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleFormInput = e => {
    const inputNameValue = e.target.value;
    this.setState({ [e.target.name]: inputNameValue });
  };

  handlerSubmitForm = e => {
    e.preventDefault();
    this.props.onSubmitHendler(this.state);
    this.resetState();
  };

  resetState = () => this.setState({ name: '', number: '' });

  render() {
    const { name, number } = this.state;

    return (
      <FofmBasic onSubmit={this.handlerSubmitForm}>
        <Input
          onChange={this.handleFormInput}
          value={name}
          type="text"
          name="name"
          required="required"
        ></Input>
        <Input
          value={number}
          onChange={this.handleFormInput}
          type="tel"
          name="number"
          required="required"
        ></Input>
        <AddContactBtn text="add contact" />
      </FofmBasic>
    );
  }
}

export default ContactForm;
