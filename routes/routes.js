var UserController = require('../controller/controller');
var Joi=require('joi')


module.exports = function(){
	return [
        
        {
		path: '/api/add',
    method: 'POST',
    config: {

        handler: UserController.sum,
        // handler: (request, reply) => {
        //     var sum = parseInt(request.payload.a) + parseInt(request.payload.b);
        //     reply(sum);
        // },
        description: 'Get algebraic sum',
        notes: 'Pass two numbers as a & b and returns sum',
        tags: ['api'],
        validate: {
            payload: {
                a : Joi.number()
                        .required(),
                b : Joi.number()
                        .required(),
            }
        }
    }},
    {
        path: '/api/diff',
        method: 'POST',
        config: {
            handler: UserController.diff,
            description: 'Get algebraic difference',
            notes: 'Pass two numbers as a & b and returns difference',
            tags: ['api'],
            validate: {
                payload: {
                    a : Joi.number()
                            .required(),
                    b : Joi.number()
                            .required(),
                }
            }
        }},

        {
            path: '/api/prod',
            method: 'POST',
            config: {
                handler: UserController.prod,
                description: 'Get algebraic product',
                notes: 'Pass two numbers as a & b and returns product',
                tags: ['api'],
                validate: {
                    payload: {
                        a : Joi.number()
                                .required(),
                        b : Joi.number()
                                .required(),
                    }
                }
            }
        },
        {
            path: '/api/div',
            method: 'POST',
            config: {
                handler: UserController.div,
                description: 'Get algebraic division',
                notes: 'Pass two numbers as a & b and returns quotient',
                tags: ['api'],
                validate: {
                    payload: {
                        a : Joi.number()
                                .required(),
                        b : Joi.number()
                                .required(),
                    }
                }
            }
        },
        {
            path: '/api/rem',
            method: 'POST',
            config: {
                handler: UserController.rem,
                description: 'Get algebraic remainder',
                notes: 'Pass two numbers as a & b and returns remainder',
                tags: ['api'],
                validate: {
                    payload: {
                        a : Joi.number()
                                .required(),
                        b : Joi.number()
                                .required(),
                    }
                }   
            }
        }
	]
}
   