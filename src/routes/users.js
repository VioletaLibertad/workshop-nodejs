import express from 'express';
import { usersController } from '../controllers';

const route = express.Router();

route.get('/', usersController.list);
route.get('/:id', usersController.find);
route.post('/', usersController.create);
route.put('/:id', usersController.update);
route.delete('/:id', usersController.del);

export default route;