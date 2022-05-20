import React from 'react';
import PropTypes from 'prop-types';

function Task({
  date, status, title, task,
}) {
  return (
    <div>
      <h4>{title}</h4>
      <p>{status}</p>
      <p>{task}</p>
      <p>{date}</p>
    </div>
  );
}
export default Task;

Task.propTypes = {
  date: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  task: PropTypes.string.isRequired,
};
