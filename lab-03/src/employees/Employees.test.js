import React from 'react';
import Employees from './Employees';
import { shallow } from 'enzyme';
import EmployeeTable from './EmployeeTable';

describe('<Employees />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Employees />);
  });

  it('should have a EmployeeTable', () => {
    expect(wrapper.find(EmployeeTable)).toHaveLength(1);
  });
});
