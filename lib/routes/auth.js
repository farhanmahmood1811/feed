'use strict';

import { Router } from 'express';

import AuthController from './../controller/auth'
import errorHandler from '../middleware/errorHandler';

const routes = new Router();

routes.post('/register', AuthController.register);
routes.post('/login', AuthController.login);

routes.use(errorHandler);

export default routes;
