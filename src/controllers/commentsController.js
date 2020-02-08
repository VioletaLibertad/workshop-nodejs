const list = (req, res) => {
  res.send({ message: 'Soy el controlador de los comments' });
};

const find = (req, res) => {
  res.send({ message: 'controlador para encontrar comments' });
};

const create = (req, res) => {
  res.send({ message: 'controlador para crear nuevos comments' });
};

const update = (req, res) => {
  res.send({ message: 'controlador para actualizar comments' });
};

const del = (req, res) => {
  res.send({ message: 'controlador para eliminar comments' });
};

export default {
  list,
  find,
  create,
  update,
  del,
};