import React from 'react';
import EmployeeRow from './EmployeeRow';
import { shallow } from 'enzyme';

describe('<EmployeeRow />', () => {
  let wrapper;

  beforeEach(() => {
    const employee = {
      username: 'Cool',
      email: 's@s.com',
      firstName: 'Sam',
      lastName: 'Magic',
      admin: false
    };
    wrapper = shallow(<EmployeeRow employee={employee} />);
  });

  it('should render values into expected cells', () => {
    expect(wrapper.find('td')).toHaveLength(5);
    expect(
      wrapper
        .find('td')
        .at(0)
        .text()
    ).toEqual('Cool');
    expect(
      wrapper
        .find('td')
        .at(4)
        .text()
    ).toEqual('No');
  });
});
