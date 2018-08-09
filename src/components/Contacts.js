import React, { Component, Fragment } from 'react';
import Contact from './Contact';

class Contacts extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [
        {
          id: 1,
          name: 'Shashi Kashyap',
          email: 'shashi@gmail.com',
          phone: '555-555-5555'
        },
        {
          id: 2,
          name: 'Ravi Singh',
          email: 'ravi@gmail.com',
          phone: '222-222-2222'
        },
        {
          id: 3,
          name: 'Abhay Rai',
          email: 'abhay@gmail.com',
          phone: '666-666-666'
        }
      ]
    }
  }

  deleteContact = (id) => {
    const { contacts } = this.state;
    const newContacts = contacts.filter(contact => contact.id !== id);

    this.setState({ contacts: newContacts });
  }

  render() {
    const { contacts } = this.state;

    return (
      <Fragment>
        { contacts.map(contact => (
          <Contact
            key={ contact.id }
            contact={ contact }
            deleteClickHandler={ this.deleteContact.bind(this, contact.id) }
          />
        )) }
      </Fragment>
    );
  }
}

export default Contacts;
