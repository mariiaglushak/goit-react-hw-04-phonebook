import { Item, ItemNumber, ItemBtnDel } from './ContactListStyle';

const ContactList = ({ contacts, text, onClick }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <Item key={contact.id}>
          {contact.name}:<ItemNumber>{contact.number}</ItemNumber>
          <ItemBtnDel type="button" onClick={() => onClick(contact.id)}>
            {text}
          </ItemBtnDel>
        </Item>
      ))}
    </ul>
  );
};

export default ContactList;


