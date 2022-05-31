import React from 'react';
import PropTypes from 'prop-types';
import * as fetchApi from '../help/fetchApi';

export default function NewTask({ dataTask, setTask, setList }) {
  const { task } = dataTask;
  const { _id } = dataTask;

  const change = ({ target }) => {
    const { name, value } = target;
    setTask((pre) => ({ ...pre, [name]: value }));
  };

  const submit = async (e) => {
    e.preventDefault();
    await fetchApi.create(dataTask);
    setTask({ task: '' });
    fetchApi.getAllTasks().then(setList);
  };

  const edit = async (e) => {
    e.preventDefault();
    await fetchApi.update(_id, dataTask);
    setTask({ task: '' });
    fetchApi.getAllTasks().then(setList);
  };

  return (
    <form onSubmit={(e) => (_id ? edit(e) : submit(e))}>
      <label htmlFor="task">
        Task:
        <input
          required
          value={task}
          minLength="5"
          name="task"
          onChange={(e) => change(e)}
        />
      </label>
      <button type="submit">{_id ? 'editar' : 'criar'}</button>
    </form>
  );
}

NewTask.propTypes = {
  dataTask: PropTypes.shape({
    _id: PropTypes.string,
    task: PropTypes.string,
  }).isRequired,
  setTask: PropTypes.func.isRequired,
  setList: PropTypes.func.isRequired,
};
