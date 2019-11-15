'use strict';

import { Router } from 'express';

import ItemController from './../controller/item';
import ItemValidator from './../middleware/itemValidator';
import errorHandler from '../middleware/errorHandler';
import tokenVerification from '../middleware/tokenVerification';

const routes = new Router();

routes.use(tokenVerification)

routes.get('/:id', ItemController.get);
routes.get('/', ItemController.find);
routes.post('/', ItemValidator.create, ItemController.create);
routes.put('/:id', ItemValidator.update, ItemController.update);
routes.delete('/:id', ItemController.remove);

routes.use(errorHandler);

export default routes;
