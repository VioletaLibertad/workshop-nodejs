import express from 'express';
import { postsController } from '../controllers';

const route = express.Router();

route.get('/', postsController.list);
route.get('/:id', postsController.find);
route.post('/', postsController.create);
route.put('/:id', postsController.update);
route.delete('/:id', postsController.del);

export default route;