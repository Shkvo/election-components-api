import jwt from 'jsonwebtoken';
import passport from 'koa-passport';
import models from '../models';
import { throwError } from '../helpers/error';
import { convertUserData } from '../helpers/auth';

const { Users } = models;

const all = async ctx => {
  try {
    const data = await Users.findAll();

    ctx.body = {
      status: 'success',
      data
    };
  } catch (error) {
    throwError(ctx, error);
  }
};

const get = async ctx => {
  try {
    const { id } = ctx.params;
    const data = await Users.findByPk(id);

    ctx.body = {
      status: 'success',
      data
    };
  } catch (error) {
    throwError(ctx, error);
  }
};

const create = async ctx => {
  try {
    const user = ctx.request.body;
    const data = await Users.create(user);

    ctx.body = {
      status: 'success',
      data
    };
  } catch (error) {
    throwError(ctx, error);
  }
};

const update = async ctx => {
  try {
    const user = ctx.request.body;
    const { id } = ctx.params;
    const data = await Users.update(user, { where: { id } });

    ctx.body = {
      status: 'success',
      data
    };
  } catch (error) {
    throwError(ctx, error);
  }
};

const remove = async ctx => {
  const { id } = ctx.params;
  const user = await Users.findOne({ where: { id } });

  try {
    await user.destroy();
    ctx.body = {
      status: 'success',
    };
  } catch (error) {
    throwError(ctx, error);
  }
};

const login = async ctx => {
  return passport.authenticate('local', (err, user) => {
    if (user) {
      const token = jwt.sign(convertUserData(user), process.env.SECRET_KEY_BASE);

      ctx.set({ 'Authorization': token });
      ctx.body = { user: convertUserData(user), token };
    } else {
      err && throwError(ctx, err);
    }
  })(ctx);
};

const logout = async ctx => {
  ctx.logout();
  ctx.body = {
    status: 'success',
    data: ctx.state.currentUser
  };
};

export default {
  all,
  get,
  login,
  logout,
  create,
  update,
  remove
};
