/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import * as fetchApi from '../help/fetchApi';
import Task from '../components/task';
import NewTask from './newTask';
import ListTask from './ListTask';
import './header.css';
import './prin.css';

export default function Page() {
  const [dataTask, setTask] = useState({
    task: '',
    edit: false,
  });

  const [list, setList] = useState(null);

  useEffect(() => {
    fetchApi.getAllTasks().then(setList);
  }, []);

  const destroy = async (id) => {
    await fetchApi.destroy(id);
    const itens = await fetchApi.getAllTasks();
    setList(itens);
  };

  const updateStatus = async (_id, body) => {
    await fetchApi.update(_id, { status: body });
    const itens = await fetchApi.getAllTasks();
    setList(itens);
  };
  return (
    <div>
      <header>
        <h1>Ebytr</h1>

        <NewTask
          dataTask={dataTask}
          setTask={setTask}
          setList={setList}
        />

      </header>
      <main>
        <ListTask setList={setList} list={list} />
        {list && list.map((e) => (
          <Task
            dataTask={e}
            key={e._id}
            edit={dataTask.edit}
            setTask={setTask}
            destroy={destroy}
            updateStatus={updateStatus}
          />
        ))}
      </main>
    </div>
  );
}
