"use strict";

import mongoose from 'mongoose';
import config from './config'

mongoose.Promise = global.Promise;

const ConnectToDb = async () => {
    let dbHost = config.dbHost;
    let dbPort = config.dbPort;
    let dbName = config.dbName;
    try {
        await mongoose.connect(`mongodb://${dbHost}:${dbPort}/${dbName}`, { useNewUrlParser: true });
        console.log('Connected to mongo!!!');
    }
    catch (err) {
        console.log('Could not connect to MongoDB', err);
    }
}

export default ConnectToDb;