import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as fetchApi from '../help/fetchApi';

function NewTask() {
  const navigate = useNavigate();
  const [element, setElement] = useState({
    task: '',
    title: '',
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
    <form action="" onSubmit={(e) => submit(e)}>
      <label htmlFor="title">
        Titulo
        <input
          required
          value={element.title}
          name="title"
          onChange={(e) => change(e)}
        />
      </label>
      <label htmlFor="task">
        Task
        <textarea
          name="task"
          cols="30"
          rows="10"
          placeholder="escreva sua task aqui"
        />
      </label>
      <button type="submit">enviar</button>
    </form>
  );
}

export default NewTask;
