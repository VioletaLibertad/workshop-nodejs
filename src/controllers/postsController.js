const list = (req, res) => {
  res.send({ message: 'Soy el controlador de los posts' });
};

const find = (req, res) => {
  res.send({ message: 'controlador para encontrar posts' });
};

const create = (req, res) => {
  res.send({ message: 'controlador para crear nuevos posts' });
};

const update = (req, res) => {
  res.send({ message: 'controlador para actualizar posts' });
};

const del = (req, res) => {
  res.send({ message: 'controlador para eliminar posts' });
};

export default {
  list,
  find,
  create,
  update,
  del,
};