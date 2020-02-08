import express from 'express';
import { usersController } from '../controllers';

const route = express.Router();

route.get('/', usersController.list);
route.get('/:id', usersController.find);
route.get('/', usersController.create);
route.get('/:id', usersController.update);
route.get('/:id', usersController.del);

export default route;