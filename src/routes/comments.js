import express from 'express';
import { commentsController } from '../controllers';

const route = express.Router();

route.get('/', commentsController.list);
route.get('/:id', commentsController.find);
route.post('/', commentsController.create);
route.put('/:id', commentsController.update);
route.delete('/:id', commentsController.del);

export default route;