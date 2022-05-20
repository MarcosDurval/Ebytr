import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Task from '../components/task';
import * as fetchApi from '../help/fetchApi';

function listTask() {
  const [list, setList] = useState([]);
  useEffect(() => {
    fetchApi.getAllTasks().then(setList);
  }, []);

  return (
    <div>
      <div>
        <h2>
          <Link to="/create">Criar Task</Link>
        </h2>
        <select>
          <option>status</option>
          <option>data</option>
          <option>titulo</option>
        </select>
      </div>
      <div>
        {list.map((e) => (
          Task(e)
        ))}
      </div>
    </div>
  );
}
export default listTask;
