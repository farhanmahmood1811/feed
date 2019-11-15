"use strict";

let Config = {};

Config.dbHost = process.env.dbHost || 'localhost';
Config.dbPort = process.env.dbPort || '27017';
Config.dbName = process.env.dbName || 'feed_group';
Config.port = process.env.port || 3000;

export default Config;