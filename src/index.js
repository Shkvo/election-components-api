import Koa from 'koa';
import Router from 'koa-router';
import convert from 'koa-convert';
import bodyParser from 'koa-bodyparser';
import logger from 'koa-logger';
import passport from 'koa-passport';
import helmet from 'koa-helmet';

import router from './routes';

const app = new Koa();

app.use(helmet());
app.use(bodyParser());
app.use(router.routes(), router.allowedMethods());
app.use(convert(logger()));

app.listen(5000);