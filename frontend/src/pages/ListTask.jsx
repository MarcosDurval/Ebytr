import React from 'react';

function listTask({ list, setList }) {
  const order = ({ target }) => {
    switch (target.value) {
      case 'task':
        list.sort((a, b) => a.task.localeCompare(b.task));
        setList([...list]);
        break;

      case 'data':
        list.sort((a, b) => new Date(b.date) - new Date(a.date));
        setList([...list]);
        break;

      case 'status':
        const pen = list.filter((l) => l.status === 'pendente');
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
      <select onChange={(e) => order(e)}>
        <option>-----</option>
        <option>status</option>
        <option>data</option>
        <option>task</option>
      </select>
    </div>
  );
}
export default listTask;
