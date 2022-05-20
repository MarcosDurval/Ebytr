/* eslint-disable no-case-declarations */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Task from '../components/task';
import * as fetchApi from '../help/fetchApi';

function listTask() {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetchApi.getAllTasks().then(setList);
  }, []);

  const order = ({ target }) => {
    switch (target.value) {
      case 'task':
        list.sort((a, b) => a.task.localeCompare(b.task));
        setList([...list]);
        break;

      case 'data':
      // source: comparar datas https://stackoverflow.com/questions/10123953/how-to-sort-an-object-array-by-date-property
        list.sort((a, b) => new Date(b.date) - new Date(a.date));
        setList([...list]);
        break;

      case 'status':
        const pen = list.filter((l) => l.status === 'pendende');
        const progre = list.filter((l) => l.status === 'em andamento');
        const finish = list.filter((l) => l.status === 'pronto');
        setList([...pen, ...progre, ...finish]);
        break;

      default:
        break;
    }
  };
  return (
    <div>
      <div>
        <h2>
          <Link to="/create">Criar Task</Link>
        </h2>
        <select onChange={(e) => order(e)}>
          <option>status</option>
          <option>data</option>
          <option>task</option>
        </select>
      </div>
      <div>
        {list.length > 0 && list.map((e, i) => (
          Task({ ...e, index: i })
        ))}
      </div>
    </div>
  );
}
export default listTask;
