'use strict';

import { Router } from 'express';

import NotificationController from './../controller/notifcation';
import NotificationValidator from './../middleware/notificationValidator';
import errorHandler from '../middleware/errorHandler';
import tokenVerification from '../middleware/tokenVerification';

const routes = new Router();

routes.use(tokenVerification)

routes.get('/', NotificationValidator.all, NotificationController.all);

routes.use(errorHandler);

export default routes;
