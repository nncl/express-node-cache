/**
 * @description
 * Caching express routes.
 */

'use strict';

const express = require('express')
    , app = express()
    , http = require('http')
    , cache = require('express-redis-cache')({
        host: 'localhost'
        , port: 3000
        , auth_pass: REDIS_PASSWORD
});

http.createServer(app).listen(3000, '0.0.0.0', function () {
    console.log('Server running at port 3000');
});



