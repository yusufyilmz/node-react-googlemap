const config = require('./config/config');
const express = require('express');
const _ = require('lodash');
const bodyParser = require('body-parser');
const routes = require('./routes');
const { logMiddleware } = require('./middleware/log');
const { accessControlMiddleware } = require('./middleware/access');

var app = express();
const port = process.env.PORT || 4000;
app.use(bodyParser.json());
app.use(logMiddleware);
app.use(accessControlMiddleware);

app.use('/api', routes);

app.listen(port, () => {
    console.log('Started on port', port);
});

module.exports = {
    app
};
