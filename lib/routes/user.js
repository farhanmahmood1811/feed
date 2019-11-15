'use strict';

import { Router } from 'express';

import UserController from './../controller/user'
import errorHandler from '../middleware/errorHandler';
import tokenVerification from '../middleware/tokenVerification';

const routes = new Router();

routes.use(tokenVerification)

routes.get('/', UserController.all);

routes.use(errorHandler);

export default routes;
