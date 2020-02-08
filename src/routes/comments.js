import express from 'express';
import { commentsController } from '../controllers';

const route = express.Router();

route.get('/', commentsController.list);
route.get('/:id', commentsController.find);
route.get('/', commentsController.create);
route.get('/:id', commentsController.update);
route.get('/:id', commentsController.del);

export default route;