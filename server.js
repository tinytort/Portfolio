'use strict';

require('dotenv').config();

const express = require('express');
const app = express();
const requestProxy = require('express-request-proxy');
const PORT = process.env.PORT || 3000;

app.use(express.static('./public'));
app.get('/', function (request, response) {
    response.sendFile('./public/index.html');
});

app.get('/github/*', function (request, response) {
    console.log(process.env.GITHUB_TOKEN)
    requestProxy({
        url: `https://api.github.com/${request.params[0]}`,
        headers: { Authorization: `token ${process.env.GITHUB_TOKEN}` }
    })(request, response);
});

app.listen(PORT, function () {
    console.log(` Listening on port: ${PORT}`);
});

