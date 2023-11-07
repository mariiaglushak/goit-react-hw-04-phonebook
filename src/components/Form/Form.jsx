import PropTypes from 'prop-types';

import { Component } from 'react';
import { FofmBasic } from './FormStyle';

import Input from 'components/Input/Input';
import AddContactBtn from 'components/Button/AddContactBtn';

class Form extends Component {
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
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required="required"
        ></Input>
        <Input
          value={number}
          onChange={this.handleFormInput}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required="required"
        ></Input>
        <AddContactBtn text="add contact" />
      </FofmBasic>
    );
  }
}

export default Form;

Form.propTypes = {
  onSubmitHendler: PropTypes.func.isRequired,
};
