import React from 'react';
import PropTypes from 'prop-types';
import { BiTask, BiEdit, BiTrash } from 'react-icons/bi';
import './task.css';

export default function Task({
  dataTask,
  destroy, updateStatus, setTask, edit,
}) {
  const {
    date, status, task, _id,
  } = dataTask;
  const startEdit = async () => {
    setTask({ ...dataTask, edit: true });
  };
  return (
    <div className="box">
      <div className="infos">
        <p>{task}</p>
        <p className="data">{new Date(date).toLocaleString('pt-BR')}</p>
      </div>
      <div className="buttons">
        <div className="status">
          <button type="button" className="pendente" disabled>Pendente</button>
          <button
            type="button"
            className="andamento"
            disabled={!['pendente'].includes(status)}
            onClick={() => updateStatus(_id, 'em andamento')}
          >
            Em andamento
          </button>
          <button
            type="button"
            className="finish"
            disabled={!['em andamento'].includes(status)}
            onClick={() => updateStatus(_id, 'pronto')}
          >
            Finalizar

          </button>
          {
            status === 'pronto' && <BiTask className="icons" />

          }
        </div>
        <div className="edit">
          <button type="button" onClick={() => startEdit(_id)}>
            <BiEdit className="icons" />
          </button>
          <button type="button" onClick={() => destroy(_id)} disabled={edit}>
            <BiTrash className="icons" />
          </button>
        </div>
      </div>
    </div>
  );
}

Task.propTypes = {
  dataTask: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    task: PropTypes.string.isRequired,
  }).isRequired,
  edit: PropTypes.bool.isRequired,
  destroy: PropTypes.func.isRequired,
  updateStatus: PropTypes.func.isRequired,
  setTask: PropTypes.func.isRequired,
};
