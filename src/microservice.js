import config from './config.json';
import express from 'express';
import BodyParser from 'body-parser';
import cors from 'cors';
import Service from './service/service'

express()
    .use(BodyParser.json({ limit: config.bodyParser.limit }))
    .use(cors(config.cors))
    .all(config.application.endpoint, new Service().run)
    .listen(config.application.port, () => {
        console.log("Listening on port " + config.application.port);
    });