import models from '../models';
import { throwError } from '../helpers/error';

const { Regions } = models;

const all = async ctx => {
  try {
    const data = await Regions.findAll();

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
    const data = await Regions.findByPk(id);

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
    const region = ctx.request.body;
    const data = await Regions.create(region);

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
    const region = ctx.request.body;
    const data = await Regions.update(region);

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
  const region = await Regions.findOne({
    where: {
      id
    }
  });
  try {
    await region.destroy();
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
