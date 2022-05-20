import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as fetchApi from '../help/fetchApi';

function NewTask() {
  const navigate = useNavigate();
  const [element, setElement] = useState({
    task: '',
  });

  const change = ({ target }) => {
    const { name, value } = target;
    setElement((pre) => ({ ...pre, [name]: value }));
  };

  const submit = async (e) => {
    e.preventDefault();
    const res = await fetchApi.create(element);
    if (res.status === 201) {
      navigate('../', { replace: true });
    }
    // else{
    //   //caso de erro
    // }
  };

  return (
    <form onSubmit={(e) => submit(e)}>
      <label htmlFor="task">
        Task
        <input
          required
          value={element.task}
          name="task"
          onChange={(e) => change(e)}
        />
      </label>
      <button type="submit">enviar</button>
    </form>
  );
}

export default NewTask;
