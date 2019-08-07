import React from 'react';
import EmployeeTable from './EmployeeTable';
import { shallow } from 'enzyme';
import EmployeeRow from './EmployeeRow';

describe('<EmployeeTable />', () => {
  let wrapper;
  let employees;
  beforeEach(() => {
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
    wrapper = shallow(<EmployeeTable employees={employees} />);
  });

  it('should have two rows', () => {
    expect(wrapper.find(EmployeeRow)).toHaveLength(2);
  });
});
