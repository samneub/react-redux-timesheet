import React, { Component } from 'react';
import EmployeeTable from './EmployeeTable';

class Employees extends Component {
  employees = [
    {
      _id: 1,
      username: 'admin',
      email: 'admin@mixtape.com',
      password: 'password',
      admin: true,
      firstName: 'Admin',
      lastName: 'User'
    },
    {
      _id: 2,
      username: 'user',
      email: 'user@mixtape.com',
      password: 'password',
      admin: false,
      firstName: 'Normal',
      lastName: 'User'
    }
  ];

  render() {
    return <EmployeeTable employees={this.employees} />;
  }
}

export default Employees;
