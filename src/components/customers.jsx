import React, { Component } from 'react';
import { getUsers } from '../services/userService';

class Customers extends Component {
  state = {
    customers: [],
  };

  async componentDidMount() {
    const { data: customers } = await getUsers();
    //console.log(customers);
    this.setState({ customers });
  }

  render() {
    console.log(this.state.customers);
    return (
      <div>
        <ul>
          {this.state.customers.map((m) => (
            <li key={m._id}>{m.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Customers;
