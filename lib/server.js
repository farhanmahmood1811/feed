'use strict';

import express from 'express';
import cors from 'cors';
import path from 'path';
import bodyParser from 'body-parser';
import helmet from 'helmet';

import UserRoutes from './routes/user';
import AuthRoutes from './routes/auth';
import ItemRoutes from './routes/item';
import VariantRoutes from './routes/variant';
import NotificationRoutes from './routes/notification';
import Config from './core/config';
import ConnectToDb from './core/connect'

ConnectToDb();

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// Helmet helps you secure your Express apps by setting various HTTP headers
// https://github.com/helmetjs/helmet
app.use(helmet());

// Enable CORS with various options
// https://github.com/expressjs/cors
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/public', express.static(`${__dirname}/public`));

app.use('/user', UserRoutes);
app.use('/auth', AuthRoutes);
app.use('/item', ItemRoutes);
app.use('/variant', VariantRoutes);
app.use('/notification', NotificationRoutes);

app.listen(Config.port, () => {
  console.log(`Access api on url localhost:${Config.port}/`);
});
  
export default app;