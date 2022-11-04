const express = require('express');
const routes = express.Router();
const controller = require('../controller/index.controller')
const signUpValidation = require('../validation/signUp.validation')


routes.post('/signUp',signUpValidation,  controller.signUp)

routes.post('/login', controller.login)

module.exports = routes;