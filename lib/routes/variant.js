'use strict';

import { Router } from 'express';

import VariantController from './../controller/variant';
import VariantValidator from './../middleware/variantValidator';
import errorHandler from '../middleware/errorHandler';
import tokenVerification from '../middleware/tokenVerification';

const routes = new Router();

routes.use(tokenVerification)

routes.get('/:id', VariantController.get);
routes.get('/', VariantController.find);
routes.post('/', VariantValidator.create, VariantController.create);
routes.put('/:id', VariantValidator.update, VariantController.update);
routes.delete('/:id', VariantController.remove);

routes.use(errorHandler);

export default routes;
