import passport from 'koa-passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import bcrypt from 'bcryptjs';

import models from '../models/index';

const options = {
  usernameField: 'uid',
  passwordField: 'encryptedPassword',
  passReqToCallback: true
};

const tokenExtractor = req => {
  let token = null;
  if (req && req.header) {
    token = req.header['authorization'];
  }
  return token;
};

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromExtractors([tokenExtractor]),
  secretOrKey: process.env.SECRET_KEY_BASE
};

const comparePass = (userPassword, databasePassword) => {
  return bcrypt.compareSync(userPassword, databasePassword);
};

passport.serializeUser((user, done) => {
  return done(null, user.id);
});

passport.deserializeUser((id, done) => {
  return models.Users.findOne({ where: { id } })
    .then(user => done(null, user))
    .catch(err => done(err, null));
});

passport.use(new LocalStrategy(options, (req, uid, password, done) => {
  models.Users.findOne({ where: { uid } })
    .then(user => {
      if (!user) return done(null, false);
      if (!comparePass(password, user.encryptedPassword)) {
        return done(null, false, {message: 'user.notfound'});
      } else {
        return done(null, user);
      }
    })
    .catch(err => done(err));
}));

passport.use(new JwtStrategy(jwtOptions, (payload, done) => {
  return models.Users.findOne({ where: { id: payload.id } })
    .then(user => {
      done(null, user);
      return null;
    })
    .catch(err => {
      done(err, false);
      return null;
    });
}));
