import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';
import EmployeeRow from './EmployeeRow';

class EmployeeTable extends React.Component {
  render() {
    const { employees } = this.props;
    return (
      <Table bordered striped>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(employee => (
            <EmployeeRow employee={employee} key={employee._id} />
          ))}
        </tbody>
      </Table>
    );
  }
}

EmployeeTable.propTypes = {
  employees: PropTypes.array
};

EmployeeTable.defaultProps = {
  employees: []
};

export default EmployeeTable;
