import passport from 'koa-passport';
import { throwError } from './error';

const authenticate = async(ctx, next) => {
  await passport.authenticate('jwt', { session: false }, async(err, user) => {
    if (user) {
      ctx.state.currentUser = user;
      ctx.state.currentUserId = user.dataValues.id;
      await next();
    } else {
      throwError(ctx, err);
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

const convertUserData = user => ({
  id: user.id,
  uid: user.uid,
  regionId: user.regionId,
  firstName: user.firstName,
  lastName: user.lastName,
  thirdName: user.thirdName,
  passportSerial: user.passportSerial,
  birthDate: user.birthDate,
});

export {
  authenticate,
  checkLoggedIn,
  convertUserData
};
