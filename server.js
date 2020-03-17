'use strict';

const Hapi = require('hapi');
const Route=require('./routes/routes')
const Inert = require('inert');
const Vision = require('vision');
const HapiSwagger = require('hapi-swagger');

const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });
    server.route(Route());

    server.route({
        method: 'GET',
        path: '/',
        handler: (request, h) => {

            return 'Hello World!';
        }
    });
    const swaggerOptions = {
        info: {
                title: 'Test API Documentation',
                version:'@9.4.1'
            },
        };

    await server.register([
        Inert,
        Vision,
        {
            plugin: HapiSwagger,
            options: swaggerOptions
        }
    ])
    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init()