import models from '../models';
import { throwError } from '../helpers/error';

const { Candidates } = models;

const all = async ctx => {
  try {
    const data = await Candidates.findAll();

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
    const data = await Candidates.findByPk(id);

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
    const candidate = ctx.request.body;
    const data = await Candidates.create(candidate);

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
    const candidate = ctx.request.body;
    const { id } = ctx.params;
    const data = await Candidates.update(candidate, { where: { id } });

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
  const candidate = await Candidates.findOne({
    where: {
      id
    }
  });
  try {
    await candidate.destroy();
    ctx.body = {
      status: 'success',
    };
  } catch (error) {
    throwError(ctx, error);
  }
};

export default {
  all,
  get,
  create,
  update,
  remove
};
