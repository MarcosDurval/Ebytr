import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Task({
  date, status, task, index, _id,
}) {
  return (
    <div key={index}>
      <p>{task}</p>
      <p>{status}</p>
      <p>{date.split('T')[0]}</p>
      <Link to={`${_id}`}>detalhes</Link>
    </div>
  );
}
export default Task;

Task.propTypes = {
  date: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  task: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  _id: PropTypes.string.isRequired,
};
