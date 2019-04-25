import passport from 'koa-passport';
import { throwError } from './error';

const authenticate = async(ctx, next) => {
  await passport.authenticate('jwt', { session: false }, async(_err, user) => {
    if (user) {
      ctx.state.currentUser = user;
      ctx.state.currentUserId = user.dataValues.id;
      await next();
    } else {
      throwError(ctx, 'Error');
    }
  })(ctx, next);
};

const checkLoggedIn = async(ctx, next) => {
  await passport.authenticate('jwt', { session: false }, async(_err, user) => {
    if (user) {
      ctx.state.currentUserId = user.dataValues.id;
      ctx.state.currentUser = user;
    }
    await next();
  })(ctx, next);
};

export default {
  authenticate,
  checkLoggedIn
};
