import React, { Component } from 'react';

const Context = React.createContext();

export class Provider extends Component {
  state = {
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

  render() {
    return (
      <Context.Provider value={ this.state }>
        { this.props.children }
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
