require('dotenv').config();

const express = require('express');
const logger = require('morgan');

require('./configs/db.config');

const app = express();

app.set('view engine', 'hbs');
app.set('views', `${__dirname}/views`);
app.use(express.static(`${__dirname}/public`));

app.use(logger('dev'));

const routes = require('./configs/routes.config');
app.use('/', routes);

const port = process.env.PORT;
app.listen(port, () => console.log(`Application running at port ${port}`));