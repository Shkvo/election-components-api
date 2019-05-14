import Koa from 'koa';
import convert from 'koa-convert';
import bodyParser from 'koa-bodyparser';
import cors from 'koa-cors';
import logger from 'koa-logger';
import passport from 'koa-passport';
import helmet from 'koa-helmet';
import socketio from 'socket.io';
import router from './routes';
import votes from './controllers/votes.controller';

const app = new Koa();

app.use(cors());
require('dotenv').config();

require('./config/auth');
app.use(passport.initialize());
app.use(helmet());
app.use(bodyParser());
app.use(router.routes(), router.allowedMethods());
app.use(convert(logger()));

const server = app.listen(5000);
const io = new socketio(server);

io.on('connection', socket => {
  socket.on('vote', votes.create(socket));
});
