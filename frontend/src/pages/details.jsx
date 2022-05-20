import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import * as fetchApi from '../help/fetchApi';

function Details() {
  const url = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState(null);

  useEffect(() => {
    fetchApi.getById(url.id).then(setTask);
  }, []);

  const change = ({ target }) => {
    const { name, value } = target;
    setTask((pre) => ({ ...pre, [name]: value }));
  };

  const submit = async (e) => {
    e.preventDefault();
    const res = await fetchApi.update(url.id, task);
    if (res.status === 200) {
      navigate('../', { replace: true });
    }
  };

  const destroy = async () => {
    const res = await fetchApi.destroy(url.id);
    if (res.status === 200) {
      navigate('../', { replace: true });
    }
  };

  return (
    <div>
      {task
        && (
        <form onSubmit={(e) => submit(e)}>
          <label htmlFor="task">
            <input
              required
              value={task.task}
              name="task"
              onChange={(e) => change(e)}
            />
          </label>
          <select name="status" value={task.status} onChange={(e) => change(e)}>
            <option>pendente</option>
            <option>em andamento</option>
            <option>pronto</option>
          </select>
          <p>{task.date.split('T')[0]}</p>
          <button type="submit">editar</button>
          <button type="button" onClick={() => destroy()}>deletar</button>
        </form>
        )}
    </div>
  );
}

export default Details;
