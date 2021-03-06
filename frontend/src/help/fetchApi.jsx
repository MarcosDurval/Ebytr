const url = 'http://localhost:3001/task';
const headers = {
  Accept: 'application/json',
  'Content-Type': ' application/json',
};

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
    headers,
    body: JSON.stringify(body),
  });
  return result;
};

export const update = async (id, body) => {
  const result = await fetch(`${url}/${id}`, {
    method: 'PUT',
    headers,
    body: JSON.stringify(body),
  });
  return result;
};

export const destroy = async (id) => {
  const result = await fetch(`${url}/${id}`, {
    method: 'DELETE',
    headers,
  });
  return result;
};
