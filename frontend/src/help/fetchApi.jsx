const url = 'http://localhost:3001/task';

export const getAllTasks = async () => {
  const result = await fetch(url);
  return result.json();
};

export const getById = async (id) => {
  const result = await fetch(`${url}/${id}`);
  return result.json();
};

export const create = async (body) => {
  const result = await fetch(url, {
    method: 'POST',
    body,
  });
  return result;
};
