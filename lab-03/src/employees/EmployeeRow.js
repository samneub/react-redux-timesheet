import React from 'react';
import PropTypes from 'prop-types';

class EmployeeRow extends React.Component {
  render() {
    const { username, email, firstName, lastName, admin } = this.props.employee;
    return (
      <tr>
        <td>{username}</td>
        <td>{email}</td>
        <td>{firstName}</td>
        <td>{lastName}</td>
        <td>{admin ? 'Yes' : 'No'}</td>
      </tr>
    );
  }
}

EmployeeRow.propTypes = {
  employee: PropTypes.object
};

export default EmployeeRow;
