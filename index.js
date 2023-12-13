const express = require('express');
const bodyParser = require('body-parser');
const config = require('./src/configs');
const jwtMiddleware = require('./src/middlewares/jwt');