const list = (req, res) => {
  res.send({ message: 'Soy el controlador del usuario' });
};

const find = (req, res) => {
  res.send({ message: 'controlador para encontrar usuarios' });
};

const create = (req, res) => {
  res.send({ message: 'controlador para crear nuevos usuarios' });
};

const update = (req, res) => {
  res.send({ message: 'controlador para actualizar usuarios' });
};

const del = (req, res) => {
  res.send({ message: 'controlador para eliminar usuarios' });
};

export default {
  list,
  find,
  create,
  update,
  del,
};