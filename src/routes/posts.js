import express from 'express';
import { postsController } from '../controllers';

const route = express.Router();

route.get('/', postsController.list);
route.get('/:id', postsController.find);
route.get('/', postsController.create);
route.get('/:id', postsController.update);
route.get('/:id', postsController.del);

export default route;