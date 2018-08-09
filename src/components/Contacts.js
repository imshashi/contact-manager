import React, { Component } from 'react';
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

  render() {
    const { contacts } = this.state;

    return (
      <div>
        { contacts.map(contact => (
          <Contact
            key={ contact.id }
            contact={ contact }
          />
        )) }
      </div>
    );
  }
}

export default Contacts;
